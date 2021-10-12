import { Center, HStack, VStack, StackDivider, Box, SimpleGrid, Container } from "@chakra-ui/layout";
import { List, ListItem } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React, { useEffect } from "react"
import { RouteComponentProps } from "react-router";
import { useAppSelector } from "../hooks";
import { IngInterface, RecipeInterface } from "../interfaces";
import { fetchRecipe } from "../manage_state/action_dispatch/recipe_actions";
import { BASE_COLOR } from "../styles/colors";

interface MatchParams {
  id: string;
}

const IndividualRecipe: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  useEffect(() => {
    fetchRecipe(props.match.params.id);
  }, [props.match.params.id]);

  const recipe: RecipeInterface = useAppSelector(state => state.recipe);

  const renderIngredients = () => {
    return (
      recipe.ingredients.map((ing: IngInterface) => {
        return (
          <ListItem key={ing._id}>
            <HStack>
              <p><strong>{ing.amount}</strong></p>
              {ing.measurement && <p>{ing.measurement}</p>}
              <p>{ing.name}</p>
            </HStack>
          </ListItem>
        )
      })
    )
  }

  const renderTags = () => {
    return (
      recipe.tags.map((tag: string, index) => {
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
          _hover={{ color: "white", bg: BASE_COLOR}}
          >
            {tag}
          </Tag>
        )
      })
    )
  }

  return(
    <div>
      <Center mt={10}>
        <VStack spacing={3}>
          <h2 className="recipe-name">{recipe.name}</h2>
          <HStack spacing={10}>
            <h4>{recipe.type}</h4>
            {recipe.source && <h4><strong>From:</strong> {recipe.source}</h4>}
          </HStack>  
 
          <h4><strong>Ingredients:</strong></h4>
          <List>
            {renderIngredients()}
          </List>     
        
          <h4><strong>Instructions:</strong></h4>
          <Container maxWidth="70ch">{recipe.instructions}</Container>
          

          <SimpleGrid columns={5}>
            {renderTags()}
          </SimpleGrid>

        </VStack>            
      </Center>     
    </div>
  )
}

export default IndividualRecipe;