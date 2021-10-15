"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const form_control_1 = require("@chakra-ui/form-control");
const input_1 = require("@chakra-ui/input");
const layout_1 = require("@chakra-ui/layout");
const select_1 = require("@chakra-ui/select");
const textarea_1 = require("@chakra-ui/textarea");
const button_1 = require("@chakra-ui/button");
const react_2 = require("@chakra-ui/react");
const react_router_dom_1 = require("react-router-dom");
const colors_1 = require("../styles/colors");
const recipe_list_actions_1 = require("../manage_state/action_dispatch/recipe_list_actions");
const recipe_actions_1 = require("../manage_state/action_dispatch/recipe_actions");
const validation_1 = require("./validation");
const RecipeForm = ({ recipe, formType }) => {
    var _a;
    const history = (0, react_router_dom_1.useHistory)();
    const preValidation = {};
    const { isOpen: isBackOpen, onOpen: onBackOpen, onClose: onBackClose } = (0, react_2.useDisclosure)();
    const { isOpen: isUpdateOpen, onOpen: onUpdateOpen, onClose: onUpdateClose } = (0, react_2.useDisclosure)();
    const ings = recipe.ingredients.map(ing => {
        return {
            amount: ing.amount,
            measurement: ing.measurement,
            name: ing.name
        };
    });
    const [ingValues, setIngValues] = (0, react_1.useState)(ings);
    const [name, setName] = (0, react_1.useState)(recipe.name);
    const [source, setSource] = (0, react_1.useState)(recipe.source);
    const [type, setType] = (0, react_1.useState)(recipe.type);
    const [instructions, setInstructions] = (0, react_1.useState)(recipe.instructions);
    const [tags, setTags] = (0, react_1.useState)((_a = recipe.tags) === null || _a === void 0 ? void 0 : _a.join(" "));
    const [errors, setErrors] = (0, react_1.useState)(preValidation);
    const handleIngChange = (index, e, key) => {
        let newIngValues = [...ingValues];
        newIngValues[index][key] = e.currentTarget.value;
        setIngValues(newIngValues);
    };
    const newIngFields = () => {
        setIngValues([...ingValues, { amount: "", measurement: "", name: "" }]);
    };
    const removeIngFields = (index) => {
        let newIngValues = [...ingValues];
        newIngValues.splice(index, 1);
        setIngValues(newIngValues);
    };
    const handleSubmit = () => {
        const errors = (0, validation_1.checkErrors)(name, type, instructions, ingValues);
        if (!errors.error) {
            const ingredients = ingValues.filter(ing => ing.amount && ing.name);
            let newRecipe = {
                name: name,
                source: source,
                type: type,
                ingredients: ingredients,
                instructions: instructions,
                fav: recipe.fav
            };
            if (tags) {
                const validTags = tags.split(" ");
                newRecipe.tags = validTags.filter(tag => tag !== '');
            }
            if (formType === "new") {
                (0, recipe_list_actions_1.postRecipe)(newRecipe);
                history.push("/recipes?sort=name:asc");
            }
            else {
                (0, recipe_actions_1.updateRecipe)(recipe._id, newRecipe);
                history.push("/recipes/" + recipe._id);
            }
        }
        else {
            setErrors(errors.validationErrors);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(layout_1.Center, { children: [(0, jsx_runtime_1.jsxs)(layout_1.VStack, { children: [(0, jsx_runtime_1.jsxs)(layout_1.Box, { children: [(0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "recipe-name" }, { children: "Name:" }), void 0), (0, jsx_runtime_1.jsx)(input_1.Input, { value: name, id: "recipe-name", size: "xs", onChange: e => setName(e.target.value) }, void 0)] }, void 0), errors.name && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "validationError" }, { children: errors.name }), void 0)] }, void 0), (0, jsx_runtime_1.jsx)(layout_1.Box, { children: (0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "recipe-source" }, { children: "Source:" }), void 0), (0, jsx_runtime_1.jsx)(input_1.Input, { value: source, id: "recipe-source", size: "xs", onChange: e => setSource(e.target.value) }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, { children: [(0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "recipe-type", placeholder: "select type" }, { children: "Type:" }), void 0), (0, jsx_runtime_1.jsxs)(select_1.Select, Object.assign({ id: "recipe-type", placeholder: "select type", value: type, size: "xs", onChange: e => setType(e.target.value) }, { children: [(0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Breakfast" }, { children: "Breakfast" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Lunch" }, { children: "Lunch" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Dinner" }, { children: "Dinner" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Side" }, { children: "Side Dish/Appetizer" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Dessert" }, { children: "Dessert" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Drink" }, { children: "Drink" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Snack" }, { children: "Snack" }), void 0)] }), void 0)] }, void 0), errors.type && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "validationError" }, { children: errors.type }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, { children: "Ingredients:" }, void 0), ingValues.map((element, index) => {
                                return ((0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)(input_1.Input, { value: element.amount, id: "amount-" + index, placeholder: "amount", w: "20", size: "xs", m: "1", onChange: e => handleIngChange(index, e, "amount") }, "amount" + index), (0, jsx_runtime_1.jsx)(input_1.Input, { value: element.measurement, id: "measurement-" + index, placeholder: "measurement", w: "24", size: "xs", m: "1", onChange: e => handleIngChange(index, e, "measurement") }, "measurement" + index), (0, jsx_runtime_1.jsx)(input_1.Input, { value: element.name, id: "name-" + index, placeholder: "name", w: "30", size: "xs", m: "1", onChange: e => handleIngChange(index, e, "name") }, "name" + index), index ?
                                            (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ id: "remove-ing-" + index, size: "xs", variant: "outline", color: "red.300", borderColor: "red.300", _hover: { color: "white", bg: "red.300" }, onClick: () => removeIngFields(index) }, { children: "-" }), void 0)
                                            : null] }, "ing-" + index));
                            }), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ size: "xs", color: colors_1.BASE_COLOR, borderColor: colors_1.BASE_COLOR, variant: "outline", _hover: { color: "white", bg: colors_1.BASE_COLOR }, onClick: newIngFields }, { children: "Add ingredient" }), void 0), errors.ingredients && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "validationError" }, { children: errors.ingredients }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, Object.assign({ w: 550 }, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "recipe-instructions" }, { children: "Instructions:" }), void 0), (0, jsx_runtime_1.jsx)(textarea_1.Textarea, { resize: "vertical", value: instructions, id: "recipe-instructions", fontSize: 12, onChange: e => setInstructions(e.target.value) }, void 0), errors.instructions && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "validationError" }, { children: errors.instructions }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, Object.assign({ w: 400 }, { children: [(0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "recipe-tags" }, { children: "Tags:" }), void 0), (0, jsx_runtime_1.jsx)(input_1.Input, { value: tags, id: "recipe-tags", size: "xs", onChange: e => setTags(e.target.value) }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "tag-instructions" }, { children: (0, jsx_runtime_1.jsx)("em", { children: "*seperate tags by space" }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ type: "submit", bg: colors_1.BASE_COLOR, color: "white", _hover: { bg: colors_1.BUTTON_HOVER_COLOR }, onClick: formType === "new" ? handleSubmit : onUpdateOpen }, { children: formType === "new" ? "Add Recipe" : "Update Recipe" }), void 0), formType === "update" &&
                        (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ variant: "outline", color: colors_1.BASE_COLOR, borderColor: colors_1.BASE_COLOR, size: "xs", _hover: { bg: colors_1.BASE_COLOR, color: "white" }, onClick: onBackOpen }, { children: "Back" }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(react_2.Modal, Object.assign({ isOpen: isUpdateOpen, onClose: onUpdateClose }, { children: [(0, jsx_runtime_1.jsx)(react_2.ModalOverlay, {}, void 0), (0, jsx_runtime_1.jsxs)(react_2.ModalContent, { children: [(0, jsx_runtime_1.jsx)(react_2.ModalHeader, { children: "Save changes to recipe?" }, void 0), (0, jsx_runtime_1.jsx)(react_2.ModalCloseButton, {}, void 0), (0, jsx_runtime_1.jsxs)(react_2.ModalFooter, { children: [(0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ color: "white", bg: colors_1.BASE_COLOR, mr: 3, _hover: { bg: colors_1.BUTTON_HOVER_COLOR }, onClick: handleSubmit }, { children: "Yes" }), void 0), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ variant: "ghost", onClick: onUpdateClose }, { children: "Cancel" }), void 0)] }, void 0)] }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(react_2.Modal, Object.assign({ isOpen: isBackOpen, onClose: onBackClose }, { children: [(0, jsx_runtime_1.jsx)(react_2.ModalOverlay, {}, void 0), (0, jsx_runtime_1.jsxs)(react_2.ModalContent, { children: [(0, jsx_runtime_1.jsx)(react_2.ModalHeader, { children: "Go back without saving updates?" }, void 0), (0, jsx_runtime_1.jsx)(react_2.ModalCloseButton, {}, void 0), (0, jsx_runtime_1.jsxs)(react_2.ModalFooter, { children: [(0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ color: "white", bg: colors_1.BASE_COLOR, mr: 3, _hover: { bg: colors_1.BUTTON_HOVER_COLOR }, onClick: () => history.push("/recipes/" + recipe._id) }, { children: "Yes" }), void 0), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ variant: "ghost", onClick: onBackClose }, { children: "Cancel" }), void 0)] }, void 0)] }, void 0)] }), void 0)] }, void 0));
};
exports.default = RecipeForm;
