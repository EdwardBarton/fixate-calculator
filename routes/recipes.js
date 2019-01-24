const router = require('express').Router();
const Recipe = require('../models/Recipe');

router.get('/api/recipes', (req, res) => {
  Recipe.find({}, (err, recipes) => {
    if (err) throw err;

    if (!recipes) {
      res.status(404).send('No recipes found');
    } else {
      res.send(recipes);
    }
  });
});

module.exports = router;
