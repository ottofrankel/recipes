import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import { SimpleGrid, Center, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useAppSelector } from "../hooks";
import { fetchFavs, fetchRecipes } from "../manage_state/action_dispatch/recipe_list_actions";
import { QueryInterface, RecipeInterface } from "../interfaces";
import RecipeListItem from "./recipe_list_item";
import { BASE_COLOR } from "../styles/colors";
import { newFilters } from "../manage_state/action_dispatch/filter_actions";

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
    console.log(curr);

    const param = curr[0] ?? '';
    const value = curr[1] ?? '';
    
    if (value) {
      if (param === "name" || param === "source" || param === "type" || param === "tags" || param === "sort")
      // if (param === "name") currentFilters.name = value;
      // if (param === "source") currentFilters.source = value;
      // if (param === "type") currentFilters.type = value;
      // if (param === "fav" && value === "true") currentFilters.fav = true;
      // if (param === "tags") currentFilters.tags = value;
      // if (param === "sort") currentFilters.sort = value;
      currentFilters[param] = value;
      currentFilters.hasFilter = true;
    }  else if (param === "fav" && value === "true") {
      currentFilters.fav = true;
      currentFilters.hasFilter = true;
    }      
  }

  // newFilters(currentFilters);

  const recipeList = useAppSelector(state => state.recipeList);
  const favs = useAppSelector(state => state.favs);
  // const filters = useAppSelector(state => state.filter);

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
            {currentFilters.hasFilter 
            ? 
              <h2 className="page-title">Results for: 
                {currentFilters.name && "|name: " + currentFilters.name}
                {currentFilters.source && "|source: " + currentFilters.source}
                {currentFilters.type && "|type: " + currentFilters.type}
                {currentFilters.tags && "|tags: " + currentFilters.tags}
                {currentFilters.fav && "|favorites: true"}
                sort by: {currentFilters.sort}
              </h2> 
            : 
              <h2 className="page-title">Recipes:</h2>
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