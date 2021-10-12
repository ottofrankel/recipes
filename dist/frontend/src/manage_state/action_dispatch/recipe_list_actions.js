"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFavs = exports.fetchRecipes = void 0;
const axios_1 = __importDefault(require("axios"));
const store_1 = require("../store");
const constants_1 = require("../../constants");
const recipeListSlice_1 = require("../recipeListSlice");
const favsSlice_1 = require("../favsSlice");
// export const fetchRecipes = (query: QueryInterface): void => {
//   let queryString: string = '?'
//   if (query.name) queryString += 'name=' + query.name;
//   if (query.source) queryString += '&source=' + query.source;
//   if (query.type) queryString += '&type=' + query.type;
//   if (query.fav) queryString += '&fav=true';
//   if (query.tags) queryString += '&tags=' + query.tags;
//   if (query.sort) queryString += '&sort=' + query.sort;
//   axios.get(`${BASE_API_URL}/recipes${queryString}`)
//   .then(res => {
//     store.dispatch(getRecipes(res.data));
//   })
// }
const fetchRecipes = (queryString) => {
    axios_1.default.get(`${constants_1.BASE_API_URL}/recipes${queryString}`)
        .then(res => {
        store_1.store.dispatch((0, recipeListSlice_1.getRecipes)(res.data));
    });
};
exports.fetchRecipes = fetchRecipes;
const fetchFavs = () => {
    axios_1.default.get(`${constants_1.BASE_API_URL}/recipes?fav=true`)
        .then(res => {
        store_1.store.dispatch((0, favsSlice_1.getFavs)(res.data));
    });
};
exports.fetchFavs = fetchFavs;
