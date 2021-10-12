"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_1 = require("react-router");
const layout_1 = require("@chakra-ui/layout");
const hooks_1 = require("../hooks");
const recipe_list_actions_1 = require("../manage_state/action_dispatch/recipe_list_actions");
const recipe_list_item_1 = __importDefault(require("./recipe_list_item"));
const RecipeList = ({ favsOnly }) => {
    const location = (0, react_router_1.useLocation)();
    (0, react_1.useEffect)(() => {
        if (!favsOnly)
            (0, recipe_list_actions_1.fetchRecipes)(location.search);
        else
            (0, recipe_list_actions_1.fetchFavs)();
    }, [location, favsOnly]);
    const recipeList = (0, hooks_1.useAppSelector)(state => state.recipeList);
    const favs = (0, hooks_1.useAppSelector)(state => state.favs);
    let recipes = [];
    if (favsOnly)
        recipes = favs;
    else
        recipes = recipeList;
    const renderRecipes = () => {
        return (recipes.map((recipe) => {
            if (recipe._id) {
                return ((0, jsx_runtime_1.jsx)(recipe_list_item_1.default, { recipe: recipe }, recipe._id));
            }
            return (0, jsx_runtime_1.jsx)("div", {}, void 0);
        }));
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(layout_1.SimpleGrid, Object.assign({ columns: [1, 3, 4], spacing: 10, m: 3 }, { children: renderRecipes() }), void 0) }, void 0));
};
exports.default = RecipeList;
