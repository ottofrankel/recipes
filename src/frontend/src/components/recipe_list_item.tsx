import React from "react";
import { Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { RecipeInterface } from "../interfaces";
import { BASE_COLOR } from "../styles/colors";
import TagGrid from "./TagGrid";

interface Props {
  recipe: RecipeInterface;
}

const RecipeListItem: React.FC<Props> = ({recipe}) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" borderColor={BASE_COLOR}  overflow="hidden">
      <Box ml="1">
        <Box>
          <Link className="result-header" to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
        </Box>
        <Box className="result-source">From: {recipe.source ? recipe.source : <em>unknown</em>}</Box>
        <TagGrid recipe={recipe}/>
      </Box>    
    </Box>
  )
}

export default RecipeListItem;