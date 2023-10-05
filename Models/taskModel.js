const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, required: true }
})

const taskmodel = mongoose.model("tasks", taskSchema)

module.exports = { taskmodel }