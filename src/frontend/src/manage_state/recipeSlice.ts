import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeInterface } from '../interfaces';

const initialState: RecipeInterface = {
  _id: '',
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
    setRecipe: (state, action: PayloadAction<RecipeInterface>) => {
      return action.payload;
    },
  }
})

export const { setRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;