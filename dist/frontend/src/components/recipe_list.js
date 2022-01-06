"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_1 = require("react-router");
const layout_1 = require("@chakra-ui/layout");
const button_1 = require("@chakra-ui/button");
const hooks_1 = require("../hooks");
const recipe_list_actions_1 = require("../manage_state/action_dispatch/recipe_list_actions");
const recipe_list_item_1 = __importDefault(require("./recipe_list_item"));
const colors_1 = require("../styles/colors");
const get_filters_1 = __importDefault(require("./get_filters"));
const RecipeList = ({ favsOnly }) => {
    var _a, _b, _c, _d;
    const location = (0, react_router_1.useLocation)();
    const history = (0, react_router_1.useHistory)();
    (0, react_1.useEffect)(() => {
        if (!favsOnly)
            (0, recipe_list_actions_1.fetchRecipes)(location.search);
        else
            (0, recipe_list_actions_1.fetchFavs)();
    }, [location, favsOnly]);
    const currentFilters = (0, get_filters_1.default)(location.search);
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
    return ((0, jsx_runtime_1.jsxs)("div", { children: [!favsOnly &&
                (0, jsx_runtime_1.jsx)(layout_1.Center, { children: (0, jsx_runtime_1.jsxs)(layout_1.VStack, { children: [(0, jsx_runtime_1.jsx)(layout_1.Box, Object.assign({ textStyle: "pageTitle" }, { children: (0, jsx_runtime_1.jsx)("h2", { children: "Recipes:" }, void 0) }), void 0), currentFilters.hasFilter &&
                                (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: currentFilters.name && "name: " }, void 0), " ", (_a = currentFilters.name) !== null && _a !== void 0 ? _a : "", (0, jsx_runtime_1.jsx)("strong", { children: currentFilters.source && " source: " }, void 0), " ", (_b = currentFilters.source) !== null && _b !== void 0 ? _b : "", (0, jsx_runtime_1.jsxs)("strong", { children: [currentFilters.type && " type: ", " "] }, void 0), " ", (_c = currentFilters.type) !== null && _c !== void 0 ? _c : "", (0, jsx_runtime_1.jsxs)("strong", { children: [currentFilters.tags && " tags: ", " "] }, void 0), " ", (_d = currentFilters.tags) !== null && _d !== void 0 ? _d : "", (0, jsx_runtime_1.jsx)("strong", { children: currentFilters.fav && " favorites" }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ size: "xs", variant: "outline", color: colors_1.BASE_COLOR, borderColor: colors_1.BASE_COLOR, _hover: { bg: colors_1.BASE_COLOR, color: "white" }, onClick: () => history.push("/search-recipes" + location.search) }, { children: "Apply Filters" }), void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(layout_1.SimpleGrid, Object.assign({ columns: { xl: 4, lg: 3, md: 2, sm: 1 }, spacing: [4, 7, 10], m: 3 }, { children: renderRecipes() }), void 0)] }, void 0));
};
exports.default = RecipeList;
