import React, { useState } from "react";
import { useHistory } from "react-router";
import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Center, VStack, HStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Select } from "@chakra-ui/select";
import { BASE_COLOR, BUTTON_HOVER_COLOR } from "../styles/colors";
import { Checkbox } from "@chakra-ui/checkbox";

const RecipeSearch: React.FC = () => {
  const history = useHistory();

  const [nameFilter, setNameFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [favFilter, setFavFilter] = useState(false);
  const [tagFilter, setTagFilter] = useState('');

  const handleSearchClick = () => {
    let queryString: string = "?"

    if (nameFilter) queryString += "name=" + nameFilter;
    if (sourceFilter) queryString += "&source=" + sourceFilter;
    if (typeFilter) queryString += "&type=" + typeFilter;
    if (favFilter) queryString += "&fav=true";
    if (tagFilter) queryString += "&tags=" + tagFilter;

    history.push('/recipes' + queryString);
  }

  return (
    <Center>
      <VStack>
        <h2 className="page-title">Search Recipes:</h2>

        <FormLabel htmlFor="filter-name">Name:</FormLabel>
        <Input
          value={nameFilter}
          id={"filter-name"}
          size="xs"
          onChange={e => setNameFilter(e.target.value)}
        >
        </Input>

        <FormLabel htmlFor="filter-source">Source:</FormLabel>
        <Input
          value={sourceFilter}
          id={"filter-source"}
          size="xs"
          onChange={e => setSourceFilter(e.target.value)}
        >
        </Input>

        <FormLabel htmlFor="filter-type">Type:</FormLabel>
        <Select 
          id={"filter-type"}
          placeholder="select type"
          value={typeFilter}
          size="xs"
          onChange={e => setTypeFilter(e.target.value)}
        >
          <option value="breakfast">Breakfast</option>    
          <option value="lunch">Lunch</option>    
          <option value="dinner">Dinner</option>    
          <option value="side">Side Dish/Appetizer</option>    
          <option value="dessert">Dessert</option>
          <option value="dessert">Drink</option>   
          <option value="other">Snack</option>
        </Select>

        <FormLabel htmlFor="filter-tags">Tags:</FormLabel>

        <Input
          value={tagFilter}
          id={"filter-tags"}
          size="xs"
          onChange={e => setTagFilter(e.target.value)}
        >
        </Input>
        <p className="tag-instructions"><em>*seperate tags by space</em></p>

        <HStack>
          <Checkbox 
          size="sm" 
          iconColor={BASE_COLOR}
          colorScheme="grey"
          onChange={() => setFavFilter(!favFilter)}
          >
            Favorites only?
          </Checkbox>

          <Button 
          type="submit"
          bg={BASE_COLOR}
          color="white"
          _hover={{bg: BUTTON_HOVER_COLOR}}
          onClick={handleSearchClick}
          >
            Apply Filters
          </Button>
        </HStack>
      </VStack>
    </Center>
  )
}

export default RecipeSearch;