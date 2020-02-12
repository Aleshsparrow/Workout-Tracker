const router = require("express").Router();
const path = require("path");
const db = require("../models")


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./../public/index.html"));
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "./../public/stats.html"));
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "./../public/exercise.html"));
})

router.get("/exercise?", (req, res) => {
    res.sendFile(path.join(__dirname + "./../public/exercise.html"))
})

router.get("/api/workouts", (req, res) => {
    db.workouts.findAll({}).then(function(dbworkouts){
        res.json(dbworkouts)
    })
})

module.exports = router;