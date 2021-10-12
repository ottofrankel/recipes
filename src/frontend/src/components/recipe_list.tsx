import React, { useEffect} from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import { useAppSelector } from "../hooks";
import { fetchRecipes } from "../manage_state/action_dispatch/recipe_list_actions";
import { RecipeInterface } from "../interfaces";
import RecipeListItem from "./recipe_list_item";

const RecipeList: React.FC = () => {
  useEffect(() => {
    fetchRecipes();
  }, []);

  const recipes = useAppSelector(state => state.recipeList);

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