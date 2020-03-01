const router = require('express').Router();
const userController = require('../../controllers/userController');

// module.exports = (app) => {
//     app.post('/api/user', (req, res) => {
//         db.User.create(req.body).then((result) => {
//             res.json(result)
//         })
//     })
    
// }

router.route('/')
    .post(userController.create)

module.exports = router