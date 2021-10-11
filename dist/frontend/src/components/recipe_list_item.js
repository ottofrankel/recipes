"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_1 = require("@chakra-ui/layout");
const RecipeListItem = ({ recipe }) => {
    const renderTags = () => {
        return (recipe.tags.map((tag, index) => {
            return ((0, jsx_runtime_1.jsx)(layout_1.Box, { children: tag }, recipe._id + '-' + index));
        }));
    };
    return ((0, jsx_runtime_1.jsxs)(layout_1.Box, Object.assign({ maxW: "sm", borderWidth: "1px", borderRadius: "lg", overflow: "hidden" }, { children: [(0, jsx_runtime_1.jsx)(layout_1.Box, { children: recipe.name }, void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, { children: ["From: ", recipe.source ? recipe.source : (0, jsx_runtime_1.jsx)("em", { children: "unknown" }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(layout_1.SimpleGrid, Object.assign({ columns: 5, spacing: 1 }, { children: renderTags() }), void 0)] }), void 0));
};
exports.default = RecipeListItem;
