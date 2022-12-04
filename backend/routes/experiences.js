const router = require('express').Router();
const Experience = require('../model/Experience');

router.get("/getexperiences", async (req, res) => {
    
    // Looks for experiences
    const experiences = await Experience.find();
    if (!experiences) return res.status(400).send('Experiences does not exist');

    res.status(200).send(experiences);
});

module.exports = router;