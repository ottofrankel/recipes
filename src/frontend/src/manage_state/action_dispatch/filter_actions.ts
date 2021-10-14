import { QueryInterface } from "../../interfaces";
import { setFilters } from "../filterSlice";
import { store } from "../store";

export const newFilters = (filters: QueryInterface): void => {
  store.dispatch(setFilters(filters));
}