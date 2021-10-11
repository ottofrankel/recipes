"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const recipe_actions_1 = require("../manage_state/action_dispatch/recipe_actions");
const IndividualRecipe = () => {
    const handleClick = (e) => {
        (0, recipe_actions_1.fetchRecipe)('6161d7d76eda10350312db76');
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleClick }, { children: "click me" }), void 0) }, void 0));
};
exports.default = IndividualRecipe;
