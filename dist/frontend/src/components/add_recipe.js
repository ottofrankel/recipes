"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_1 = require("@chakra-ui/layout");
const recipe_form_1 = __importDefault(require("./recipe_form"));
const AddRecipeForm = () => {
    let initialIngs = [];
    for (let i = 0; i < 6; i++) {
        const ingInput = {
            name: "",
            measurement: "",
            amount: ""
        };
        initialIngs.push(ingInput);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(layout_1.Center, { children: (0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "page-title" }, { children: "Add Recipe: " }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(recipe_form_1.default, { recipe: {
                    name: "",
                    source: "",
                    type: "",
                    instructions: "",
                    ingredients: initialIngs,
                    tags: [""],
                    fav: false
                }, formType: "new" }, void 0)] }, void 0));
};
exports.default = AddRecipeForm;
