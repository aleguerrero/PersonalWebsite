const router = require('express').Router();
const Technology = require('../model/Technology');

router.get("/gettechnology", async (req, res) => {

  // Looks for experiences
  const tecnologies = await Technology.find({}, function (err, data) {
    if (err) return handleError(err);
  }).clone().catch(function(err){
    console.log(err)
  });

  if (!tecnologies) return res.status(400).send('Experiences does not exist');

  res.status(200).send(tecnologies);
});

module.exports = router;