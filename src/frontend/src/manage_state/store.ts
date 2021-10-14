import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from './recipeSlice';
import recipeListReducer from './recipeListSlice';
import favsReducer from './favsSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    recipeList: recipeListReducer,
    favs: favsReducer,
    filter: filterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;