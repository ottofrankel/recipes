import React, { useState } from "react";
import { RecipeInterface, ValidationErrors } from "../interfaces";
import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Center, VStack, Box, HStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";
import { BASE_COLOR, BUTTON_HOVER_COLOR } from "../styles/colors";
import { postRecipe } from "../manage_state/action_dispatch/recipe_list_actions";
import { updateRecipe } from "../manage_state/action_dispatch/recipe_actions";
import checkErrors from "./validation";

interface Props {
  formType: "new" | "update";
  recipe: RecipeInterface
}

const RecipeForm: React.FC<Props> = ({
  recipe,
  formType
}) => {
  const history = useHistory();
  const preValidation: ValidationErrors = {};

  const ings = recipe.ingredients.map(ing => {
    return {
      amount: ing.amount,
      measurement: ing.measurement,
      name: ing.name
    }
  })

  const [ingValues, setIngValues] = useState(ings);
  const [name, setName] = useState(recipe.name);
  const [source, setSource] = useState(recipe.source);
  const [type, setType] = useState(recipe.type);
  const [instructions, setInstructions] = useState(recipe.instructions);
  const [tags, setTags] = useState(recipe.tags?.join());
  const [errors, setErrors] = useState(preValidation);

  const handleIngChange = (index: number, e: React.ChangeEvent<HTMLInputElement>, key: "amount" | "measurement" | "name") => {
    let newIngValues = [...ingValues];
    newIngValues[index][key] = e.currentTarget.value;
    setIngValues(newIngValues);
  }
  
  const newIngFields = () => {
    setIngValues([...ingValues, {amount: "", measurement: "", name: ""}])
  }

  const removeIngFields = (index: number) => {
    let newIngValues = [...ingValues];
    newIngValues.splice(index, 1);
    setIngValues(newIngValues);
  }

  const handleSubmit = () => {
    const errors = checkErrors(name, type, instructions, ingValues);

    if (!errors.error) {
      const ingredients = ingValues.filter(ing => ing.amount && ing.name);

      let newRecipe: RecipeInterface = {
        name: name,
        source: source,
        type: type,
        ingredients: ingredients,
        instructions: instructions,
        fav: recipe.fav
      }

      if (tags) newRecipe.tags = tags.split(",");
      
      if (formType === "new") {
        postRecipe(newRecipe);
        history.push("/recipes?sort=name:asc")  
      } else {
        updateRecipe(recipe._id, newRecipe);
        history.push("/recipes/" + recipe._id);
      }      
      
    } else {
      setErrors(errors.validationErrors);
    }
  }

  return (
    <Center>
      <VStack>
        <Box>
          <HStack>
            <FormLabel htmlFor="recipe-name">Name:</FormLabel>
            <Input 
            value={name}
             id={"recipe-name"} 
             size="xs"
             onChange={e => setName(e.target.value)}
             />
          </HStack>
          {errors.name && <p className="validationError">{errors.name}</p>}
        </Box>
        
        <Box>
          <HStack>
            <FormLabel htmlFor="recipe-source">Source:</FormLabel>
            <Input 
            value={source}
            id={"recipe-source"} 
            size="xs"
            onChange={e => setSource(e.target.value)}
            />
          </HStack>
        </Box>


        {/* TODO: Improve select */}
        <Box>
          <HStack>
            <FormLabel htmlFor="recipe-type" placeholder="select type">Type:</FormLabel>
            <Select 
              id={"recipe-type"} 
              placeholder="select type"
              size="xs" 
              onChange={e => setType(e.target.value)}
             >
              <option value="breakfast">Breakfast</option>    
              <option value="lunch">Lunch</option>    
              <option value="dinner">Dinner</option>    
              <option value="side">Side Dish/Appetizer</option>    
              <option value="dessert">Dessert</option>
              <option value="dessert">Drink</option>   
              <option value="other">Snack</option>
            </Select>
          </HStack>
          {errors.type && <p className="validationError">{errors.type}</p>}
        </Box>

        <Box>
          <FormLabel>Ingredients:</FormLabel>
          {ingValues.map((element, index) => {
            return (
              <HStack key={"ing-" + index}>
                <Input 
                 value={element.amount}
                 key={"amount" + index} 
                 id={"amount-" + index} 
                 placeholder="amount"
                 w="20"
                 size="xs"
                 m="1"
                 onChange={e => handleIngChange(index, e, "amount")}
                />

                <Input 
                value={element.measurement}
                key={"measurement" + index} 
                id={"measurement-" + index} 
                placeholder="measurement" 
                w="24"
                size="xs"
                m="1"
                onChange={e => handleIngChange(index, e, "measurement")}
                />

                <Input 
                 value={element.name}
                 key={"name" + index} 
                 id={"name-" + index} 
                 placeholder="name" 
                 w="30"
                 size="xs"
                 m="1"
                 onChange={e => handleIngChange(index, e, "name")}
                />

                { index ? 
                  <Button 
                    id={"remove-ing-" + index}
                    size="xs"
                    variant="outline"
                    color="red.300"
                    borderColor="red.300"
                    _hover={{ color: "white", bg: "red.300"}}
                    onClick={() => removeIngFields(index)}
                  >
                    -
                  </Button> 
                 : null }
              </HStack>
            )
          })}

          <Button size="xs" 
          color={BASE_COLOR}
          borderColor={BASE_COLOR}
          variant="outline"
          _hover={{ color: "white", bg: BASE_COLOR}}
          onClick={newIngFields}
          >
            Add ingredient
          </Button>
          {errors.ingredients && <p className="validationError">{errors.ingredients}</p>}
        </Box>
        
        <Box w={550}>
          <FormLabel htmlFor="recipe-instructions">Instructions:</FormLabel>
          <Textarea 
           resize="vertical"
           value={instructions} 
           id={"recipe-instructions"} 
           fontSize={12}
           onChange={e => setInstructions(e.target.value)}
          />
          {errors.instructions && <p className="validationError">{errors.instructions}</p>}
        </Box>

        <Box>
          <HStack>
            <FormLabel htmlFor="recipe-tags">Tags:</FormLabel>
            <Input 
            value={tags} 
            id={"recipe-tags"} 
            size="xs"
            onChange={e => setTags(e.target.value)}
            />

            <p className="tag-instructions"><em>*seperate tags by comma</em></p>
          </HStack>
        </Box>

        <Button 
        type="submit"
        bg={BASE_COLOR}
        color="white"
        _hover={{bg: BUTTON_HOVER_COLOR}}
        onClick={handleSubmit}
        >
          {formType === "new" ? "Add Recipe" : "Update Recipe" }
        </Button>
        
        { formType === "update" &&
          <Button 
          variant="outline"
          color={BASE_COLOR}
          borderColor={BASE_COLOR}
          size="xs"
          _hover={{bg: BASE_COLOR, color: "white"}}
          onClick={() => history.push("/recipes/" + recipe._id)}
          >
            Back
          </Button>
        }
        
      </VStack>
    </Center>
  )
}

export default RecipeForm;