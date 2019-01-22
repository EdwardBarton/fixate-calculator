const mongoose = require('mongoose');
const NutritionPlan = require('./NutritionPlan');

const Schema = mongoose.Schema;
const programSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: String,
  trainers: [String],
  nutritionPlans: [NutritionPlan.schema]
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
