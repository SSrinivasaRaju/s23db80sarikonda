const mongoose = require("mongoose")
const umbrellaSchema = mongoose.Schema({
Umbrella_color: String,
Umbrella_length: String,
Umbrella_cost: String
})

module.exports = mongoose.model("umbrella",umbrellaSchema)