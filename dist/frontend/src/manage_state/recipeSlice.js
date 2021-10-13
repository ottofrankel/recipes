"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRecipe = exports.recipeSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    _id: '',
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
        setRecipe: (state, action) => {
            return action.payload;
        },
    }
});
exports.setRecipe = exports.recipeSlice.actions.setRecipe;
exports.default = exports.recipeSlice.reducer;
