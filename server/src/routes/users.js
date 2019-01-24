const router = require('express').Router();
const User = require('../models/User');

// Get app user
router.get('/api/user', (req, res) => {
  User.find({}, (err, users) => {
    if (err) throw err;

    if (!users) {
      res.status(404).send('No users found');
    } else {
      res.send(users[0]);
    }
  });
});

// Update user's selected fitness program
router.put('/api/user/program', (req, res) => {
  User.findByIdAndUpdate(
    '5c49ce912a38fa7cd58d1f94',
    { selectedProgram: req.body },
    { new: true },
    (err, updatedUser) => {
      if (err) throw err;
      res.send(updatedUser);
    }
  );
});

// Calculate user's nutrition plan and update user info
router.put('/api/user/about', (req, res) => {
  User.findById('5c49ce912a38fa7cd58d1f94', (err, user) => {
    if (err) throw err;
    user.gender = req.body.gender;
    user.weight = req.body.weight;
    // Determine user's nutrition plan
    // 80 Day Obsession plans based off calorie targets, not user's weight
    if (user.selectedProgram.id === '5c49ce912a38fa7cd58d1fa4') {
      const calorieTarget = user.weight * 11 + 50;

      // Target calories outside calorie range for all plans
      const planA = user.selectedProgram.nutritionPlans.filter(
        plan => plan.id === 'A'
      )[0];
      const planF = user.selectedProgram.nutritionPlans.filter(
        plan => plan.id === 'F'
      )[0];

      // Target calories below Plan A min
      if (calorieTarget < planA.minCalories) {
        user.nutritionPlan = planA;
      }
      // Target calories above Plan F max
      else if (calorieTarget > planF.maxCalories) {
        user.nutritionPlan = planF;
      } else {
        user.nutritionPlan = user.selectedProgram.nutritionPlans.filter(
          plan =>
            plan.minCalories <= calorieTarget &&
            plan.maxCalories >= calorieTarget
        )[0];
      }
    }
    // LIIFT 4 and Transform:20 plans based off user's weight
    else {
      user.nutritionPlan = user.selectedProgram.nutritionPlans.filter(
        plan =>
          plan.weight[user.gender].min <= user.weight &&
          plan.weight[user.gender].max >= user.weight
      )[0];
    }

    // save updated user to DB
    user.save((err, updatedUser) => {
      if (err) throw err;
      res.send(updatedUser);
    });
  });
});

// Update user's meal plan
router.put('/api/user/meals', (req, res) => {
  User.findByIdAndUpdate(
    '5c49ce912a38fa7cd58d1f94',
    { mealPlan: req.body },
    { new: true },
    (err, updatedUser) => {
      if (err) throw err;
      res.send(updatedUser);
    }
  );
});

module.exports = router;
