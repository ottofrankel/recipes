"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const layout_1 = require("@chakra-ui/layout");
const recipe_list_1 = __importDefault(require("./recipe_list"));
const colors_1 = require("../styles/colors");
const recipe_list_actions_1 = require("../manage_state/action_dispatch/recipe_list_actions");
const Homescreen = () => {
    (0, react_1.useEffect)(() => {
        (0, recipe_list_actions_1.fetchFavs)();
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(layout_1.Center, { children: (0, jsx_runtime_1.jsx)(layout_1.Heading, Object.assign({ as: "h2", color: colors_1.BASE_COLOR }, { children: "Your Favorites" }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(recipe_list_1.default, { listType: "favs" }, void 0)] }, void 0));
};
exports.default = Homescreen;
