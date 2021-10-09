"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRecipe = void 0;
const recipe_model_1 = require("../models/recipe_model");
const postRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const date = `${today.getMonth()}/${today.getDate() + 1}/${today.getFullYear()}`;
    const recipe = yield recipe_model_1.Recipe.create({
        name: req.body.name,
        source: req.body.source ? req.body.source : "",
        dateAdded: date,
        type: req.body.type,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        tags: req.body.tags ? req.body.tags : [],
        fav: req.body.fav,
    });
    recipe.save();
    res.status(200).json(recipe);
});
exports.postRecipe = postRecipe;
