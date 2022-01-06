"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./styles/index.css");
const App_1 = __importDefault(require("./App"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const react_2 = require("@chakra-ui/react");
const store_1 = require("./manage_state/store");
const theme_1 = __importDefault(require("./styles/theme"));
react_dom_1.default.render((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, Object.assign({ store: store_1.store }, { children: (0, jsx_runtime_1.jsx)(react_2.ChakraProvider, Object.assign({ theme: theme_1.default }, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}, void 0) }), void 0) }), void 0) }, void 0) }, void 0), document.getElementById('root'));
