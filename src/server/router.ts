import { Application } from "express";

import { Recipe } from "./models/recipe_model";
import { postRecipe, getRecipe, getRecipes, deleteRecipe } from "./controllers/recipe_controllers";

const router = (app: Application): void => {

  app.param("recipe", (req, res, next, id) => {

    Recipe.findById(id).exec((err, recipe) => {
      if (!recipe) {
        res.status(404).send("Recipe not found");
        return res.end();

      } else if (err) throw err;

      else req.recipe = recipe;
      next();
    });
  });

  app.post("/api/recipes", postRecipe);
  app.get("/api/recipes", getRecipes);
  app.get("/api/recipes/:recipe", getRecipe);
  app.delete("/api/recipes/:recipe", deleteRecipe);
};

export default router;
