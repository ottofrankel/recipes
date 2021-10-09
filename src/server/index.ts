import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router";

mongoose.connect("mongodb://localhost/recipes");

const PORT_NUM: number = 5000;
const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router(app);

app.listen(PORT_NUM, () => {
  console.log("Node.js listening on port " + PORT_NUM);
});
