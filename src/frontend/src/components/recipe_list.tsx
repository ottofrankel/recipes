import React from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import { useAppSelector } from "../hooks";
import { RecipeInterface } from "../interfaces";
import RecipeListItem from "./recipe_list_item";

interface Props {
  listType: 'all' | 'favs';
}

const RecipeList: React.FC<Props> = ({ listType }) => {

  const recipeList = useAppSelector(state => state.recipeList);
  const favs = useAppSelector(state => state.favs);

  let recipes: RecipeInterface[] = [];

  if (listType === 'favs')
    recipes = favs;
  else
    recipes = recipeList;

  const renderRecipes = (): any => {
    return (
      recipes.map((recipe: RecipeInterface) => {
        if (recipe._id) {
          return (
            <RecipeListItem recipe={recipe} key={recipe._id}/>
          )
        }

        return <div></div>;
      })
    )
  }

  return(
    <div>
      <SimpleGrid columns={[1, 3, 4]} spacing={10} m={3}>
        {renderRecipes()}
      </SimpleGrid>
    </div>
  )
}

export default RecipeList;