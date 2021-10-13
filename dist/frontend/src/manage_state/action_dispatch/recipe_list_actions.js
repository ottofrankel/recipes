"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRecipe = exports.fetchFavs = exports.fetchRecipes = void 0;
const axios_1 = __importDefault(require("axios"));
const store_1 = require("../store");
const constants_1 = require("../../constants");
const recipeListSlice_1 = require("../recipeListSlice");
const favsSlice_1 = require("../favsSlice");
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
const postRecipe = (recipe) => {
    axios_1.default.post(`${constants_1.BASE_API_URL}/recipes`, recipe)
        .then(res => {
        store_1.store.dispatch((0, recipeListSlice_1.newRecipe)(res.data));
    });
};
exports.postRecipe = postRecipe;
