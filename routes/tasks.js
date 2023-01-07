const express = require('express');
const router = express.Router();
const { getTasks, AddTasks,EditTasks,DeleteTasks } = require('../controllers/tasks')  


router
    .route('/')
    .get(getTasks)
    .post(AddTasks);

router
    .route('/:id')
    .delete(DeleteTasks)

router.route('/:id/body/:body').patch(EditTasks);

module.exports = router;