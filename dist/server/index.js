"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
mongoose_1.default.connect("mongodb://localhost/recipes");
const PORT_NUM = 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, router_1.default)(app);
app.listen(PORT_NUM, () => {
    console.log("Node.js listening on port " + PORT_NUM);
});
