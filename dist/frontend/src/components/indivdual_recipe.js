"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = require("@chakra-ui/button");
const layout_1 = require("@chakra-ui/layout");
const layout_2 = require("@chakra-ui/layout");
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
const react_router_1 = require("react-router");
const hooks_1 = require("../hooks");
const recipe_actions_1 = require("../manage_state/action_dispatch/recipe_actions");
const recipe_list_actions_1 = require("../manage_state/action_dispatch/recipe_list_actions");
const TagGrid_1 = __importDefault(require("./TagGrid"));
const IndividualRecipe = (props) => {
    (0, react_2.useEffect)(() => {
        (0, recipe_actions_1.fetchRecipe)(props.match.params.id);
    }, [props.match.params.id]);
    const history = (0, react_router_1.useHistory)();
    const { isOpen, onOpen, onClose } = (0, react_1.useDisclosure)();
    const recipe = (0, hooks_1.useAppSelector)(state => state.recipe);
    const handleDeleteClick = () => {
        (0, recipe_list_actions_1.deleteRecipe)(recipe._id);
        history.push("/recipes?sort=name:asc");
    };
    const renderIngredients = () => {
        return (recipe.ingredients.map((ing) => {
            return ((0, jsx_runtime_1.jsx)(layout_2.ListItem, { children: (0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("strong", { children: ing.amount }, void 0) }, void 0), ing.measurement && (0, jsx_runtime_1.jsx)("p", { children: ing.measurement }, void 0), (0, jsx_runtime_1.jsx)("p", { children: ing.name }, void 0)] }, void 0) }, ing._id));
        }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(layout_1.Center, Object.assign({ mt: 10 }, { children: (0, jsx_runtime_1.jsxs)(layout_1.VStack, Object.assign({ spacing: 3 }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "page-title" }, { children: recipe.name }), void 0), (0, jsx_runtime_1.jsxs)(layout_1.HStack, Object.assign({ spacing: 10 }, { children: [(0, jsx_runtime_1.jsx)("h4", { children: recipe.type }, void 0), recipe.source && (0, jsx_runtime_1.jsxs)("h4", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "From:" }, void 0), " ", recipe.source] }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("h4", { children: (0, jsx_runtime_1.jsx)("strong", { children: "Ingredients:" }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(layout_2.List, { children: renderIngredients() }, void 0), (0, jsx_runtime_1.jsx)("h4", { children: (0, jsx_runtime_1.jsx)("strong", { children: "Instructions:" }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(layout_1.Container, Object.assign({ maxWidth: "70ch" }, { children: recipe.instructions }), void 0), (0, jsx_runtime_1.jsx)(TagGrid_1.default, { recipe: recipe }, void 0), (0, jsx_runtime_1.jsx)(layout_1.HStack, { children: (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ size: "xs", colorScheme: "red", onClick: onOpen }, { children: "Delete" }), void 0) }, void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)(react_1.Modal, Object.assign({ isOpen: isOpen, onClose: onClose }, { children: [(0, jsx_runtime_1.jsx)(react_1.ModalOverlay, {}, void 0), (0, jsx_runtime_1.jsxs)(react_1.ModalContent, { children: [(0, jsx_runtime_1.jsxs)(react_1.ModalHeader, { children: ["Delete '", recipe.name, "'?"] }, void 0), (0, jsx_runtime_1.jsx)(react_1.ModalCloseButton, {}, void 0), (0, jsx_runtime_1.jsxs)(react_1.ModalFooter, { children: [(0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ colorScheme: "red", mr: 3, onClick: handleDeleteClick }, { children: "Delete" }), void 0), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ variant: "ghost", onClick: onClose }, { children: "Cancel" }), void 0)] }, void 0)] }, void 0)] }), void 0)] }, void 0));
};
exports.default = IndividualRecipe;
