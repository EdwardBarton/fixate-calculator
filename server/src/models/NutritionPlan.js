const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const nutritionPlanSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  weight: {
    male: {
      min: Number,
      max: Number
    },
    female: {
      min: Number,
      max: Number
    }
  },
  minCalories: {
    type: Number,
    required: true
  },
  maxCalories: {
    type: Number,
    required: true
  },
  containers: {
    green: Number,
    purple: Number,
    red: Number,
    yellow: Number,
    blue: Number,
    orange: Number,
    tsp: Number
  }
});

const NutritionPlan = mongoose.model('NutritionPlan', nutritionPlanSchema);

module.exports = NutritionPlan;
