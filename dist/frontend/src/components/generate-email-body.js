"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateEmailBody = (recipe, message) => {
    let body = `${message}%0D%0A%0D%0A ${recipe.name}%0D%0A%0D%0AIngredients:%0D%0A`;
    const ingString = recipe.ingredients.reduce((pre, curr) => {
        return pre + `${curr.amount} ${curr.measurement} ${curr.name}%0D%0A`;
    }, '');
    body += ingString;
    body += `%0D%0A${recipe.instructions}`;
    return body;
};
exports.default = generateEmailBody;
