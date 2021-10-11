"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRecipes = void 0;
const axios_1 = __importDefault(require("axios"));
const store_1 = require("../store");
const constants_1 = require("../../constants");
const recipeListSlice_1 = require("../recipeListSlice");
const fetchRecipes = () => {
    axios_1.default.get(`${constants_1.BASE_API_URL}/recipes`)
        .then(res => {
        store_1.store.dispatch((0, recipeListSlice_1.getRecipes)(res.data));
    });
};
exports.fetchRecipes = fetchRecipes;
