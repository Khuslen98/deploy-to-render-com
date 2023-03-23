const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

app.use(express.json());
app.use(cors());
app.get("/", (request, response) => {
  response.send(
    `<h1 style='text-align: center;color: yellowgreen; background-color: teal; font-family: fantasy;' >Hello Day-83 enviroment variable</h1>`
  );
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error(error));
  console.log(`app running on http://localhost:${PORT}`);
});
