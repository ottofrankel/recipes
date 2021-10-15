"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_1 = require("react-router");
const form_control_1 = require("@chakra-ui/form-control");
const input_1 = require("@chakra-ui/input");
const layout_1 = require("@chakra-ui/layout");
const button_1 = require("@chakra-ui/button");
const select_1 = require("@chakra-ui/select");
const colors_1 = require("../styles/colors");
const checkbox_1 = require("@chakra-ui/checkbox");
const RecipeSearch = () => {
    const history = (0, react_router_1.useHistory)();
    const [nameFilter, setNameFilter] = (0, react_1.useState)('');
    const [sourceFilter, setSourceFilter] = (0, react_1.useState)('');
    const [typeFilter, setTypeFilter] = (0, react_1.useState)('');
    const [favFilter, setFavFilter] = (0, react_1.useState)(false);
    const [tagFilter, setTagFilter] = (0, react_1.useState)('');
    const [sort, setSort] = (0, react_1.useState)('');
    const handleSearchClick = () => {
        let queryString = "?";
        if (nameFilter)
            queryString += "name=" + nameFilter;
        if (sourceFilter)
            queryString += "&source=" + sourceFilter;
        if (typeFilter)
            queryString += "&type=" + typeFilter;
        if (favFilter)
            queryString += "&fav=true";
        if (tagFilter)
            queryString += "&tags=" + tagFilter;
        if (sort)
            queryString += "&sort=" + sort;
        history.push('/recipes' + queryString);
    };
    return ((0, jsx_runtime_1.jsx)(layout_1.Center, { children: (0, jsx_runtime_1.jsxs)(layout_1.VStack, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "page-title" }, { children: "Search Recipes:" }), void 0), (0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "filter-name" }, { children: "Name:" }), void 0), (0, jsx_runtime_1.jsx)(input_1.Input, { value: nameFilter, id: "filter-name", size: "xs", onChange: e => setNameFilter(e.target.value) }, void 0), (0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "filter-source" }, { children: "Source:" }), void 0), (0, jsx_runtime_1.jsx)(input_1.Input, { value: sourceFilter, id: "filter-source", size: "xs", onChange: e => setSourceFilter(e.target.value) }, void 0), (0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "filter-type" }, { children: "Type:" }), void 0), (0, jsx_runtime_1.jsxs)(select_1.Select, Object.assign({ id: "filter-type", placeholder: "select type", value: typeFilter, size: "xs", onChange: e => setTypeFilter(e.target.value) }, { children: [(0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Breakfast" }, { children: "Breakfast" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Lunch" }, { children: "Lunch" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Dinner" }, { children: "Dinner" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Side" }, { children: "Side Dish/Appetizer" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Dessert" }, { children: "Dessert" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Drink" }, { children: "Drink" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "Snack" }, { children: "Snack" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "filter-tags" }, { children: "Tags:" }), void 0), (0, jsx_runtime_1.jsx)(input_1.Input, { value: tagFilter, id: "filter-tags", size: "xs", onChange: e => setTagFilter(e.target.value) }, void 0), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "tag-instructions" }, { children: (0, jsx_runtime_1.jsx)("em", { children: "*seperate tags by space" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ htmlFor: "sort" }, { children: "Sort:" }), void 0), (0, jsx_runtime_1.jsxs)(select_1.Select, Object.assign({ id: "sort", placeholder: "sort by...", value: sort, size: "xs", onChange: e => setSort(e.target.value) }, { children: [(0, jsx_runtime_1.jsx)("option", Object.assign({ value: "name:asc" }, { children: "Name ascending" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "name:desc" }, { children: "Name descending" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "dateAdded:asc" }, { children: "Date added ascending" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "dateAdded:desc" }, { children: "Date added descending" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "dateUpdated:asc" }, { children: "Last updated ascending" }), void 0), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "dateUpdated:desc" }, { children: "Last updated descending" }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(layout_1.HStack, { children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, Object.assign({ size: "sm", iconColor: colors_1.BASE_COLOR, colorScheme: "grey", onChange: () => setFavFilter(!favFilter) }, { children: "Favorites only?" }), void 0), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ type: "submit", bg: colors_1.BASE_COLOR, color: "white", _hover: { bg: colors_1.BUTTON_HOVER_COLOR }, onClick: handleSearchClick }, { children: "Apply Filters" }), void 0)] }, void 0)] }, void 0) }, void 0));
};
exports.default = RecipeSearch;
