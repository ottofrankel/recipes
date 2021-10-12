"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_1 = require("@chakra-ui/layout");
const recipe_list_item_1 = __importDefault(require("./recipe_list_item"));
const RecipeList = ({ recipes }) => {
    // useEffect(() => {
    //   fetchRecipes({});
    // }, []);
    // const recipes = useAppSelector(state => state.recipeList);
    const renderRecipes = () => {
        return (recipes.map((recipe) => {
            if (recipe._id) {
                return ((0, jsx_runtime_1.jsx)(recipe_list_item_1.default, { recipe: recipe }, recipe._id));
            }
            return (0, jsx_runtime_1.jsx)("div", {}, void 0);
        }));
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(layout_1.SimpleGrid, Object.assign({ columns: [1, 3, 4], spacing: 10, m: 3 }, { children: renderRecipes() }), void 0) }, void 0));
};
exports.default = RecipeList;
