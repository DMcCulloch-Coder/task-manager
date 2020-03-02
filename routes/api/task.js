const router = require('express').Router();
const taskController = require('../../controllers/taskController');

router.route('/')
    .get(taskController.getAll)
    .post(taskController.create)

router.route('/:id')
    .get(taskController.findById)
    .patch(taskController.update)
    .delete(taskController.delete)

module.exports = router




