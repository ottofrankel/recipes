import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/layout";
import { RecipeInterface } from "../interfaces";

interface Props {
  recipe: RecipeInterface;
}

const RecipeListItem: React.FC<Props> = ({recipe}) => {

  const renderTags = (): any => {
    return (
      recipe.tags.map((tag: string, index: number) => {
        return (
          <Box key={recipe._id + '-' + index}>{tag}</Box>
        )
      })
    )
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box>{recipe.name}</Box>
      <Box>From: {recipe.source ? recipe.source : <em>unknown</em>}</Box>
      <SimpleGrid columns={5} spacing={1}>
        {renderTags()}
      </SimpleGrid>
    </Box>
  )
}

export default RecipeListItem;