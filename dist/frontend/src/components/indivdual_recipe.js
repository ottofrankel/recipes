"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_1 = require("@chakra-ui/layout");
const layout_2 = require("@chakra-ui/layout");
const react_1 = require("react");
const hooks_1 = require("../hooks");
const recipe_actions_1 = require("../manage_state/action_dispatch/recipe_actions");
const TagGrid_1 = __importDefault(require("./TagGrid"));
const IndividualRecipe = (props) => {
    (0, react_1.useEffect)(() => {
        (0, recipe_actions_1.fetchRecipe)(props.match.params.id);
    }, [props.match.params.id]);
    const recipe = (0, hooks_1.useAppSelector)(state => state.recipe);
    const renderIngredients = () => {
        return (recipe.ingredients.map((ing) => {
            return ((0, jsx_runtime_1.jsx)(layout_2.ListItem, { children: (0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("strong", { children: ing.amount }, void 0) }, void 0), ing.measurement && (0, jsx_runtime_1.jsx)("p", { children: ing.measurement }, void 0), (0, jsx_runtime_1.jsx)("p", { children: ing.name }, void 0)] }, void 0) }, ing._id));
        }));
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(layout_1.Center, Object.assign({ mt: 10 }, { children: (0, jsx_runtime_1.jsxs)(layout_1.VStack, Object.assign({ spacing: 3 }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "recipe-name" }, { children: recipe.name }), void 0), (0, jsx_runtime_1.jsxs)(layout_1.HStack, Object.assign({ spacing: 10 }, { children: [(0, jsx_runtime_1.jsx)("h4", { children: recipe.type }, void 0), recipe.source && (0, jsx_runtime_1.jsxs)("h4", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "From:" }, void 0), " ", recipe.source] }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("h4", { children: (0, jsx_runtime_1.jsx)("strong", { children: "Ingredients:" }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(layout_2.List, { children: renderIngredients() }, void 0), (0, jsx_runtime_1.jsx)("h4", { children: (0, jsx_runtime_1.jsx)("strong", { children: "Instructions:" }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(layout_1.Container, Object.assign({ maxWidth: "70ch" }, { children: recipe.instructions }), void 0), (0, jsx_runtime_1.jsx)(TagGrid_1.default, { recipe: recipe }, void 0)] }), void 0) }), void 0) }, void 0));
};
exports.default = IndividualRecipe;
