"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_1 = require("@chakra-ui/layout");
const react_1 = require("react");
const recipe_actions_1 = require("../manage_state/action_dispatch/recipe_actions");
const hooks_1 = require("../hooks");
const recipe_form_1 = __importDefault(require("./recipe_form"));
const UpdateRecipeForm = (props) => {
    (0, react_1.useEffect)(() => {
        (0, recipe_actions_1.fetchRecipe)(props.match.params.id);
    }, [props.match.params.id]);
    const recipe = (0, hooks_1.useAppSelector)(state => state.recipe);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(layout_1.Center, Object.assign({ textStyle: "pageTitle" }, { children: (0, jsx_runtime_1.jsx)("h2", { children: "Update Recipe:" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(recipe_form_1.default, { recipe: recipe, formType: "update" }, void 0)] }, void 0));
};
exports.default = UpdateRecipeForm;
