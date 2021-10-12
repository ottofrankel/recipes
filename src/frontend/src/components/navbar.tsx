import { Box, Grid, GridItem, Heading, HStack} from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import { BASE_COLOR } from "../styles/colors";

const Navbar: React.FC = () => {
  return (
    <Box>
      <Grid bg={BASE_COLOR} templateColumns="repeat(5, 1fr)" h={14}>
        <GridItem colSpan={2} ml="10">
          <Heading color="white">
            <Link to="/">What's Cooking?</Link>
          </Heading>
        </GridItem>
        <GridItem colStart={5}>
          <HStack color="white" spacing={3} mt={2}>
            <Link to="/">Favorites</Link>
            <p>Add Recipe</p>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Navbar;