import React, { useEffect } from "react"
import { RouteComponentProps } from "react-router";
import { useAppSelector } from "../hooks";
import { RecipeInterface } from "../interfaces";
import { fetchRecipe } from "../manage_state/action_dispatch/recipe_actions";

interface MatchParams {
  id: string;
}

const IndividualRecipe: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  useEffect(() => {
    fetchRecipe(props.match.params.id);
  }, [props.match.params.id]);

  const recipe: RecipeInterface = useAppSelector(state => state.recipe);
  console.log(recipe);

  return(
    <div>
      <p>{recipe.name}</p>
    </div>
  )
}

export default IndividualRecipe;