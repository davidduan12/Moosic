const express = require('express');
const router = express.Router();
const { getReps, AddReps,DeleteRep } = require('../controllers/reps')  


router
    .route('/')
    .get(getReps)
    .post(AddReps);

router
    .route('/:id')
    .delete(DeleteRep)


module.exports = router;