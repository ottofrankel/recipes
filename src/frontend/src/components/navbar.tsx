import { Box, Grid, GridItem, Heading, HStack} from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import { BASE_COLOR } from "../styles/colors";

const Navbar: React.FC = () => {
  // const onRecipesClick = (): void => {
  //   fetchRecipes({sort: "name:asc"});
  // }

  return (
    <Box>
      <Grid bg={BASE_COLOR} templateColumns="repeat(5, 1fr)" h={{base: 14, sm: 16}}>
        <GridItem colSpan={2} ml="10">
          <Heading color="white">
            <Link to="/" className="site-title">What's Cooking?</Link>
          </Heading>
        </GridItem>

        <GridItem colStart={4}>

          <HStack color="white" spacing={3} mt={2}>
            <Link className="nav-link" to="/recipes?sort=name:asc">Your Recipes</Link>
            <Link className="nav-link" to="/">Favorites</Link>
            <Link className="nav-link" to="/add-recipe">Add Recipe</Link>
          </HStack>

        </GridItem>
      </Grid>
    </Box>
  )
}

export default Navbar;