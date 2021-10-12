"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavs = exports.favsSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = [];
exports.favsSlice = (0, toolkit_1.createSlice)({
    name: 'favs',
    initialState,
    reducers: {
        getFavs: (state, action) => {
            return action.payload;
        }
    }
});
exports.getFavs = exports.favsSlice.actions.getFavs;
exports.default = exports.favsSlice.reducer;
