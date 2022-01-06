import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recipes");

const PORT_NUM = process.env.PORT || 5000;
const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static("../frontend/build"))
}

app.listen(PORT_NUM, () => {
  console.log("Node.js listening on port " + PORT_NUM);
});
