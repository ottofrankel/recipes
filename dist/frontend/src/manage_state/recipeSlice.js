"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRecipe = exports.recipeSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    _id: '',
    name: '',
    source: '',
    dateAdded: '',
    dateUpdated: '',
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
            var _a, _b;
            const createDate = (_a = action.payload.dateAdded) === null || _a === void 0 ? void 0 : _a.split(',')[0];
            const updateDate = (_b = action.payload.dateUpdated) === null || _b === void 0 ? void 0 : _b.split(',')[0];
            let recipe = Object.assign({}, action.payload);
            recipe.dateAdded = createDate !== null && createDate !== void 0 ? createDate : '';
            recipe.dateUpdated = updateDate !== null && updateDate !== void 0 ? updateDate : '';
            return recipe;
        },
    }
});
exports.setRecipe = exports.recipeSlice.actions.setRecipe;
exports.default = exports.recipeSlice.reducer;
