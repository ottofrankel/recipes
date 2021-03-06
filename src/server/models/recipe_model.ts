import { model, Schema, Model, Document, Types } from "mongoose";
import { IngSchema, IngInterface } from "./ingredient";

interface RecipeInterface extends Document {
  name: string;
  source?: string;
  dateAdded: string;
  dateUpdated?: string;
  type: string;
  ingredients: Types.DocumentArray<IngInterface>;
  instructions: string;
  tags?: string[];
  fav: boolean;
}

const RecipeSchema: Schema = new Schema({
  name: { type: String, required: true },
  source: String,
  dateAdded: { type: String, required: true },
  dateUpdated: String,
  type: { type: String, required: true },
  ingredients: { type: [IngSchema], required: true },
  instructions: { type: String, required: true },
  tags: [String],
  fav: { type: Boolean, required: true },
});

const Recipe: Model<RecipeInterface> = model("Recipe", RecipeSchema);
export { Recipe, RecipeInterface };
