import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Center, VStack, Box, HStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import React, { useState, useEffect} from "react";
import { useHistory, RouteComponentProps } from "react-router";
import { RecipeInterface } from "../interfaces";
import { BASE_COLOR } from "../styles/colors";
import { fetchRecipe, updateRecipe } from "../manage_state/action_dispatch/recipe_actions";
import { useAppSelector } from "../hooks";

interface MatchParams {
  id: string;
}

const UpdateRecipeForm: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  const history = useHistory();

  useEffect(() => {
    fetchRecipe(props.match.params.id);
  }, [props.match.params.id]);

  const recipe = useAppSelector(state => state.recipe);

  interface Errors {
    name?: string,
    type?: string,
    ingredients?: string,
    instructions?: string
  }

  const preValidation: Errors = {};

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

  const checkErrors = () => {
    let hasError: boolean = false;
    let validationErrors: Errors = {};

    const ingredients = ingValues.filter(ing => ing.amount && ing.name);

    if (ingredients.length === 0) {
      validationErrors.ingredients = "Recipe must have at least one ingredient"
      hasError = true;
    } else {
      for (let i = 0; i < ingValues.length; i++) {
        const curr = ingValues[i];
  
        if (curr.name || curr.amount || curr.measurement) {
          if (!curr.name || !curr.amount) {
            validationErrors.ingredients = "Each ingredient must have name and amount"
            hasError = true;
          }     
        }
      }
    }

    if (!name) {
      validationErrors.name = "Required"
      hasError = true;
    }
    if (!type) {
      validationErrors.type = "Required"
      hasError = true;
    }
    if (!instructions) {
      validationErrors.instructions = "Required"
      hasError = true;
    }

    setErrors(validationErrors);
    return hasError;
  }

  const updateRecipeSubmit = () => {
    if (!checkErrors()) {
      const ingredients = ingValues.filter(ing => ing.amount && ing.name);

      let updatedRecipe: RecipeInterface = {
        name: name,
        source: source,
        type: type,
        ingredients: ingredients,
        instructions: instructions
      }

      if (tags) updatedRecipe.tags = tags.split(",");

      updateRecipe(recipe._id, updatedRecipe);
      history.push("/recipes/" + recipe._id)
    }  
  }

  return (
    <Center>
      <VStack>
        <h2 className="page-title">Add Recipe:</h2>

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
            <Select id={"recipe-type"} placeholder="select type" size="xs" onChange={e => setType(e.target.value)}>
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
              <HStack>
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
        _hover={{bg: "#1dbb9b"}}
        onClick={updateRecipeSubmit}
        >
          Update Recipe
        </Button>

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
      </VStack>
    </Center>
  )
}

export default UpdateRecipeForm;