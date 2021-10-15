import { IngInterface, ValidationErrors } from "../interfaces";

export const checkErrors = (name: string, type: string, instructions: string, ingredients: IngInterface[]) => {
  let hasError: boolean = false;
  let validationErrors: ValidationErrors = {};

  const validIngs = ingredients.filter(ing => ing.amount && ing.name);

  if (validIngs.length === 0) {
    validationErrors.ingredients = "Recipe must have at least one ingredient"
    hasError = true;
  } else {
    for (let i = 0; i < ingredients.length; i++) {
      const curr = ingredients[i];

      if (curr.name || curr.amount || curr.measurement) {
        if (!curr.name || !curr.amount) {
          validationErrors.ingredients = "Each ingredient must have name and amount"
          hasError = true;
        }     
      }
    }
  }

  if (!name) {
    validationErrors.name = "Required"
    hasError = true;
  }
  if (!type) {
    validationErrors.type = "Required"
    hasError = true;
  }
  if (!instructions) {
    validationErrors.instructions = "Required"
    hasError = true;
  }

  return {
    error: hasError,
    validationErrors: validationErrors
  }
}

export const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.toLowerCase());
}