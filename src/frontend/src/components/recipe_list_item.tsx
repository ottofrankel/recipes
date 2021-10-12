import React from "react";
import { SimpleGrid, Box, HStack } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { Link } from "react-router-dom";
import { RecipeInterface } from "../interfaces";

interface Props {
  recipe: RecipeInterface;
}

const RecipeListItem: React.FC<Props> = ({recipe}) => {

  const renderTags = (): any => {
    return (
      recipe.tags.map((tag: string, index: number) => {
        return (
          <Tag fontSize="small" size="sm" color="white" bg="#16a085" key={recipe._id + '-' + index}>{tag}</Tag>
        )
      })
    )
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" borderColor="#16a085" overflow="hidden">
      <Box ml="1">
        <Box className="result-header" fontSize="md">
          <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
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