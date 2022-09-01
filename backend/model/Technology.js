const { default: mongoose } = require("mongoose");

const technologySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    dateLearned: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('Technology', technologySchema)