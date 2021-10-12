import axios from 'axios';
import { store } from '../store';
import { BASE_API_URL } from '../../constants';
import { getRecipes } from '../recipeListSlice';
import { getFavs } from '../favsSlice';
import { QueryInterface } from '../../interfaces';

export const fetchRecipes = (query: QueryInterface): void => {
  let queryString: string = '?'

  if (query.name) queryString += 'name=' + query.name;
  if (query.source) queryString += '&source=' + query.source;
  if (query.type) queryString += '&type=' + query.type;
  if (query.fav) queryString += '&fav=true';
  if (query.tags) queryString += '&tags=' + query.tags;

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