import React from "react";
import { Center } from "@chakra-ui/layout";
import RecipeList from "./recipe_list";

const Homescreen: React.FC = () => {
  return (
    <div>
      <Center textStyle="pageTitle">
        <h2>Your Favorites</h2>
      </Center>

      <RecipeList favsOnly={true}/>
    </div>
  )
}

export default Homescreen