import React, {useEffect} from "react";
import { useAppSelector } from "../hooks";
import { Heading, Center } from "@chakra-ui/layout";
import RecipeList from "./recipe_list";
import { BASE_COLOR } from "../styles/colors";
import { fetchFavs } from "../manage_state/action_dispatch/recipe_list_actions";

const Homescreen: React.FC = () => {
  useEffect(() => {
    fetchFavs();
  }, []);

  const recipes = useAppSelector(state => state.favs);

  return (
    <div>
      <Center>
        <Heading as="h2" color={BASE_COLOR}>Your Favorites</Heading>
      </Center>

      <RecipeList recipes={recipes}/>
    </div>
  )
}

export default Homescreen