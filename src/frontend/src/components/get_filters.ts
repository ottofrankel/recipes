import { QueryInterface } from "../interfaces";

const getFilters = (location: string): QueryInterface => {
  let currentFilters: QueryInterface = {}

  const params = location.split("&")

  for (let i = 0; i < params.length; i++) {
    const curr = params[i].split("=");

    let param: string;

    if (curr[0][0] === "?") param = curr[0].substring(1);
    else param = curr[0] ?? ''

    const value = curr[1] ?? '';
    
    if (value) {
      if (param === "name") {
        currentFilters.name = value;
        currentFilters.hasFilter = true;
      }
      if (param === "source") {
        currentFilters.source = value;
        currentFilters.hasFilter = true;
      }
      if (param === "type") {
        currentFilters.type = value;
        currentFilters.hasFilter = true;
      }
      if (param === "fav" && value === "true") {
        currentFilters.fav = true;
        currentFilters.hasFilter = true;
      }
      if (param === "tags") {
        currentFilters.tags = value;
        currentFilters.hasFilter = true;
      }
      if (param === "sort") {
        currentFilters.sort = value;
        currentFilters.hasFilter = true;
      }
    }
  }
  return currentFilters;
}

export default getFilters;