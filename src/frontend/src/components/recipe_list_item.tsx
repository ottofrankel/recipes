import React from "react";
import { Box, HStack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { RecipeInterface } from "../interfaces";
import { BASE_COLOR } from "../styles/colors";
import TagGrid from "./TagGrid";

interface Props {
  recipe: RecipeInterface;
}

const RecipeListItem: React.FC<Props> = ({recipe}) => {
  return (
    <Box 
      maxW="sm"
      borderWidth="1px" 
      borderRadius="lg" 
      borderColor={BASE_COLOR}  
      overflow="hidden"
    >
      <Box ml="1">
        <Box>
          <Link className="result-header" to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
        </Box>

        <HStack>
          <p className="list-item-dates">Created on: {recipe.dateAdded?.split(',')[0]}</p>
          {recipe.dateUpdated && <p className="list-item-dates">Last updated: {recipe.dateUpdated.split(',')[0]}</p>}
        </HStack>
        
        <Box className="result-source">From: {recipe.source ? recipe.source : <em>unknown</em>}</Box>
        <TagGrid recipe={recipe}/>
      </Box>    
    </Box>
  )
}

export default RecipeListItem;