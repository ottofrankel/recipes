import { RecipeInterface } from "../../src/server/models/recipe_model";

declare module "express-serve-static-core" {
  interface Request {
    recipe?: RecipeInterface;
  }
}
