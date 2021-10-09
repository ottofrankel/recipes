"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recipe_controllers_1 = require("./controllers/recipe_controllers");
const router = (app) => {
    app.post("/api/recipes", recipe_controllers_1.postRecipe);
};
exports.default = router;
