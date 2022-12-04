const { default: mongoose, Schema } = require("mongoose");

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

const experienceSchema = new mongoose.Schema({
    companyName: {
        required: true,
        type: String
    },
    started: {
        required: true,
        type: Date
    },
    ended: {
        required: true,
        type: Date
    },
    jobs: [jobSchema]
})

module.exports = mongoose.model('Experience', experienceSchema);
module.exports = mongoose.model('Job', jobSchema);