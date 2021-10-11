interface IngInterface {
  name: string;
  amount: string;
  measurement?: string;
}

export interface RecipeInterface {
  name: string;
  source: string;
  dateAdded: Date | null;
  dateUpdated: Date | null;
  type: string;
  ingredients: IngInterface[];
  instructions: string;
  tags: string[];
  fav: boolean;
}