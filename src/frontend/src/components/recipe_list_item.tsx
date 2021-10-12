import React from "react";
import { Box, HStack } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { Link } from "react-router-dom";
import { RecipeInterface } from "../interfaces";
import { BASE_COLOR } from "../styles/colors";

interface Props {
  recipe: RecipeInterface;
}

const RecipeListItem: React.FC<Props> = ({recipe}) => {

  const renderTags = (): any => {
    return (
      recipe.tags.map((tag: string, index: number) => {
        return (
          <Tag fontSize="small" size="sm" color="white" bg={BASE_COLOR} key={recipe._id + '-' + index}>{tag}</Tag>
        )
      })
    )
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" borderColor={BASE_COLOR}  overflow="hidden">
      <Box ml="1">
        <Box>
          <Link className="result-header" to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
        </Box>
        <Box className="result-source">From: {recipe.source ? recipe.source : <em>unknown</em>}</Box>
        <HStack spacing={1} mb="2">
          {renderTags()}
        </HStack>
      </Box>    
    </Box>
  )
}

export default RecipeListItem;