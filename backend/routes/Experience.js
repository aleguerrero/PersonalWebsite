const router = require('express').Router();
const Experience = require('../model/Experience');

router.get("", async (req, res) => {

  // Looks for experiences
  const experiences = await Experience.find({}, function (err, data) {
    if (err) return handleError(err);
  }).clone().catch(function(err){
    console.log(err)
  });

  if (!experiences) return res.status(400).send('Experiences does not exist');

  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials" : true,
    "Content-Type": "application/json"
  });
  res.status(200).send(experiences);
});

module.exports = router;