import { Button } from "@chakra-ui/button";
import { Center, HStack, VStack, Container } from "@chakra-ui/layout";
import { List, ListItem } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"
import React, { useEffect } from "react"
import  { HeartOutline, Heart } from "react-ionicons/lib";
import { RouteComponentProps, useHistory } from "react-router";
import { useAppSelector } from "../hooks";
import { IngInterface, RecipeInterface } from "../interfaces";
import { fetchRecipe, updateRecipe } from "../manage_state/action_dispatch/recipe_actions";
import { deleteRecipe } from "../manage_state/action_dispatch/recipe_list_actions";
import { BASE_COLOR, BUTTON_HOVER_COLOR } from "../styles/colors";
import TagGrid from "./TagGrid";

interface MatchParams {
  id: string;
}

const IndividualRecipe: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  useEffect(() => {
    fetchRecipe(props.match.params.id);
  }, [props.match.params.id]);

  const history = useHistory();

  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  const { isOpen: isFavOpen, onOpen: onFavOpen, onClose: onFavClose } = useDisclosure();

  const recipe: RecipeInterface = useAppSelector(state => state.recipe);

  const handleDeleteClick = () => {
    deleteRecipe(recipe._id);
    history.push("/recipes?sort=name:asc")
  }

  const toggleFav = () => {
    updateRecipe(recipe._id, {...recipe, fav: !recipe.fav})
    onFavOpen();
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
          <HStack spacing={5}>
            <p className="date">Date created: {recipe.dateAdded}</p>
            {recipe.dateUpdated && <p className="date">Last updated: {recipe.dateUpdated}</p>}
          </HStack> 

          <HStack spacing={10}>
            <h4><strong>{recipe.type}</strong></h4>
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
            {recipe.fav ?
              <Heart 
               color={BASE_COLOR}
               cssClasses="fav-icon" 
               height="50px"
               width="30px"
               title="Remove from favorites"
               onClick={toggleFav}/>
              :
              <HeartOutline 
              color={BASE_COLOR} 
              cssClasses="fav-icon" 
              height="50px"
              width="30px"
              title="Add to favorites"
              onClick={toggleFav}/>
            }

            <Button 
            size="xs"
            bg={BASE_COLOR}
            color="white"
            _hover={{bg: BUTTON_HOVER_COLOR}}
            onClick={() => history.push("/update-recipe/" + recipe._id)}
            >
              Update Recipe
            </Button>

            <Button 
            size="xs"
            colorScheme="red"
            onClick={onDeleteOpen}
            >
              Delete
            </Button>
          </HStack>
        </VStack>            
      </Center>

      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete '{recipe.name}'?</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button 
              colorScheme="red" 
              mr={3} 
              onClick={handleDeleteClick}>
              Delete
            </Button>
            <Button variant="ghost" onClick={onDeleteClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isFavOpen} onClose={onFavClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>'{recipe.name}' {recipe.fav ? 'added to ' : 'removed from '} favorites</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button 
              color="white"
              bg={BASE_COLOR}
              mr={3}
              _hover={{bg: BUTTON_HOVER_COLOR}}
              onClick={onFavClose}
            >
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default IndividualRecipe;