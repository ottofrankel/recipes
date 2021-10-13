import axios from 'axios';
import { store } from '../store';
import { BASE_API_URL } from '../../constants';
import { getRecipes, newRecipe, removeRecipe } from '../recipeListSlice';
import { getFavs } from '../favsSlice';
import { RecipeInterface } from '../../interfaces';

export const fetchRecipes = (queryString: string): void => {
  axios.get(`${BASE_API_URL}/recipes${queryString}`)
  .then(res => {
    store.dispatch(getRecipes(res.data));
  })
}

export const fetchFavs = (): void => {
  axios.get(`${BASE_API_URL}/recipes?fav=true`)
  .then(res => {
    store.dispatch(getFavs(res.data));
  })
}

export const postRecipe = (recipe: RecipeInterface): void => {
  axios.post(`${BASE_API_URL}/recipes`, recipe)
  .then(res => {
    store.dispatch(newRecipe(res.data));
  })
}

export const deleteRecipe = (id: string | undefined): void => {
  axios.delete(`${BASE_API_URL}/recipes/${id}`)
  .then(res => {
    store.dispatch(removeRecipe(res.data));
  })
}