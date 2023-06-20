const router = require('express').Router();
const experiences = require('../model/Experiences');

router.get("", async (req, res) => {

  console.log("on experiences!")
  console.log(process.env.DATABASE_URL)

  // Looks for experiences
  const response = await experiences.find({}, function (err, data) {
    if (err) return handleError(err);
  }).clone().catch(function(err){
    console.log(err)
  });

  if (!response) return res.status(400).send('Experiences does not exist');

  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials" : true,
    "Content-Type": "application/json"
  });
  res.status(200).send(response);
});

module.exports = router;