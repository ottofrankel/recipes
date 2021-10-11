import React, { useEffect} from "react";
import { useAppSelector } from "../hooks";
import { fetchRecipes } from "../manage_state/action_dispatch/recipe_list_actions";

const RecipeList: React.FC = () => {
  useEffect(() => {
    fetchRecipes();
  }, []);

  const recipes = useAppSelector(state => state.recipeList);

  console.log(recipes);

  return(
    <div>
    </div>
  )
}

export default RecipeList;