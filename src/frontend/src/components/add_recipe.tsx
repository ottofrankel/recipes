import { Center } from "@chakra-ui/layout";
import React from "react";
import { IngInterface } from "../interfaces";
import RecipeForm from "./recipe_form";

const AddRecipeForm: React.FC = () => {
  let initialIngs: IngInterface[] = [];

  for (let i = 0; i < 6; i++) {
    const ingInput: IngInterface = {
      name: "",
      measurement: "",
      amount: ""
    }
    initialIngs.push(ingInput);
  }

 
  return (
    <div>
      <Center textStyle="pageTitle">
        <h2>Add Recipe: </h2>
      </Center>

      <RecipeForm recipe={{
        name: "", 
        source: "", 
        type: "", 
        instructions: "",
        ingredients: initialIngs,
        tags: [""],
        fav: false
        }}
        formType="new"
        />
    </div>
  )
}

export default AddRecipeForm;