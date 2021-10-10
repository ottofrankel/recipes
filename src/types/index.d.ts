import { RecipeInterface } from "../server/models/recipe_model";

declare module "express-serve-static-core" {
  interface Request {
    recipe?: RecipeInterface;
  }
}
