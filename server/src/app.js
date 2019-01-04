const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const recipes = require('../recipes');

const app = express();
app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.get('/recipes', (req, res) => {
  res.send(recipes);
});

app.listen(process.env.port || 8001);
