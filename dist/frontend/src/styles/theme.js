"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const breakPoints = (0, theme_tools_1.createBreakpoints)({
    sm: "320px",
    md: "900px",
    lg: "1200px",
    xl: "2000px",
});
// const textStyles = {
//   pageTitle: {
//     color: "#16a085",
//     fontWeight: "300",
//     fontSize: "250%",
//   }
// }
const theme = (0, react_1.extendTheme)({ breakPoints });
exports.default = theme;
