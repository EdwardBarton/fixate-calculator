const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const recipeSchema = new Schema({
  type: String,
  name: {
    type: String,
    required: true
  },
  image: String,
  instructions: [String],
  servings: Number,
  ingredients: [
    {
      quantity: String,
      item: String,
      unit: String
    }
  ],
  prepTime: String,
  cookTime: String,
  nutritionInfo: {
    calories: Number,
    fat: {
      quantity: Number,
      unit: String
    },
    satFat: {
      quantity: Number,
      unit: String
    },
    cholesterol: {
      quantity: Number,
      unit: String
    },
    sodium: {
      quantity: Number,
      unit: String
    },
    carbs: {
      quantity: Number,
      unit: String
    },
    fiber: {
      quantity: Number,
      unit: String
    },
    sugars: {
      quantity: Number,
      unit: String
    },
    protein: {
      quantity: Number,
      unit: String
    }
  },
  containers: {
    green: String,
    purple: String,
    yellow: String,
    red: String,
    orange: String,
    blue: String,
    tsp: String
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
