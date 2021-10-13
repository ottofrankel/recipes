import React from "react";
import { Center } from "@chakra-ui/layout";
import RecipeList from "./recipe_list";

const Homescreen: React.FC = () => {
  return (
    <div>
      <Center>
        <h2 className="page-title">Your Favorites</h2>
      </Center>

      <RecipeList favsOnly={true}/>
    </div>
  )
}

export default Homescreen