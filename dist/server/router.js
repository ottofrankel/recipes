"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recipe_model_1 = require("./models/recipe_model");
const recipe_controllers_1 = require("./controllers/recipe_controllers");
const router = (app) => {
    app.param("recipe", (req, res, next, id) => {
        recipe_model_1.Recipe.findById(id).exec((err, recipe) => {
            if (!recipe) {
                res.status(404).send("Recipe not found");
                return res.end();
            }
            else if (err)
                throw err;
            else
                req.recipe = recipe;
            next();
        });
    });
    app.post("/api/recipes", recipe_controllers_1.postRecipe);
    app.get("/api/recipes", recipe_controllers_1.getRecipes);
    app.get("/api/recipes/:recipe", recipe_controllers_1.getRecipe);
    app.delete("/api/recipes/:recipe", recipe_controllers_1.deleteRecipe);
    app.put("/api/recipes/:recipe", recipe_controllers_1.updateRecipe);
};
exports.default = router;
