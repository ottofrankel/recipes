import { Box, Grid, GridItem, Heading, HStack} from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import { BASE_COLOR } from "../styles/colors";
import { fetchRecipes } from "../manage_state/action_dispatch/recipe_list_actions";

const Navbar: React.FC = () => {
  const onRecipesClick = (): void => {
    fetchRecipes({sort: "name:asc"});
  }

  return (
    <Box>
      <Grid bg={BASE_COLOR} templateColumns="repeat(5, 1fr)" h={14}>
        <GridItem colSpan={2} ml="10">
          <Heading color="white">
            <Link to="/">What's Cooking?</Link>
          </Heading>
        </GridItem>

        <GridItem colStart={4}>

          <HStack color="white" spacing={3} mt={2}>
            <Link className="nav-link" to="/recipes" onClick={onRecipesClick}>Your Recipes</Link>
            <Link className="nav-link" to="/">Favorites</Link>
            <p className="nav-link">Add Recipe</p>
          </HStack>

        </GridItem>
      </Grid>
    </Box>
  )
}

export default Navbar;