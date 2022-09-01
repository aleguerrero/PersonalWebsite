const { default: mongoose, Schema } = require("mongoose");

const experienceSchema = new mongoose.Schema({
    companyName: {
        required: true,
        type: String
    },
    started: {
        required: true,
        type: String
    },
    ended: {
        required: true,
        type: Date
    },
    jobs: [{ tyope: Schema.Types.ObjectId, ref: 'Job' }]
})

const jobSchema = new mongoose.Schema({
    jobName: {
        required: true,
        type: String
    },
    jobDuration: {
        required: true,
        type: String
    },
    startedTimePosition: {
        required: true,
        type: Date
    },
    endedTimePosition: {
        required: true,
        type: Date
    },
    jobTasks: {
        required: true,
        type: [String]
    },
    skillset: {
        required: true,
        type: [String]
    }
});

module.exports = mongoose.model('Technology', technologySchema);
module.exports = mongoose.model('Job', jobSchema);