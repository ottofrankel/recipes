export interface IngInterface {
  _id?: string;
  name: string;
  amount: string;
  measurement?: string;
}

export interface RecipeInterface {
  _id?: string;
  name: string;
  source: string;
  dateAdded?: string;
  dateUpdated?: string;
  type: string;
  ingredients: IngInterface[];
  instructions: string;
  tags?: string[];
  fav: boolean;
}

export interface QueryInterface {
  hasFilter?: boolean;
  name?: string;
  source?: string;
  type?: string;
  fav?: boolean;
  tags?: string;
  sort?:string;
}

export interface ValidationErrors {
  name?: string,
  type?: string,
  ingredients?: string,
  instructions?: string
}