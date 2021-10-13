"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_1 = require("@chakra-ui/layout");
const recipe_list_1 = __importDefault(require("./recipe_list"));
const Homescreen = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(layout_1.Center, { children: (0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "page-title" }, { children: "Your Favorites" }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(recipe_list_1.default, { favsOnly: true }, void 0)] }, void 0));
};
exports.default = Homescreen;
