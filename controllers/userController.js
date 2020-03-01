const { User } = require('../models');

module.exports = {
    create: async (req, res) => {
        const user = new User(req.body);

        try {
            await user.save()
            res.status(201).send({ user })
        } catch (e) {
            res.status(400).send(e)
        }
    },

    findById: async (req, res) => {
        const user = User.findById(req.params.id)

        res.send(user)
    },

    login: async (req, res) => {
        console.log('login')
    },

    update: async (req, res) => {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['name', 'email', 'password']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
        console.log('working 1')

        if (!isValidOperation) {
            return res.status(400).send({ 'error': 'Invalid Update' })
        }

        try {
            console.log('working 2')
            const user = await User.findbyId(req.params.id);

            updates.forEach((update) => user[update] = req.body[update]);

            await user.save();

            console.log('working 3');

            if (!user) {
                return res.status(404).send({ 'error': "" })
            }

            res.send(user)

        } catch (e) {
            res.status(400).send(e)
        }

    }

}
