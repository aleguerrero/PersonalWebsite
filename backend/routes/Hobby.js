const router = require('express').Router();
const Hobbies = require('../model/Hobbies');

router.get("/gethobbies", async (req, res) => {

  // Looks for hobbies
  const hobbies = await Hobbies.find({}, function (err, data) {
    if (err) return handleError(err);
  }).clone().catch(function(err){
    console.log(err)
  });

  if (!hobbies) return res.status(400).send('Hobbies does not exist');

  res.status(200).send(hobbies);
});

module.exports = router;