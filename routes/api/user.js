const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
    .get(userController.getAll)
    .post(userController.create)

router.route('/:id')
    .get(userController.findById)
    .patch(userController.update)
    .delete(userController.delete)

router.route('/login')
    .post(userController.login)

module.exports = router