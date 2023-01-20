const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

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
}, {
    collection: 'Technologies'
})

module.exports = mongoose.model('Technology', technologySchema)