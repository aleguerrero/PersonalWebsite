const router = require('express').Router();
const Experience = require('../model/Experience');

router.get("/getexperience", async (req, res) => {

  // Looks for experiences
  const experiences = await Experience.find({}, function (err, data) {
    if (err) return handleError(err);
  }).clone().catch(function(err){
    console.log(err)
  });

  if (!experiences) return res.status(400).send('Experiences does not exist');

  res.status(200).send(experiences);
});

module.exports = router;