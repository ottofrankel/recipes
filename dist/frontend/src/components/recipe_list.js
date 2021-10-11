"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const layout_1 = require("@chakra-ui/layout");
const hooks_1 = require("../hooks");
const recipe_list_actions_1 = require("../manage_state/action_dispatch/recipe_list_actions");
const recipe_list_item_1 = __importDefault(require("./recipe_list_item"));
const RecipeList = () => {
    (0, react_1.useEffect)(() => {
        (0, recipe_list_actions_1.fetchRecipes)();
    }, []);
    const recipes = (0, hooks_1.useAppSelector)(state => state.recipeList);
    const renderRecipes = () => {
        return (recipes.map((recipe) => {
            if (recipe._id) {
                return ((0, jsx_runtime_1.jsx)(recipe_list_item_1.default, { recipe: recipe }, recipe._id));
            }
            return (0, jsx_runtime_1.jsx)("div", {}, void 0);
        }));
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(layout_1.SimpleGrid, Object.assign({ columns: 3, spacing: 10 }, { children: renderRecipes() }), void 0) }, void 0));
};
exports.default = RecipeList;
