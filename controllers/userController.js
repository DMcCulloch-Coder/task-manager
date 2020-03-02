const { User } = require('../models');

module.exports = {
    getAll: async (req, res) => {
        try {
            const users = await User.find({})
            res.status(201).send(users)
        } catch (e) {
            res.status(400).send(e)
        }
    },

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
        try {
            const user = await User.findById(req.params.id)
            if (!user) {
                return res.status(404).send();
            }
            res.send(user)
        } catch (e) {
            res.status(500).send()
        }

    },

    update: async (req, res) => {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['name', 'email', 'password']
        const isValidOperation = updates.every(update => allowedUpdates.includes(update))

        if (!isValidOperation) {
            return res.status(400).send({ 'error': 'Invalid Update' })
        }

        try {
            const user = await User.findById(req.params.id)
            updates.forEach(update => user[update] = req.body[update]);
            await user.save();
            if (!user) {
                return res.status(404).send({ 'error': "Invalid User" })
            }
            res.send(user)

        } catch (e) {
            res.status(400).send(e)
        }

    },

    delete: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            if (!user) {
                return res.status(404).send()
            }
            res.send(user)

        } catch (e) {
            res.status(500).send()

        }
    }

}
