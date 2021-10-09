import { Schema, Types } from "mongoose";

interface IngInterface extends Types.Subdocument {
  name: string;
  amount: string;
  measurement?: string;
}

const IngSchema: Schema = new Schema<IngInterface>({
  name: { type: String, required: true },
  amount: { type: String, required: true },
  measurement: String,
});

export { IngSchema, IngInterface };
