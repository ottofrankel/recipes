"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_1 = require("@chakra-ui/layout");
const tag_1 = require("@chakra-ui/tag");
const colors_1 = require("../styles/colors");
const TagGrid = ({ recipe }) => {
    const renderTags = () => {
        var _a;
        return ((_a = recipe.tags) === null || _a === void 0 ? void 0 : _a.map((tag, index) => {
            return ((0, jsx_runtime_1.jsx)(tag_1.Tag, Object.assign({ fontSize: "small", size: "sm", bg: "white", borderWidth: "1px", color: colors_1.BASE_COLOR, borderColor: colors_1.BASE_COLOR, margin: 2, overflow: "hidden", _hover: { color: "white", bg: colors_1.BASE_COLOR } }, { children: tag }), recipe._id + '-' + index));
        }));
    };
    return ((0, jsx_runtime_1.jsx)(layout_1.SimpleGrid, Object.assign({ columns: 5 }, { children: renderTags() }), void 0));
};
exports.default = TagGrid;
