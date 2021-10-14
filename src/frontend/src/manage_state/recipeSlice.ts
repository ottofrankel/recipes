import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeInterface } from '../interfaces';

const initialState: RecipeInterface = {
  _id: '',
  name: '',
  source: '',
  dateAdded: '',
  dateUpdated: '',
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
      const createDate = action.payload.dateAdded?.split(',')[0];
      const updateDate = action.payload.dateUpdated?.split(',')[0];

      let recipe = {...action.payload}

      recipe.dateAdded = createDate ?? '';
      recipe.dateUpdated = updateDate ?? '';

      return recipe;
    },
  }
})

export const { setRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;