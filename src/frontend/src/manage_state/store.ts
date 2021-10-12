import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from './recipeSlice';
import recipeListReducer from './recipeListSlice';
import favsReducer from './favsSlice';

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    recipeList: recipeListReducer,
    favs: favsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;