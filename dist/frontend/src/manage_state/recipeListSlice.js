"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecipes = exports.recipeListSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = [];
exports.recipeListSlice = (0, toolkit_1.createSlice)({
    name: 'recipeList',
    initialState,
    reducers: {
        getRecipes: (state, action) => {
            return action.payload;
        }
    }
});
exports.getRecipes = exports.recipeListSlice.actions.getRecipes;
exports.default = exports.recipeListSlice.reducer;
