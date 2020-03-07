const router = require('express').Router();
const userController = require('../../controllers/userController');

const auth = require('../../middleware/auth');

router.route('/')
    .post(userController.create)

router.route('/profile')
    .get(auth, userController.getProfile)
    .delete(auth, userController.delete)
    .patch(auth, userController.update)

router.route('/login')
    .post(userController.login)

router.route('/logout')
    .post(auth, userController.logout)

router.route('/logoutAll')
    .post(auth, userController.logoutAll)

module.exports = router