"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_1 = require("@chakra-ui/layout");
const react_router_dom_1 = require("react-router-dom");
const colors_1 = require("../styles/colors");
const recipe_list_actions_1 = require("../manage_state/action_dispatch/recipe_list_actions");
const Navbar = () => {
    const onRecipesClick = () => {
        (0, recipe_list_actions_1.fetchRecipes)({ sort: "name:asc" });
    };
    return ((0, jsx_runtime_1.jsx)(layout_1.Box, { children: (0, jsx_runtime_1.jsxs)(layout_1.Grid, Object.assign({ bg: colors_1.BASE_COLOR, templateColumns: "repeat(5, 1fr)", h: 14 }, { children: [(0, jsx_runtime_1.jsx)(layout_1.GridItem, Object.assign({ colSpan: 2, ml: "10" }, { children: (0, jsx_runtime_1.jsx)(layout_1.Heading, Object.assign({ color: "white" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: "What's Cooking?" }), void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(layout_1.GridItem, Object.assign({ colStart: 4 }, { children: (0, jsx_runtime_1.jsxs)(layout_1.HStack, Object.assign({ color: "white", spacing: 3, mt: 2 }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ className: "nav-link", to: "/recipes", onClick: onRecipesClick }, { children: "Your Recipes" }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ className: "nav-link", to: "/" }, { children: "Favorites" }), void 0), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "nav-link" }, { children: "Add Recipe" }), void 0)] }), void 0) }), void 0)] }), void 0) }, void 0));
};
exports.default = Navbar;
