import React from "react";
import { Heading, Center } from "@chakra-ui/layout";
import RecipeList from "./recipe_list";
import { BASE_COLOR } from "../styles/colors";

const Homescreen: React.FC = () => {
  return (
    <div>
      <Center>
        <Heading as="h2" color={BASE_COLOR}>Your Favorites</Heading>
      </Center>

      <RecipeList favsOnly={true}/>
    </div>
  )
}

export default Homescreen