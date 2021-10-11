import axios from 'axios';
import { store } from '../store';
import { BASE_API_URL } from '../../constants';
import { getRecipe } from '../recipeSlice';

export const fetchRecipe = (id: string): void => {
  axios.get(`${BASE_API_URL}/recipes/${id}`)
  .then(res => {
    store.dispatch(getRecipe(res.data));
  })
}