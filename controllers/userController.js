const { User } = require('../models');

module.exports = {
    getProfile: async (req, res) => {
        res.send(req.user)
    },

    create: async (req, res) => {
        const user = new User(req.body);
        try {
            await user.save()

            const token = await user.generateAuthToken();
            res.status(201).send({ user, token })
        } catch (e) {
            res.status(400).send(e)
        }
    },

    login: async (req, res) => {
        try {
            const user = await User.findByCredentials(req.body.email, req.body.password)
            const token = await user.generateAuthToken()
            res.send({ user, token })
        } catch (e) {
            res.status(400).send()
        }
    },

    logout: async (req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token !== req.token
            });
            await req.user.save();

            res.send()
        } catch (e) {
            res.status(500).send();
        }
    },

    logoutAll: async (req, res) => {
        try {
            req.user.tokens = []
            await req.user.save();
            res.send()
        } catch (e) {
            res.status(500).send();
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
            updates.forEach(update => req.user[update] = req.body[update]);
            await req.user.save();
            res.send(req.user)

        } catch (e) {
            res.status(400).send(e)
        }

    },

    delete: async (req, res) => {
        try {
            await req.user.remove()
            res.send(req.user)

        } catch (e) {
            res.status(500).send()

        }
    }

}
