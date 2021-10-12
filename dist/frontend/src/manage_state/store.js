"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const recipeSlice_1 = __importDefault(require("./recipeSlice"));
const recipeListSlice_1 = __importDefault(require("./recipeListSlice"));
const favsSlice_1 = __importDefault(require("./favsSlice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        recipe: recipeSlice_1.default,
        recipeList: recipeListSlice_1.default,
        favs: favsSlice_1.default
    }
});
