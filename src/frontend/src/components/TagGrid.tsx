import React from "react";
import { useHistory } from "react-router";
import { SimpleGrid } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { RecipeInterface } from "../interfaces";
import { BASE_COLOR } from "../styles/colors";

interface Props {
  recipe: RecipeInterface
}

const TagGrid: React.FC<Props> = ({ recipe }) => {
  const history = useHistory();

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
          _hover={{ color: "white", bg: BASE_COLOR, cursor: "pointer"}}
          onClick={() => history.push("/recipes?tags=" + tag)}
          >
            {tag}
          </Tag>
        )
      })
    )
  }

  return (
    <SimpleGrid columns={4}>
      {renderTags()}
    </SimpleGrid>
  )
}

export default TagGrid;