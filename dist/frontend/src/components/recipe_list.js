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
const RecipeList = ({ favsOnly }) => {
    var _a, _b, _c, _d, _e, _f;
    const location = (0, react_router_1.useLocation)();
    const history = (0, react_router_1.useHistory)();
    (0, react_1.useEffect)(() => {
        if (!favsOnly)
            (0, recipe_list_actions_1.fetchRecipes)(location.search);
        else
            (0, recipe_list_actions_1.fetchFavs)();
    }, [location, favsOnly]);
    let currentFilters = {};
    const params = location.search.split("&");
    for (let i = 0; i < params.length; i++) {
        const curr = params[i].split("=");
        let param;
        if (curr[0][0] === "?")
            param = curr[0].substring(1);
        else
            param = (_a = curr[0]) !== null && _a !== void 0 ? _a : '';
        const value = (_b = curr[1]) !== null && _b !== void 0 ? _b : '';
        if (value) {
            if (param === "name") {
                currentFilters.name = value;
                currentFilters.hasFilter = true;
            }
            if (param === "source") {
                currentFilters.source = value;
                currentFilters.hasFilter = true;
            }
            if (param === "type") {
                currentFilters.type = value;
                currentFilters.hasFilter = true;
            }
            if (param === "fav" && value === "true") {
                currentFilters.fav = true;
                currentFilters.hasFilter = true;
            }
            if (param === "tags") {
                currentFilters.tags = value;
                currentFilters.hasFilter = true;
            }
            if (param === "sort") {
                currentFilters.sort = value;
                currentFilters.hasFilter = true;
            }
        }
    }
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
                (0, jsx_runtime_1.jsx)(layout_1.Center, { children: (0, jsx_runtime_1.jsxs)(layout_1.VStack, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "page-title" }, { children: "Recipes:" }), void 0), currentFilters.hasFilter &&
                                (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: currentFilters.name && "name: " }, void 0), " ", (_c = currentFilters.name) !== null && _c !== void 0 ? _c : "", (0, jsx_runtime_1.jsx)("strong", { children: currentFilters.source && " source: " }, void 0), " ", (_d = currentFilters.source) !== null && _d !== void 0 ? _d : "", (0, jsx_runtime_1.jsxs)("strong", { children: [currentFilters.type && " type: ", " "] }, void 0), " ", (_e = currentFilters.type) !== null && _e !== void 0 ? _e : "", (0, jsx_runtime_1.jsxs)("strong", { children: [currentFilters.tags && " tags: ", " "] }, void 0), " ", (_f = currentFilters.tags) !== null && _f !== void 0 ? _f : "", (0, jsx_runtime_1.jsx)("strong", { children: currentFilters.fav && " favorites" }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ size: "xs", variant: "outline", color: colors_1.BASE_COLOR, borderColor: colors_1.BASE_COLOR, _hover: { bg: colors_1.BASE_COLOR, color: "white" }, onClick: () => history.push("/search-recipes") }, { children: "Apply Filters" }), void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(layout_1.SimpleGrid, Object.assign({ columns: [1, 3, 4], spacing: 10, m: 3 }, { children: renderRecipes() }), void 0)] }, void 0));
};
exports.default = RecipeList;
