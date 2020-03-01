const db = require('../models');

module.exports = {
    create: (req, res) => {
        db.User
        .create(req.body)
        .then(result => res.json(result))
    }
}
