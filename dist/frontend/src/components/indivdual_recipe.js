"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hooks_1 = require("../hooks");
const recipe_actions_1 = require("../manage_state/action_dispatch/recipe_actions");
const IndividualRecipe = (props) => {
    (0, react_1.useEffect)(() => {
        (0, recipe_actions_1.fetchRecipe)(props.match.params.id);
    }, [props.match.params.id]);
    const recipe = (0, hooks_1.useAppSelector)(state => state.recipe);
    console.log(recipe);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: recipe.name }, void 0) }, void 0));
};
exports.default = IndividualRecipe;
