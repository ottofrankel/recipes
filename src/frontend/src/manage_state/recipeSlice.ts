import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeInterface } from '../interfaces';

const initialState: RecipeInterface = {
  name: '',
  source: '',
  dateAdded: null,
  dateUpdated: null,
  type: '',
  ingredients: [],
  instructions: '',
  tags: [],
  fav: false
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    getRecipe: (state, action: PayloadAction<RecipeInterface>) => {
      return state;
    }
  }
})

export const { getRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;