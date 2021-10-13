"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = require("@chakra-ui/button");
const form_control_1 = require("@chakra-ui/form-control");
const input_1 = require("@chakra-ui/input");
const layout_1 = require("@chakra-ui/layout");
const select_1 = require("@chakra-ui/select");
const textarea_1 = require("@chakra-ui/textarea");
const react_1 = require("react");
const react_router_1 = require("react-router");
const colors_1 = require("../styles/colors");
const recipe_list_actions_1 = require("../manage_state/action_dispatch/recipe_list_actions");
const AddRecipeForm = () => {
    const history = (0, react_router_1.useHistory)();
    let initialIngs = [];
    for (let i = 0; i < 6; i++) {
        const ingInput = {
            name: "",
            measurement: "",
            amount: ""
        };
        initialIngs.push(ingInput);
    }
    const preValidation = {};
    const [ingValues, setIngValues] = (0, react_1.useState)(initialIngs);
    const [name, setName] = (0, react_1.useState)('');
    const [source, setSource] = (0, react_1.useState)('');
    const [type, setType] = (0, react_1.useState)('');
    const [instructions, setInstructions] = (0, react_1.useState)('');
    const [tags, setTags] = (0, react_1.useState)('');
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
    const checkErrors = () => {
        let hasError = false;
        let validationErrors = {};
        const ingredients = ingValues.filter(ing => ing.amount && ing.name);
        if (ingredients.length === 0) {
            validationErrors.ingredients = "Recipe must have at least one ingredient";
            hasError = true;
        }
        else {
            for (let i = 0; i < ingValues.length; i++) {
                const curr = ingValues[i];
                if (curr.name || curr.amount || curr.measurement) {
                    if (!curr.name || !curr.amount) {
                        validationErrors.ingredients = "Each ingredient must have name and amount";
                        hasError = true;
                    }
                }
            }
        }
        if (!name) {
            validationErrors.name = "Required";
            hasError = true;
        }
        if (!type) {
            validationErrors.type = "Required";
            hasError = true;
        }
        if (!instructions) {
            validationErrors.instructions = "Required";
            hasError = true;
        }
        setErrors(validationErrors);
        return hasError;
    };
    const newRecipeSubmit = () => {
        if (!checkErrors()) {
            const ingredients = ingValues.filter(ing => ing.amount && ing.name);
            let newRecipe = {
                name: name,
                source: source,
                type: type,
                ingredients: ingredients,
                instructions: instructions,
                fav: false
            };
            if (tags)
                newRecipe.tags = tags.split(",");
            (0, recipe_list_actions_1.postRecipe)(newRecipe);
            history.push("/recipes?sort=name:asc");
        }
    };
    return ((0, jsx_runtime_1.jsx)(layout_1.Center, { children: (0, jsx_runtime_1.jsxs)(layout_1.VStack, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "page-title" }, { children: "Add Recipe:" }), void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, { children: [(0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "recipe-name" }, { children: "Name:" }), void 0), (0, jsx_runtime_1.jsx)(input_1.Input, { value: name, id: "recipe-name", size: "xs", onChange: e => setName(e.target.value) }, void 0)] }, void 0), errors.name && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "validationError" }, { children: errors.name }), void 0)] }, void 0), (0, jsx_runtime_1.jsx)(layout_1.Box, { children: (0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "recipe-source" }, { children: "Source:" }), void 0), (0, jsx_runtime_1.jsx)(input_1.Input, { value: source, id: "recipe-source", size: "xs", onChange: e => setSource(e.target.value) }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, { children: [(0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "recipe-type", placeholder: "select type" }, { children: "Type:" }), void 0), (0, jsx_runtime_1.jsxs)(select_1.Select, Object.assign({ id: "recipe-type", placeholder: "select type", size: "xs", onChange: e => setType(e.target.value) }, { children: [(0, jsx_runtime_1.jsx)("option", Object.assign({ value: "breakfast" }, { children: "Breakfast" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "lunch" }, { children: "Lunch" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "dinner" }, { children: "Dinner" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "side" }, { children: "Side Dish/Appetizer" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "dessert" }, { children: "Dessert" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "dessert" }, { children: "Drink" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "other" }, { children: "Snack" }), void 0)] }), void 0)] }, void 0), errors.type && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "validationError" }, { children: errors.type }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, { children: "Ingredients:" }, void 0), ingValues.map((element, index) => {
                            return ((0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)(input_1.Input, { value: element.amount, id: "amount-" + index, placeholder: "amount", w: "20", size: "xs", m: "1", onChange: e => handleIngChange(index, e, "amount") }, "amount" + index), (0, jsx_runtime_1.jsx)(input_1.Input, { value: element.measurement, id: "measurement-" + index, placeholder: "measurement", w: "24", size: "xs", m: "1", onChange: e => handleIngChange(index, e, "measurement") }, "measurement" + index), (0, jsx_runtime_1.jsx)(input_1.Input, { value: element.name, id: "name-" + index, placeholder: "name", w: "30", size: "xs", m: "1", onChange: e => handleIngChange(index, e, "name") }, "name" + index), index ?
                                        (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ id: "remove-ing-" + index, size: "xs", variant: "outline", color: "red.300", borderColor: "red.300", _hover: { color: "white", bg: "red.300" }, onClick: () => removeIngFields(index) }, { children: "-" }), void 0)
                                        : null] }, void 0));
                        }), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ size: "xs", color: colors_1.BASE_COLOR, borderColor: colors_1.BASE_COLOR, variant: "outline", _hover: { color: "white", bg: colors_1.BASE_COLOR }, onClick: newIngFields }, { children: "Add ingredient" }), void 0), errors.ingredients && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "validationError" }, { children: errors.ingredients }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(layout_1.Box, Object.assign({ w: 550 }, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "recipe-instructions" }, { children: "Instructions:" }), void 0), (0, jsx_runtime_1.jsx)(textarea_1.Textarea, { resize: "vertical", value: instructions, id: "recipe-instructions", fontSize: 12, onChange: e => setInstructions(e.target.value) }, void 0), errors.instructions && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "validationError" }, { children: errors.instructions }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(layout_1.Box, { children: (0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "recipe-tags" }, { children: "Tags:" }), void 0), (0, jsx_runtime_1.jsx)(input_1.Input, { value: tags, id: "recipe-tags", size: "xs", onChange: e => setTags(e.target.value) }, void 0), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "tag-instructions" }, { children: (0, jsx_runtime_1.jsx)("em", { children: "*seperate tags by comma" }, void 0) }), void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ type: "submit", bg: colors_1.BASE_COLOR, color: "white", _hover: { bg: "#1dbb9b" }, onClick: newRecipeSubmit }, { children: "Add Recipe" }), void 0)] }, void 0) }, void 0));
};
exports.default = AddRecipeForm;
