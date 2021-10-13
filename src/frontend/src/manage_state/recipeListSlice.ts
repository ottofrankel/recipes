import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipeInterface } from "../interfaces";

const initialState: RecipeInterface[] = [];

export const recipeListSlice = createSlice({
  name: 'recipeList',
  initialState,
  reducers: {
    getRecipes: (state, action: PayloadAction<RecipeInterface[]>) => {
      return action.payload;
    },
    newRecipe: (state, action: PayloadAction<RecipeInterface>) => {
      return [...state, action.payload]
    }
  }
})

export const { getRecipes, newRecipe } = recipeListSlice.actions;
export default recipeListSlice.reducer;