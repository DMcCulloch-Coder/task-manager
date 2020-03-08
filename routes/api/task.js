const router = require('express').Router();
const taskController = require('../../controllers/taskController');
const auth = require('../../middleware/auth');

router.route('/')
    .get(auth, taskController.getAll)
    .post(auth, taskController.create)

router.route('/:id')
    .get(auth, taskController.findById)
    .patch(auth, taskController.update)
    .delete(taskController.delete)

module.exports = router




