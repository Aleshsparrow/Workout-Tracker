const express = require("express");
const mongoose = require("mongoose");
// const mongojs = require("mongojs")

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

// routes
app.use(require("./routes/apiroutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
