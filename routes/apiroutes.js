const router = require("express").Router();
const db = require("../models")

// console.log(db);


router.post("/api/workouts", (req, res) => {
    console.log(req.body)
    // db.workouts.create({}).then(function(dbworkouts){
        
    //     res.json(dbworkouts)
    // }).catch(err => {
    //     res.status(400).json(err);
    //     });
})
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(function(dbworkouts){
        res.json(dbworkouts)
    })
    .catch(err => {
        res.status(400).json(err);
        });
})

  

module.exports = router;