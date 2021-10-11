import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipeInterface } from "../interfaces";

const initialState: RecipeInterface[] = [];

export const recipeListSlice = createSlice({
  name: 'recipeList',
  initialState,
  reducers: {
    getRecipes: (state, action: PayloadAction<RecipeInterface[]>) => {
      return action.payload;
    }
  }
})

export const { getRecipes } = recipeListSlice.actions;
export default recipeListSlice.reducer;