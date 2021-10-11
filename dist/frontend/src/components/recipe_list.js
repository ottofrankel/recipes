"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hooks_1 = require("../hooks");
const recipe_list_actions_1 = require("../manage_state/action_dispatch/recipe_list_actions");
const RecipeList = () => {
    (0, react_1.useEffect)(() => {
        (0, recipe_list_actions_1.fetchRecipes)();
    }, []);
    const recipes = (0, hooks_1.useAppSelector)(state => state.recipeList);
    console.log(recipes);
    return ((0, jsx_runtime_1.jsx)("div", {}, void 0));
};
exports.default = RecipeList;
