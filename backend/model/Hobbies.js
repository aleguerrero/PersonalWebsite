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
    }
}, {
    collection: 'Hobbies'
})

module.exports = mongoose.model('Hobbies', hobbySchema)