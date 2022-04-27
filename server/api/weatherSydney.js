
const router = require('express').Router();
const { getWeatherSydney } = require('../readCVS')

router.get ('/', async (req, res, next) => {
  try{
    res.json(getWeatherSydney());
  } catch (error) {
      next (error);
    }
});

module.exports = router;