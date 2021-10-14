import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import { SimpleGrid, Center, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useAppSelector } from "../hooks";
import { fetchFavs, fetchRecipes } from "../manage_state/action_dispatch/recipe_list_actions";
import { RecipeInterface } from "../interfaces";
import RecipeListItem from "./recipe_list_item";
import { BASE_COLOR, BUTTON_HOVER_COLOR } from "../styles/colors";

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
      <Center>
        <VStack>
          <h2 className="page-title">Recipes:</h2>
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

      <SimpleGrid columns={[1, 3, 4]} spacing={10} m={3}>
        {renderRecipes()}
      </SimpleGrid>
    </div>
  )
}

export default RecipeList;