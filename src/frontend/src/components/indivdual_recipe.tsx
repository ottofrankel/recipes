import { Button } from "@chakra-ui/button";
import { Center, HStack, VStack, Container } from "@chakra-ui/layout";
import { List, ListItem } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"
import React, { useEffect } from "react"
import { RouteComponentProps, useHistory } from "react-router";
import { useAppSelector } from "../hooks";
import { IngInterface, RecipeInterface } from "../interfaces";
import { fetchRecipe } from "../manage_state/action_dispatch/recipe_actions";
import { deleteRecipe } from "../manage_state/action_dispatch/recipe_list_actions";
import TagGrid from "./TagGrid";

interface MatchParams {
  id: string;
}

const IndividualRecipe: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  useEffect(() => {
    fetchRecipe(props.match.params.id);
  }, [props.match.params.id]);

  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const recipe: RecipeInterface = useAppSelector(state => state.recipe);

  const handleDeleteClick = () => {
    deleteRecipe(recipe._id);
    history.push("/recipes?sort=name:asc")
  }

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

  return(
    <div>
      <Center mt={10}>
        <VStack spacing={3}>
          <h2 className="page-title">{recipe.name}</h2>
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

          <TagGrid recipe={recipe}/>

          <HStack>
            <Button 
            size="xs"
            colorScheme="red"
            onClick={onOpen}
            >
              Delete
            </Button>
          </HStack>
        </VStack>            
      </Center>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete '{recipe.name}'?</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleDeleteClick}>
              Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default IndividualRecipe;