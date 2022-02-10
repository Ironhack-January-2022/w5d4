const router = require("express").Router();
const axios = require('axios')

/* GET home page */
router.get("/", (req, res, next) => {
  // get all ricks from the api
  axios.get('https://rickandmortyapi.com/api/character/?name=rick')
    .then(response => {
      const ricks = response.data.results
      res.render("index", { ricks });
    })
    .catch(err => next(err))
});

module.exports = router;
