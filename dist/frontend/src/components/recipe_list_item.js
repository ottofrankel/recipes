"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_1 = require("@chakra-ui/layout");
const tag_1 = require("@chakra-ui/tag");
const react_router_dom_1 = require("react-router-dom");
const RecipeListItem = ({ recipe }) => {
    const renderTags = () => {
        return (recipe.tags.map((tag, index) => {
            return ((0, jsx_runtime_1.jsx)(tag_1.Tag, Object.assign({ fontSize: "small", size: "sm", color: "white", bg: "#16a085" }, { children: tag }), recipe._id + '-' + index));
        }));
    };
    return ((0, jsx_runtime_1.jsx)(layout_1.Box, Object.assign({ maxW: "sm", borderWidth: "1px", borderRadius: "lg", borderColor: "#16a085", overflow: "hidden" }, { children: (0, jsx_runtime_1.jsxs)(layout_1.Box, Object.assign({ ml: "1" }, { children: [(0, jsx_runtime_1.jsx)(layout_1.Box, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ className: "result-header", to: `/recipes/${recipe._id}` }, { children: recipe.name }), void 0) }, void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, Object.assign({ className: "result-source" }, { children: ["From: ", recipe.source ? recipe.source : (0, jsx_runtime_1.jsx)("em", { children: "unknown" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(layout_1.HStack, Object.assign({ spacing: 1, mb: "2" }, { children: renderTags() }), void 0)] }), void 0) }), void 0));
};
exports.default = RecipeListItem;
