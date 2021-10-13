import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Center, VStack, Box, HStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import React, { useState} from "react";
import { useHistory } from "react-router";
import { IngInterface, RecipeInterface } from "../interfaces";
import { BASE_COLOR } from "../styles/colors";
import { postRecipe } from "../manage_state/action_dispatch/recipe_list_actions";

const AddRecipeForm: React.FC = () => {
  const history = useHistory();

  let initialIngs: IngInterface[] = [];

  for (let i = 0; i < 6; i++) {
    const ingInput: IngInterface = {
      name: "",
      measurement: "",
      amount: ""
    }
    initialIngs.push(ingInput);
  }

  const [ingValues, setIngValues] = useState(initialIngs);
  const [name, setName] = useState('');
  const [source, setSource] = useState('');
  const [type, setType] = useState('');
  const [instructions, setInstructions] = useState('');
  const [tags, setTags] = useState('');

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

  const newRecipeSubmit = () => {
    const ingredients = ingValues.filter(ing => ing.amount && ing.name);

    const newRecipe: RecipeInterface = {
      name: name,
      source: source,
      type: type,
      ingredients: ingredients,
      instructions: instructions,
      tags: tags.split(","),
      fav: false
    }

    postRecipe(newRecipe);
    history.push("/recipes?sort=name:asc")
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
        onClick={newRecipeSubmit}
        >
          Add Recipe
        </Button>
      </VStack>
    </Center>
  )
}

export default AddRecipeForm;