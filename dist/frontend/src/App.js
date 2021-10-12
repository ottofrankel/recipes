"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const indivdual_recipe_1 = __importDefault(require("./components/indivdual_recipe"));
const navbar_1 = __importDefault(require("./components/navbar"));
const recipe_list_1 = __importDefault(require("./components/recipe_list"));
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(navbar_1.default, {}, void 0), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Switch, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { exact: true, path: "/recipes", component: recipe_list_1.default }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { exact: true, path: "/recipes/:id", component: indivdual_recipe_1.default }, void 0)] }, void 0)] }, void 0));
}
exports.default = App;
