const router = require('express').Router();
const Program = require('../models/Program');

router.get('/api/programs', (req, res) => {
  Program.find({}, (err, programs) => {
    if (err) throw err;

    if (!programs) {
      res.status(404).send('No programs found');
    } else {
      res.send(programs);
    }
  });
});

module.exports = router;
