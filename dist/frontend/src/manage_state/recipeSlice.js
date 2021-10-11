"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecipe = exports.recipeSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    name: '',
    source: '',
    dateAdded: null,
    dateUpdated: null,
    type: '',
    ingredients: [],
    instructions: '',
    tags: [],
    fav: false
};
exports.recipeSlice = (0, toolkit_1.createSlice)({
    name: 'recipe',
    initialState,
    reducers: {
        getRecipe: (state, action) => {
            state = action.payload;
        }
    }
});
exports.getRecipe = exports.recipeSlice.actions.getRecipe;
exports.default = exports.recipeSlice.reducer;
