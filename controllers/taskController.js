const { Task } = require('../models');

module.exports = {
    getAll: async (req, res) => {
        try {
            await req.user.populate('tasks').execPopulate();
            res.send(req.user.tasks);
        } catch (e) {
            res.status(400).send(e)
        }
    },

    create: async (req, res) => {
        const task = new Task({
            ...req.body,
            author: req.user._id
        })

        try {
            await task.save()
            res.status(201).send({ task })
        } catch (e) {
            res.status(400).send(e)
        }
    },

    findById: async (req, res) => {
        try {
            const task = await Task.findOne({
                _id: req.params.id,
                author: req.user._id
            })

            if (!task) {
                return res.status(404).send()
            }
            res.send({ task })
        } catch (e) {
            res.status(500).send()
        }
    },

    update: async (req, res) => {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['title', 'status']
        const isValidOperation = updates.every(update => allowedUpdates.includes(update))

        if (!isValidOperation) {
            return res.status(400).send({ 'error': 'Invalid update' })
        }

        try {
            const task = await Task.findOne({
                _id: req.params.id,
                author: req.user._id
            })

            if (!task) {
                return res.status(404).send({ "error": "Invalid Task" })
            }

            updates.forEach(update => task[update] = req.body[update])
            await task.save()

            res.send(task)
        } catch (e) {
            res.status(400).send()
        }

    },

    delete: async (req, res) => {
        try {
            const task = await Task.findByIdAndDelete(req.params.id)
            if (!task) {
                return res.status(404).send()
            }
            res.send({ task })
        } catch (e) {
            res.status(500).send()
        }
    }
}