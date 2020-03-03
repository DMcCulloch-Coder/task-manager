const { Task } = require('../models');

module.exports = {
    getAll: async (req, res) => {
        try {
            const tasks = await Task.find({})
            res.status(201).send(tasks)
        } catch (e) {
            res.status(400).send(e)
        }
    },

    create: async (req, res) => {
        const task = new Task(req.body);
        try {
            await task.save()
            res.status(201).send({ task })
        } catch (e) {
            res.status(400).send(e)
        }
    },

    findById: async (req, res) => {
        try {
            const task = await Task.findById(req.params.id)
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
            const task = await Task.findById(req.params.id)
            updates.forEach(update => task[update] = req.body[update])
            await task.save()

            if (!task) {
                return res.status(404).send({ "error": "Invalid Task" })
            }

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