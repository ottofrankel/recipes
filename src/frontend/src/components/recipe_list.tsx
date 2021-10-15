import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import { SimpleGrid, Center, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useAppSelector } from "../hooks";
import { fetchFavs, fetchRecipes } from "../manage_state/action_dispatch/recipe_list_actions";
import { QueryInterface, RecipeInterface } from "../interfaces";
import RecipeListItem from "./recipe_list_item";
import { BASE_COLOR } from "../styles/colors";

interface Props {
  favsOnly: boolean
}

const RecipeList: React.FC<Props> = ({ favsOnly }) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!favsOnly)
      fetchRecipes(location.search);
    else
      fetchFavs();
  }, [location, favsOnly])

  let currentFilters: QueryInterface = {}

  const params = location.search.split("&")

  for (let i = 0; i < params.length; i++) {
    const curr = params[i].split("=");

    let param: string;

    if (curr[0][0] === "?") param = curr[0].substring(1);
    else param = curr[0] ?? ''

    const value = curr[1] ?? '';
    
    if (value) {
      if (param === "name") {
        currentFilters.name = value;
        currentFilters.hasFilter = true;
      }
      if (param === "source") {
        currentFilters.source = value;
        currentFilters.hasFilter = true;
      }
      if (param === "type") {
        currentFilters.type = value;
        currentFilters.hasFilter = true;
      }
      if (param === "fav" && value === "true") {
        currentFilters.fav = true;
        currentFilters.hasFilter = true;
      }
      if (param === "tags") {
        currentFilters.tags = value;
        currentFilters.hasFilter = true;
      }
      if (param === "sort") {
        currentFilters.sort = value;
        currentFilters.hasFilter = true;
      }
    }
  }

  const recipeList = useAppSelector(state => state.recipeList);
  const favs = useAppSelector(state => state.favs);

  let recipes: RecipeInterface[] = [];

  if (favsOnly)
    recipes = favs;
  else
    recipes = recipeList;

  const renderRecipes = (): any => {
    return (
      recipes.map((recipe: RecipeInterface) => {
        if (recipe._id) {
          return (
            <RecipeListItem recipe={recipe} key={recipe._id}/>
          )
        }

        return <div></div>;
      })
    )
  }

  return(
    <div>
      {!favsOnly && 
        <Center>
          <VStack>
            <h2 className="page-title">Recipes:</h2>

            {currentFilters.hasFilter &&
            <p>
              <strong>{currentFilters.name && "name: "}</strong> {currentFilters.name ?? ""}
              <strong>{currentFilters.source && " source: "}</strong> {currentFilters.source ?? ""}
              <strong>{currentFilters.type && " type: "} </strong> {currentFilters.type ?? ""}
              <strong>{currentFilters.tags && " tags: "} </strong> {currentFilters.tags ?? ""}
              <strong>{currentFilters.fav && " favorites"}</strong>
            </p>
            }

            <Button
              size="xs"
              variant="outline"
              color={BASE_COLOR}
              borderColor={BASE_COLOR}
              _hover={{bg: BASE_COLOR, color: "white"}}
              onClick={() => history.push("/search-recipes")}
            >
              Apply Filters
            </Button>
          </VStack>
        </Center>
      }
      
      <SimpleGrid columns={[1, 3, 4]} spacing={10} m={3}>
        {renderRecipes()}
      </SimpleGrid>
    </div>
  )
}

export default RecipeList;