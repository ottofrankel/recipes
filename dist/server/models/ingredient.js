"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngSchema = void 0;
const mongoose_1 = require("mongoose");
const IngSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    amount: { type: String, required: true },
    measurement: String,
});
exports.IngSchema = IngSchema;
