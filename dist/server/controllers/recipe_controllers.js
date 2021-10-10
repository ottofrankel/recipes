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
exports.updateRecipe = exports.deleteRecipe = exports.getRecipes = exports.getRecipe = exports.postRecipe = void 0;
const recipe_model_1 = require("../models/recipe_model");
// Post a recipe
const postRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = yield recipe_model_1.Recipe.create({
        name: req.body.name,
        source: req.body.source ? req.body.source : "",
        dateAdded: new Date(),
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
// Get a recipe
const getRecipe = (req, res) => {
    res.status(200).json(req.recipe);
};
exports.getRecipe = getRecipe;
// Get multiple recipes
const getRecipes = (req, res) => {
    let query = {};
    // Name and source filters are case insenstive and search for passed value within the respective string values
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
    // Get recipes that have all tags passed in the search
    if (req.query.tags) {
        const tagsStr = req.query.tags;
        const tagsArr = tagsStr.split(",");
        query.tags = { $all: tagsArr };
    }
    let sort = {};
    if (req.query.sort) {
        const sortStr = req.query.sort;
        const sortArr = sortStr.split(":");
        // Make sure a sort dir is passed
        if (sortArr[1]) {
            let sortDir = sortArr[1].toLowerCase();
            // Make sure the sort dir is either asc or desc
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
    // Make the search
    recipe_model_1.Recipe.find(query)
        .sort(sort)
        .exec((err, recipes) => {
        if (err)
            throw err;
        res.status(200).send(recipes);
    });
};
exports.getRecipes = getRecipes;
// Delete a recipe
const deleteRecipe = (req, res) => {
    var _a;
    const id = (_a = req.recipe) === null || _a === void 0 ? void 0 : _a._id;
    recipe_model_1.Recipe.deleteOne({ _id: id }).exec(err => {
        if (err)
            throw err;
        res.status(200).send(id);
    });
};
exports.deleteRecipe = deleteRecipe;
// Update a recipe
const updateRecipe = (req, res) => {
    var _a;
    recipe_model_1.Recipe.findOneAndUpdate({ _id: (_a = req.recipe) === null || _a === void 0 ? void 0 : _a._id }, { $set: Object.assign(Object.assign({}, req.body), { dateUpdated: new Date() }) }, { new: true })
        .exec((err, recipe) => {
        if (err)
            throw err;
        res.status(200).json(recipe);
    });
};
exports.updateRecipe = updateRecipe;
