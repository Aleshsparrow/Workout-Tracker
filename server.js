const express = require("express");
const mongoose = require("mongoose");
const mongojs = require("mongojs")
const path = require("path")

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const databaseUrl = "workout";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

db.on("error", error => {
  console.log("Database Error:", error);
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
