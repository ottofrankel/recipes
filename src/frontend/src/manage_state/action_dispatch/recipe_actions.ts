import axios from 'axios';
import { store } from '../store';
import { BASE_API_URL } from '../../constants';
import { setRecipe } from '../recipeSlice';
import { RecipeInterface } from '../../interfaces';

export const fetchRecipe = (id: string): void => {
  axios.get(`${BASE_API_URL}/recipes/${id}`)
  .then(res => {
    store.dispatch(setRecipe(res.data));
  })
}

export const updateRecipe = (_id: string | undefined, recipe: RecipeInterface): void => {
  axios.put(`${BASE_API_URL}/recipes/${_id}`, recipe)
  .then(res => {
    store.dispatch(setRecipe(res.data));
  })
}