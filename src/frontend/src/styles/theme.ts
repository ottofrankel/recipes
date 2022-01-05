import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakPoints = createBreakpoints({
  sm: "320px",
  md: "900px",
  lg: "1200px",
  xl: "2000px",
})

// const textStyles = {
//   pageTitle: {
//     color: "#16a085",
//     fontWeight: "300",
//     fontSize: "250%",
//   }
// }

const theme = extendTheme({breakPoints});

export default theme;