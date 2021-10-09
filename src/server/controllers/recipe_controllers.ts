import { Recipe, RecipeInterface } from "../models/recipe_model";
import { Request, Response } from "express";

const postRecipe = async (req: Request, res: Response) => {
  const today = new Date();
  const date = `${today.getMonth()}/${
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

export { postRecipe };
