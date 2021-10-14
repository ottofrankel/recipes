import { Center } from "@chakra-ui/layout";
import React, { useEffect} from "react";
import { RouteComponentProps } from "react-router";
import { fetchRecipe } from "../manage_state/action_dispatch/recipe_actions";
import { useAppSelector } from "../hooks";
import RecipeForm from "./recipe_form";

interface MatchParams {
  id: string;
}

const UpdateRecipeForm: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  useEffect(() => {
    fetchRecipe(props.match.params.id);
  }, [props.match.params.id]);

  const recipe = useAppSelector(state => state.recipe);

  return (
    <div>
      <Center>
        <h2 className="page-title">Update Recipe:</h2>
      </Center>

      <RecipeForm recipe={recipe} formType="update" />
    </div>
  )
}

export default UpdateRecipeForm;