"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getFilters = (location) => {
    var _a, _b;
    let currentFilters = {};
    const params = location.split("&");
    for (let i = 0; i < params.length; i++) {
        const curr = params[i].split("=");
        let param;
        if (curr[0][0] === "?")
            param = curr[0].substring(1);
        else
            param = (_a = curr[0]) !== null && _a !== void 0 ? _a : '';
        const value = (_b = curr[1]) !== null && _b !== void 0 ? _b : '';
        if (value) {
            if (param === "name") {
                currentFilters.name = value;
                currentFilters.hasFilter = true;
            }
            if (param === "source") {
                currentFilters.source = value;
                currentFilters.hasFilter = true;
            }
            if (param === "type") {
                currentFilters.type = value;
                currentFilters.hasFilter = true;
            }
            if (param === "fav" && value === "true") {
                currentFilters.fav = true;
                currentFilters.hasFilter = true;
            }
            if (param === "tags") {
                currentFilters.tags = value;
                currentFilters.hasFilter = true;
            }
            if (param === "sort") {
                currentFilters.sort = value;
                currentFilters.hasFilter = true;
            }
        }
    }
    return currentFilters;
};
exports.default = getFilters;
