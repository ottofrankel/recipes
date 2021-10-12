import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipeInterface } from "../interfaces";

const initialState: RecipeInterface[] = [];

export const favsSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    getFavs: (state, action: PayloadAction<RecipeInterface[]>) => {
      return action.payload;
    }
  }
})

export const { getFavs } = favsSlice.actions;
export default favsSlice.reducer;