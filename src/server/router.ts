import { Application } from "express";

import { postRecipe, getRecipes } from "./controllers/recipe_controllers";

const router = (app: Application): void => {
  app.post("/api/recipes", postRecipe);
  app.get("/api/recipes", getRecipes);
};

export default router;
