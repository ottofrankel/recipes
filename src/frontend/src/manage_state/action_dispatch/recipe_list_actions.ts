import axios from 'axios';
import { store } from '../store';
import { BASE_API_URL } from '../../constants';
import { getRecipes } from '../recipeListSlice';
import { getFavs } from '../favsSlice';

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