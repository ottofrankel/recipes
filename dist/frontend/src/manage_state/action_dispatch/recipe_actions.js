"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRecipe = void 0;
const axios_1 = __importDefault(require("axios"));
const store_1 = require("../store");
const constants_1 = require("../../constants");
const recipeSlice_1 = require("../recipeSlice");
const fetchRecipe = (id) => {
    axios_1.default.get(`${constants_1.BASE_API_URL}/recipes/${id}`)
        .then(res => {
        store_1.store.dispatch((0, recipeSlice_1.getRecipe)(res.data));
    });
};
exports.fetchRecipe = fetchRecipe;
