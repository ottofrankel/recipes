import { RecipeInterface } from "../interfaces";

const generateEmailBody = (recipe: RecipeInterface, message: string): string => {
  let body = `${message}%0D%0A%0D%0A ${recipe.name}%0D%0A%0D%0AIngredients:%0D%0A`

  const ingString = recipe.ingredients.reduce((pre, curr) => {
    return pre + `${curr.amount} ${curr.measurement} ${curr.name}%0D%0A`
  }, '')

  body += ingString;
  body += `%0D%0A${recipe.instructions}`;

  return body
}

export default generateEmailBody;