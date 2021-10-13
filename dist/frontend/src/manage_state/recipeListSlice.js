"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRecipe = exports.getRecipes = exports.recipeListSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = [];
exports.recipeListSlice = (0, toolkit_1.createSlice)({
    name: 'recipeList',
    initialState,
    reducers: {
        getRecipes: (state, action) => {
            return action.payload;
        },
        newRecipe: (state, action) => {
            return [...state, action.payload];
        }
    }
});
_a = exports.recipeListSlice.actions, exports.getRecipes = _a.getRecipes, exports.newRecipe = _a.newRecipe;
exports.default = exports.recipeListSlice.reducer;
