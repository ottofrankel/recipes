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
const input_1 = require("@chakra-ui/input");
const form_control_1 = require("@chakra-ui/form-control");
const textarea_1 = require("@chakra-ui/textarea");
const renderer_1 = require("@react-pdf/renderer");
const react_2 = require("react");
const lib_1 = require("react-ionicons/lib");
const react_router_1 = require("react-router");
const hooks_1 = require("../hooks");
const recipe_actions_1 = require("../manage_state/action_dispatch/recipe_actions");
const recipe_list_actions_1 = require("../manage_state/action_dispatch/recipe_list_actions");
const colors_1 = require("../styles/colors");
const recipe_pdf_1 = __importDefault(require("./recipe_pdf"));
const TagGrid_1 = __importDefault(require("./TagGrid"));
const generate_email_body_1 = __importDefault(require("./generate-email-body"));
const validation_1 = require("./validation");
const IndividualRecipe = (props) => {
    (0, react_2.useEffect)(() => {
        (0, recipe_actions_1.fetchRecipe)(props.match.params.id);
    }, [props.match.params.id]);
    const history = (0, react_router_1.useHistory)();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = (0, react_1.useDisclosure)();
    const { isOpen: isFavOpen, onOpen: onFavOpen, onClose: onFavClose } = (0, react_1.useDisclosure)();
    const { isOpen: isEmailOpen, onOpen: onEmailOpen, onClose: onEmailClose } = (0, react_1.useDisclosure)();
    const [emailTo, setEmailTo] = (0, react_2.useState)('');
    const [emailMessage, setEmailMessage] = (0, react_2.useState)('');
    const recipe = (0, hooks_1.useAppSelector)(state => state.recipe);
    const handleDeleteClick = () => {
        (0, recipe_list_actions_1.deleteRecipe)(recipe._id);
        history.push("/recipes?sort=name:asc");
    };
    const toggleFav = () => {
        (0, recipe_actions_1.updateRecipe)(recipe._id, Object.assign(Object.assign({}, recipe), { fav: !recipe.fav }));
        onFavOpen();
    };
    const closeEmailModal = () => {
        setEmailTo('');
        setEmailMessage('');
        onEmailClose();
    };
    const renderIngredients = () => {
        return (recipe.ingredients.map((ing) => {
            return ((0, jsx_runtime_1.jsx)(layout_2.ListItem, { children: (0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("strong", { children: ing.amount }, void 0) }, void 0), ing.measurement && (0, jsx_runtime_1.jsx)("p", { children: ing.measurement }, void 0), (0, jsx_runtime_1.jsx)("p", { children: ing.name }, void 0)] }, void 0) }, ing._id));
        }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(layout_1.Center, Object.assign({ mt: 5 }, { children: (0, jsx_runtime_1.jsxs)(layout_1.VStack, Object.assign({ spacing: 3, mb: 5 }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "page-title" }, { children: recipe.name }), void 0), (0, jsx_runtime_1.jsxs)(layout_1.HStack, Object.assign({ spacing: 5 }, { children: [(0, jsx_runtime_1.jsxs)("p", Object.assign({ className: "date" }, { children: ["Date created: ", recipe.dateAdded] }), void 0), recipe.dateUpdated && (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: "date" }, { children: ["Last updated: ", recipe.dateUpdated] }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(layout_1.HStack, Object.assign({ spacing: 10 }, { children: [(0, jsx_runtime_1.jsx)("h4", { children: (0, jsx_runtime_1.jsx)("strong", { children: recipe.type }, void 0) }, void 0), recipe.source && (0, jsx_runtime_1.jsxs)("h4", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "From:" }, void 0), " ", recipe.source] }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("h4", { children: (0, jsx_runtime_1.jsx)("strong", { children: "Ingredients:" }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(layout_2.List, { children: renderIngredients() }, void 0), (0, jsx_runtime_1.jsx)("h4", { children: (0, jsx_runtime_1.jsx)("strong", { children: "Instructions:" }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(layout_1.Container, Object.assign({ maxWidth: "70ch" }, { children: recipe.instructions }), void 0), (0, jsx_runtime_1.jsx)(TagGrid_1.default, { recipe: recipe }, void 0), (0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [recipe.fav ?
                                    (0, jsx_runtime_1.jsx)(lib_1.Heart, { color: colors_1.BASE_COLOR, cssClasses: "fav-icon", height: "50px", width: "30px", title: "Remove from favorites", onClick: toggleFav }, void 0)
                                    :
                                        (0, jsx_runtime_1.jsx)(lib_1.HeartOutline, { color: colors_1.BASE_COLOR, cssClasses: "fav-icon", height: "50px", width: "30px", title: "Add to favorites", onClick: toggleFav }, void 0), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ size: "xs", bg: colors_1.BASE_COLOR, color: "white", _hover: { bg: colors_1.BUTTON_HOVER_COLOR }, onClick: () => history.push("/update-recipe/" + recipe._id) }, { children: "Update Recipe" }), void 0), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ size: "xs", colorScheme: "red", onClick: onDeleteOpen }, { children: "Delete" }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ size: "xs", bg: colors_1.BASE_COLOR, color: "white", _hover: { bg: colors_1.BUTTON_HOVER_COLOR }, onClick: onEmailOpen }, { children: "Email recipe" }), void 0), (0, jsx_runtime_1.jsx)(renderer_1.PDFDownloadLink, Object.assign({ document: (0, jsx_runtime_1.jsx)(recipe_pdf_1.default, { name: recipe.name, source: recipe.source, type: recipe.type, ingredients: recipe.ingredients, instructions: recipe.instructions, fav: recipe.fav }, void 0), fileName: `${recipe.name}-recipe.pdf` }, { children: ({ blob, url, loading, error }) => (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ size: "xs", color: "white", bg: colors_1.BASE_COLOR, _hover: { bg: colors_1.BUTTON_HOVER_COLOR } }, { children: loading ? "Loading document..." : "Download PDF" }), void 0) }), void 0)] }, void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)(react_1.Modal, Object.assign({ isOpen: isDeleteOpen, onClose: onDeleteClose }, { children: [(0, jsx_runtime_1.jsx)(react_1.ModalOverlay, {}, void 0), (0, jsx_runtime_1.jsxs)(react_1.ModalContent, { children: [(0, jsx_runtime_1.jsxs)(react_1.ModalHeader, { children: ["Delete '", recipe.name, "'?"] }, void 0), (0, jsx_runtime_1.jsx)(react_1.ModalCloseButton, {}, void 0), (0, jsx_runtime_1.jsxs)(react_1.ModalFooter, { children: [(0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ colorScheme: "red", mr: 3, onClick: handleDeleteClick }, { children: "Delete" }), void 0), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ variant: "ghost", onClick: onDeleteClose }, { children: "Cancel" }), void 0)] }, void 0)] }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(react_1.Modal, Object.assign({ isOpen: isFavOpen, onClose: onFavClose }, { children: [(0, jsx_runtime_1.jsx)(react_1.ModalOverlay, {}, void 0), (0, jsx_runtime_1.jsxs)(react_1.ModalContent, { children: [(0, jsx_runtime_1.jsxs)(react_1.ModalHeader, { children: ["'", recipe.name, "' ", recipe.fav ? 'added to ' : 'removed from ', " favorites"] }, void 0), (0, jsx_runtime_1.jsx)(react_1.ModalCloseButton, {}, void 0), (0, jsx_runtime_1.jsx)(react_1.ModalFooter, { children: (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ color: "white", bg: colors_1.BASE_COLOR, mr: 3, _hover: { bg: colors_1.BUTTON_HOVER_COLOR }, onClick: onFavClose }, { children: "Ok" }), void 0) }, void 0)] }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(react_1.Modal, Object.assign({ isOpen: isEmailOpen, onClose: closeEmailModal }, { children: [(0, jsx_runtime_1.jsx)(react_1.ModalOverlay, {}, void 0), (0, jsx_runtime_1.jsxs)(react_1.ModalContent, { children: [(0, jsx_runtime_1.jsxs)(react_1.ModalHeader, { children: ["Send '", recipe.name, "' in an email:"] }, void 0), (0, jsx_runtime_1.jsx)(react_1.ModalCloseButton, {}, void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, Object.assign({ mr: 3, ml: 3 }, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "email-to" }, { children: "Send to:" }), void 0), (0, jsx_runtime_1.jsx)(input_1.Input, { value: emailTo, id: "email-to", type: "email", onChange: e => setEmailTo(e.target.value) }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, Object.assign({ mr: 3, ml: 3 }, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "email-message" }, { children: "Include a message (optional):" }), void 0), (0, jsx_runtime_1.jsx)(textarea_1.Textarea, { value: emailMessage, id: "email-message", fontSize: 14, onChange: e => setEmailMessage(e.target.value) }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(react_1.ModalFooter, { children: [(0, validation_1.validateEmail)(emailTo) ?
                                        (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ mr: 3, color: "white", bg: colors_1.BASE_COLOR, _hover: { bg: colors_1.BUTTON_HOVER_COLOR
                                            } }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "email-link", href: `mailto:${emailTo}?subject=${recipe.name} recipe&body=${(0, generate_email_body_1.default)(recipe, emailMessage)}`, onClick: closeEmailModal }, { children: "Generate email" }), void 0) }), void 0)
                                        :
                                            (0, jsx_runtime_1.jsx)("p", { children: "Please enter a valid email." }, void 0), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ variant: "ghost", onClick: closeEmailModal }, { children: "Cancel" }), void 0)] }, void 0)] }, void 0)] }), void 0)] }, void 0));
};
exports.default = IndividualRecipe;
