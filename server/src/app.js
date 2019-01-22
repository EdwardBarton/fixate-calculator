const app = require('express')();
const bp = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/fixateCalc',
  { useNewUrlParser: true }
);

app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(require('./routes/programs'));
app.use(require('./routes/recipes'));
// app.use(require('./data/generate-data')); // seed MongoDB

const port = process.env.port || 8001;

app.listen(port, () => {
  console.log('Node.js listening on port', port);
});
