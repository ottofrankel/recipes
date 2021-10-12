"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_1 = require("@chakra-ui/layout");
const react_router_dom_1 = require("react-router-dom");
const colors_1 = require("../styles/colors");
const TagGrid_1 = __importDefault(require("./TagGrid"));
const RecipeListItem = ({ recipe }) => {
    return ((0, jsx_runtime_1.jsx)(layout_1.Box, Object.assign({ maxW: "sm", borderWidth: "1px", borderRadius: "lg", borderColor: colors_1.BASE_COLOR, overflow: "hidden" }, { children: (0, jsx_runtime_1.jsxs)(layout_1.Box, Object.assign({ ml: "1" }, { children: [(0, jsx_runtime_1.jsx)(layout_1.Box, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ className: "result-header", to: `/recipes/${recipe._id}` }, { children: recipe.name }), void 0) }, void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, Object.assign({ className: "result-source" }, { children: ["From: ", recipe.source ? recipe.source : (0, jsx_runtime_1.jsx)("em", { children: "unknown" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(TagGrid_1.default, { recipe: recipe }, void 0)] }), void 0) }), void 0));
};
exports.default = RecipeListItem;
