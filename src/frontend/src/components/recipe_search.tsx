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
  const [sort, setSort] = useState('');

  const handleSearchClick = () => {
    let queryString: string = "?"

    if (nameFilter) queryString += "name=" + nameFilter;
    if (sourceFilter) queryString += "&source=" + sourceFilter;
    if (typeFilter) queryString += "&type=" + typeFilter;
    if (favFilter) queryString += "&fav=true";
    if (tagFilter) queryString += "&tags=" + tagFilter;
    if (sort) queryString += "&sort=" + sort;

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
          <option value="Breakfast">Breakfast</option>    
          <option value="Lunch">Lunch</option>    
          <option value="Dinner">Dinner</option>    
          <option value="Side">Side Dish/Appetizer</option>    
          <option value="Dessert">Dessert</option>
          <option value="Drink">Drink</option>   
          <option value="Snack">Snack</option>
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

        <FormLabel htmlFor="sort">Type:</FormLabel>
        <Select 
          id={"sort"}
          placeholder="sort by..."
          value={sort}
          size="xs"
          onChange={e => setSort(e.target.value)}
        >
          <option value="name:asc">Name ascending</option>    
          <option value="name:desc">Name descending</option>    
          <option value="dateAdded:asc">Date added ascending</option>    
          <option value="dateAdded:desc">Date added descending</option>    
          <option value="dateUpdated:asc">Last updated ascending</option>
          <option value="dateUpdated:desc">Last updated descending</option>
        </Select>

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