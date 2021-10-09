"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose_1 = require("mongoose");
const ingredient_1 = require("./ingredient");
const RecipeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    source: String,
    dateAdded: { type: Date, required: true },
    dateUpdated: Date,
    type: { type: String, required: true },
    ingredients: { type: [ingredient_1.IngSchema], required: true },
    instructions: { type: String, required: true },
    tags: [String],
    fav: { type: Boolean, required: true },
});
const Recipe = (0, mongoose_1.model)("Recipe", RecipeSchema);
exports.Recipe = Recipe;
