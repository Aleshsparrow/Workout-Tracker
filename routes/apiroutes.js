const router = require("express").Router();
const db = require("../models/workout.js")



router.post("/api/workouts", (req, res) => {
    db.workouts.create({}).then(function(dbworkouts){
        res.json(dbworkouts)
    }).catch(err => {
        res.status(400).json(err);
        });
})
router.get("/api/workouts", (req, res) => {
    db.workouts.findAll().then(function(dbworkouts){
        res.json(dbworkouts)
    })
    .catch(err => {
        res.status(400).json(err);
        });
})

  

module.exports = router;