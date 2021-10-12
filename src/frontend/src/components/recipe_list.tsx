import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { SimpleGrid } from "@chakra-ui/layout";
import { useAppSelector } from "../hooks";
import { fetchFavs, fetchRecipes } from "../manage_state/action_dispatch/recipe_list_actions";
import { RecipeInterface } from "../interfaces";
import RecipeListItem from "./recipe_list_item";

interface Props {
  favsOnly: boolean
}

const RecipeList: React.FC<Props> = ({ favsOnly }) => {
  const location = useLocation();

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
      <SimpleGrid columns={[1, 3, 4]} spacing={10} m={3}>
        {renderRecipes()}
      </SimpleGrid>
    </div>
  )
}

export default RecipeList;