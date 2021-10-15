import { Button } from "@chakra-ui/button";
import { Center, HStack, VStack, Container, Box } from "@chakra-ui/layout";
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
import { Input } from "@chakra-ui/input";
import { FormLabel } from "@chakra-ui/form-control";
import { Textarea } from "@chakra-ui/textarea";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react"
import  { HeartOutline, Heart } from "react-ionicons/lib";
import { RouteComponentProps, useHistory } from "react-router";
import printJS from "print-js";
import { useAppSelector } from "../hooks";
import { IngInterface, RecipeInterface } from "../interfaces";
import { fetchRecipe, updateRecipe } from "../manage_state/action_dispatch/recipe_actions";
import { deleteRecipe } from "../manage_state/action_dispatch/recipe_list_actions";
import { BASE_COLOR, BUTTON_HOVER_COLOR } from "../styles/colors";
import RecipePDF from "./recipe_pdf";
import TagGrid from "./TagGrid";
import generateEmailBody from "./generate-email-body";
import { validateEmail } from "./validation";

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
  const { isOpen: isEmailOpen, onOpen: onEmailOpen, onClose: onEmailClose } = useDisclosure();
  const { isOpen: isPrintOpen, onOpen: onPrintOpen, onClose: onPrintClose } = useDisclosure();

  const [emailTo, setEmailTo] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const recipe: RecipeInterface = useAppSelector(state => state.recipe);

  const handleDeleteClick = () => {
    deleteRecipe(recipe._id);
    history.push("/recipes?sort=name:asc")
  }

  const toggleFav = () => {
    updateRecipe(recipe._id, {...recipe, fav: !recipe.fav})
    onFavOpen();
  }

  const closeEmailModal = () => {
    setEmailTo('');
    setEmailMessage('');
    onEmailClose();
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
      <Center mt={5}>
        <VStack spacing={3} mb={5}>
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

          <HStack>
            <Button
              size="xs"
              bg={BASE_COLOR}
              color="white"
              _hover={{bg: BUTTON_HOVER_COLOR}}
              onClick={onEmailOpen}
            >
              Email recipe
            </Button>

            <PDFDownloadLink
                document={
                  <RecipePDF 
                    name={recipe.name}
                    source={recipe.source}
                    type={recipe.type}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    fav={recipe.fav}
                  />
                }
                fileName={`${recipe.name}-recipe.pdf`}
              >
                {({ blob, url, loading, error }) =>
                <Button
                  size="xs"
                  color="white"
                  bg={BASE_COLOR}
                  _hover={{bg: BUTTON_HOVER_COLOR}}
                >
                  {loading ? "Loading document..." : "Download PDF"}
                </Button>             
                }
              </PDFDownloadLink>

              <Button 
                size="xs"
                bg={BASE_COLOR}
                color="white"
                _hover={{bg: BUTTON_HOVER_COLOR}}
                onClick={onPrintOpen}
              >
                Print Recipe
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

      <Modal isOpen={isEmailOpen} onClose={closeEmailModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send '{recipe.name}' in an email:</ModalHeader>
          <ModalCloseButton />
          
          <Box mr={3} ml={3}>
            <FormLabel htmlFor="email-to">Send to:</FormLabel>
            <Input
              value={emailTo}
              id={"email-to"}
              type="email"
              onChange={e => setEmailTo(e.target.value)}
            />
          </Box>
          
          <Box mr={3} ml={3}>
            <FormLabel htmlFor="email-message">Include a message (optional):</FormLabel>
            <Textarea
              value={emailMessage}
              id={"email-message"}
              fontSize={14}
              onChange={e => setEmailMessage(e.target.value)}
            />
          </Box>

          <ModalFooter>
            {validateEmail(emailTo) ?
              <Button
                mr={3}
                color="white"
                bg={BASE_COLOR}
                _hover={{bg: BUTTON_HOVER_COLOR
                }}
              >
                <a
                  className="email-link"
                  href={`mailto:${emailTo}?subject=${recipe.name} recipe&body=${generateEmailBody(recipe, emailMessage)}`}
                  onClick={closeEmailModal}
                >
                  Generate email
                </a>
              </Button>
              :
              <p>Please enter a valid email.</p>
            }
            
            <Button variant="ghost" onClick={closeEmailModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isPrintOpen} onClose={onPrintClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <Box id="print-recipe" ml={5}>
            <h2 className="page-title">{recipe.name}</h2>
            <h4><strong>Ingredients:</strong></h4>
            <List>
              {renderIngredients()}
            </List>     
          
            <h4><strong>Instructions:</strong></h4>
            <Container maxWidth="100ch">{recipe.instructions}</Container>
          </Box>

          <ModalFooter>
            <Button 
              color="white"
              bg={BASE_COLOR}
              mr={3}
              _hover={{bg: BUTTON_HOVER_COLOR}}
              onClick={() => {
                printJS({printable: "print-recipe", type:"html"});
                onPrintClose();
              }}
            >
              Confirm
            </Button>

            <Button variant="ghost" onClick={onPrintClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default IndividualRecipe;