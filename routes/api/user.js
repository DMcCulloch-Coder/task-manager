const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
    .get(userController.getAll)
    .post(userController.create)

router.route('/:id')
    .get(userController.findById)
    .patch(userController.update)
    .delete(userController.delete)

module.exports = router