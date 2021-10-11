import axios from 'axios';
import { store } from '../store';
import { BASE_API_URL } from '../../constants';
import { getRecipes } from '../recipeListSlice';

export const fetchRecipes = (): void => {
  axios.get(`${BASE_API_URL}/recipes`)
  .then(res => {
    store.dispatch(getRecipes(res.data));
  })
}