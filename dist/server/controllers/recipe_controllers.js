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
exports.getRecipes = exports.postRecipe = void 0;
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
const getRecipes = (req, res) => {
    let query = {};
    if (req.query.name) {
        query.name = {
            $regex: req.query.name,
            $options: "i",
        };
    }
    if (req.query.source) {
        query.source = {
            $regex: req.query.source,
            $options: "i",
        };
    }
    if (req.query.type)
        query.type = req.query.type;
    if (req.query.tags) {
        const tagsStr = req.query.tags;
        const tagsArr = tagsStr.split(",");
        query.tags = { $all: tagsArr };
    }
    let sort = {};
    if (req.query.sort) {
        const sortStr = req.query.sort;
        const sortArr = sortStr.split(":");
        if (sortArr[1]) {
            let sortDir = sortArr[1].toLowerCase();
            if (sortDir !== "asc" && sortDir !== "desc")
                sortDir = "";
            if (sortDir) {
                if (sortArr[0] === "name")
                    sort.name = sortDir;
                else if (sortArr[0] === "dateAdded")
                    sort.dateAdded = sortDir;
                else if (sortArr[0] === "dateUpdated")
                    sort.dateUpdated = sortDir;
            }
        }
    }
    recipe_model_1.Recipe.find(query)
        .sort(sort)
        .exec((err, recipes) => {
        if (err)
            throw err;
        res.status(200).send(recipes);
    });
};
exports.getRecipes = getRecipes;
