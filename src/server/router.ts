import { Application } from "express";

import { postRecipe } from "./controllers/recipe_controllers";

const router = (app: Application): void => {
  app.post("/api/recipes", postRecipe);
};

export default router;
