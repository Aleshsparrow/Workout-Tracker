const router = require("express").Router();
const path = require("path");
const db = require("../models/index")


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
    db.findAll().then(function(dbworkouts){
        res.json(dbworkouts)
    })
    .catch(err => {
        res.status(400).json(err);
        });
})

router.post("/api/workouts", (req, res) => {
    db.create({}).then(function(dbworkouts){
        res.json(dbworkouts)
    }).catch(err => {
        res.status(400).json(err);
        });
})

module.exports = router;