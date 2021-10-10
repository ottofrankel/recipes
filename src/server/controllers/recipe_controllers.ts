import { Recipe, RecipeInterface } from "../models/recipe_model";
import { Request, Response } from "express";

// Post a recipe
const postRecipe = async (req: Request, res: Response) => {
  const today: Date = new Date();
  const date: string = `${today.getMonth()}/${
    today.getDate() + 1
  }/${today.getFullYear()}`;

  const recipe: RecipeInterface = await Recipe.create({
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
};

// Get a recipe
const getRecipe = (req: Request, res: Response): void => {
  res.status(200).json(req.recipe);
}

// Get multiple recipes
const getRecipes = (req: Request, res: Response): void => {
  // Build the query
  type StringQuery = {
    $regex: string;
    $options: string;
  };

  type TagQuery = {
    $all: string[];
  };

  type Query = {
    name?: StringQuery;
    source?: StringQuery;
    type?: string;
    tags?: TagQuery;
  };

  let query: Query = {};

  // Name and source filters are case insenstive and search for passed value within the respective string values
  if (req.query.name) {
    query.name = {
      $regex: req.query.name as string,
      $options: "i",
    };
  }

  if (req.query.source) {
    query.source = {
      $regex: req.query.source as string,
      $options: "i",
    };
  }

  if (req.query.type) query.type = req.query.type as string;

  // Get recipes that have all tags passed in the search
  if (req.query.tags) {
    const tagsStr: string = req.query.tags as string;
    const tagsArr: string[] = tagsStr.split(",");
    query.tags = { $all: tagsArr };
  }

  // Build the sort
  type Sort = {
    name?: string;
    dateAdded?: string;
    dateUpdated?: string;
  };

  let sort: Sort = {};

  if (req.query.sort) {
    const sortStr: string = req.query.sort as string;
    const sortArr = sortStr.split(":");

    // Make sure a sort dir is passed
    if (sortArr[1]) {
      let sortDir: string = sortArr[1].toLowerCase();

      // Make sure the sort dir is either asc or desc
      if (sortDir !== "asc" && sortDir !== "desc") sortDir = "";

      if (sortDir) {
        if (sortArr[0] === "name") sort.name = sortDir;
        else if (sortArr[0] === "dateAdded") sort.dateAdded = sortDir;
        else if (sortArr[0] === "dateUpdated") sort.dateUpdated = sortDir;
      }
    }
  }

  // Make the search
  Recipe.find(query)
    .sort(sort)
    .exec((err, recipes) => {
      if (err) throw err;
      res.status(200).send(recipes);
    });
};

export { postRecipe, getRecipe, getRecipes };
