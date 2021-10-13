import React from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { RecipeInterface } from "../interfaces";
import { BASE_COLOR } from "../styles/colors";

interface Props {
  recipe: RecipeInterface
}

const TagGrid: React.FC<Props> = ({ recipe }) => {
  const renderTags = () => {
    return (
      recipe.tags?.map((tag: string, index) => {
        return (
          <Tag 
          fontSize="small" 
          size="sm"
          bg="white"
          borderWidth="1px"
          color={BASE_COLOR}
          borderColor={BASE_COLOR}
          key={recipe._id + '-' + index}
          margin={2}
          overflow="hidden"
          _hover={{ color: "white", bg: BASE_COLOR}}
          >
            {tag}
          </Tag>
        )
      })
    )
  }

  return (
    <SimpleGrid columns={5}>
      {renderTags()}
    </SimpleGrid>
  )
}

export default TagGrid;