const router = require('express').Router();
const userController = require('../../controllers/userController');

const auth = require('../../middleware/auth');

router.route('/')
    .post(userController.create)

router.route('/profile')
    .get(auth, userController.getProfile)

router.route('/:id')
    .get(userController.findById)
    .patch(userController.update)
    .delete(userController.delete)

router.route('/login')
    .post(userController.login)

router.route('/logout')
    .post(auth, userController.logout)

module.exports = router