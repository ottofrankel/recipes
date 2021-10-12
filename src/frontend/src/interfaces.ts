interface IngInterface {
  name: string;
  amount: string;
  measurement?: string;
}

export interface RecipeInterface {
  _id: string;
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

export interface QueryInterface {
  name?: string;
  source?: string;
  type?: string;
  fav?: boolean;
  tags?: string;
  sort?:string;
}