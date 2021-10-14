import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryInterface } from "../interfaces";

const initialState: QueryInterface = {};

export const filterSlice = createSlice({
  name: "searchFilters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<QueryInterface>) => {
      return action.payload;
    }
  }
})

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;