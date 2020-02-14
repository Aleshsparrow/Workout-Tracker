const router = require("express").Router();
const db = require("../models")

// console.log(db);

// Route to get information posted from the front end
router.post("/api/workouts", (req, res) => {
    console.log(req.body)
    db.Workout.create(req.body).then(function(dbworkouts){
        
        res.json(dbworkouts)
    }).catch(err => {
        res.status(400).json(err);
        });
})


router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
      })
      .catch(err => {
      res.status(400).json(err);
      });
  });

  // Route to get all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(function(dbworkouts){
        res.json(dbworkouts)
    })
    .catch(err => {
        res.status(400).json(err);
        });
})

// Route to update based on the workour chosen
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(
      {_id: req.params.id},
      { $push: { exercises: req.body } },
      { new: true,
        runValidators: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
      res.status(400).json(err);
      });
  });

  

module.exports = router;