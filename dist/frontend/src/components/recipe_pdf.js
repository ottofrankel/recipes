"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const renderer_1 = require("@react-pdf/renderer");
const colors_1 = require("../styles/colors");
const RecipePDF = ({ name, source, type, ingredients, instructions, tags }) => {
    return ((0, jsx_runtime_1.jsx)(renderer_1.Document, { children: (0, jsx_runtime_1.jsxs)(renderer_1.Page, { children: [(0, jsx_runtime_1.jsx)(renderer_1.View, { children: (0, jsx_runtime_1.jsx)(renderer_1.Text, Object.assign({ style: {
                            color: colors_1.BASE_COLOR,
                            fontSize: 30,
                            textAlign: "center"
                        } }, { children: name }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(renderer_1.View, { children: (0, jsx_runtime_1.jsxs)(renderer_1.Text, Object.assign({ style: { textAlign: "center", fontWeight: "bold" } }, { children: ["From ", source] }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(renderer_1.View, { children: (0, jsx_runtime_1.jsx)(renderer_1.Text, Object.assign({ style: { textAlign: "center" } }, { children: type }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(renderer_1.View, Object.assign({ style: { textAlign: "center", margin: 10 } }, { children: ingredients.map((ing, index) => {
                        var _a;
                        return ((0, jsx_runtime_1.jsxs)(renderer_1.Text, { children: [ing.amount, " ", (_a = ing.measurement) !== null && _a !== void 0 ? _a : '', " ", ing.name] }, "ing-" + index));
                    }) }), void 0), (0, jsx_runtime_1.jsx)(renderer_1.View, { children: (0, jsx_runtime_1.jsx)(renderer_1.Text, Object.assign({ style: { textAlign: "center", margin: 10 } }, { children: instructions }), void 0) }, void 0), tags === null || tags === void 0 ? void 0 : tags.map((tag, index) => {
                    return ((0, jsx_runtime_1.jsx)(renderer_1.Text, { children: tag }, "tag-" + index));
                })] }, void 0) }, void 0));
};
exports.default = RecipePDF;
