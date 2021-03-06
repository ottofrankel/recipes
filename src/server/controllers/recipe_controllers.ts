import { Request, Response } from "express";
import { Recipe, RecipeInterface } from "../models/recipe_model";


// Post a recipe
const postRecipe = async (req: Request, res: Response) => {
  const recipe: RecipeInterface = await Recipe.create({
    name: req.body.name,
    source: req.body.source ? req.body.source : "",
    dateAdded: new Date(Date.now()).toLocaleString(),
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
    fav?: boolean;
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
  if (req.query.fav === 'true') query.fav = true;

  // Get recipes that have all tags passed in the search
  if (req.query.tags) {
    const tagsStr: string = req.query.tags as string;
    const tagsArr: string[] = tagsStr.split(" ");
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
      if (sortDir === "asc" || sortDir === "desc") {
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

// Delete a recipe
const deleteRecipe = (req: Request, res: Response): void => {
  const id: string = req.recipe?._id;

  Recipe.deleteOne({_id: id}).exec(err => {
    if (err) throw err;
    res.status(200).send(id);
  })
}

// Update a recipe
const updateRecipe = (req: Request, res: Response): void => {
  Recipe.findOneAndUpdate({_id: req.recipe?._id}, {$set: {...req.body, dateUpdated: new Date(Date.now()).toLocaleString()}}, {new: true})
  .exec((err, recipe) => {
    if (err) throw err;
    res.status(200).json(recipe);
  })
}

export { postRecipe, getRecipe, getRecipes, deleteRecipe, updateRecipe };
