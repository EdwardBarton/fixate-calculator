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
app.use(require('./routes/users'));
// app.use(require('./routes/generate-data')); // seed MongoDB

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/dist'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log('Node.js listening on port', port);
});
