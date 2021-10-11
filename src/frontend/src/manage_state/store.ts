import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from './recipeSlice';
import recipeListReducer from './recipeListSlice';

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    recipeList: recipeListReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;