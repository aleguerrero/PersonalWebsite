const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const hobbySchema = new mongoose.Schema({
    hobbyName: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    imagePath: {
        required: true,
        type: String
    }
}, {
    collection: 'hobbies'
})

module.exports = mongoose.model('hobbies', hobbySchema)