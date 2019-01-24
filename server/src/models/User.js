const mongoose = require('mongoose');
const ProgramSchema = require('./Program').schema;
const NutritionPlanSchema = require('./NutritionPlan').schema;
const RecipeSchema = require('./Recipe').schema;

const Schema = mongoose.Schema;
const userSchema = new Schema({
  selectedProgram: ProgramSchema,
  gender: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  nutritionPlan: NutritionPlanSchema,
  mealPlan: [RecipeSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
