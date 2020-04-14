// Requiring the important npm packages
const router = require("express").Router();
const path = require("path");

// Setting up the home route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./../public/index.html"));
})
// Setting up the stats route
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "./../public/stats.html"));
})
// Setting up the exercise route
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "./../public/exercise.html"));
})
// Exporting the routes so the server can have access
module.exports = router;