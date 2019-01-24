const router = require('express').Router();
const User = require('../models/User');
const Recipe = require('../models/Recipe');
const Program = require('../models/Program');
const {
  LIIFT4nutritionPlans,
  transform20NutritionPlans,
  eightyDayObsessionNutritionPlans
} = require('./NutritionPlans');

router.get('/api/generate-data', async (req, res) => {
  // Initialize single dummy user (for demo purposes)
  const user = new User({
    selectedProgram: {
      name: 'foo'
    },
    gender: 'foo',
    weight: 0,
    nutritionPlan: {
      id: 'foo',
      minCalories: 0,
      maxCalories: 0
    },
    mealPlan: []
  });
  await user.save();

  // LIIFT 4
  const LIIFT4 = new Program({
    id: 1,
    name: 'LIIFT4',
    image: 'https://bit.ly/2Fbi4UR',
    trainers: ['Joel Freeman'],
    nutritionPlans: LIIFT4nutritionPlans
  });
  await LIIFT4.save();

  // Transform:20
  const transform20 = new Program({
    id: 2,
    name: 'Transform:20',
    image: 'https://bit.ly/2Ry1nZE',
    trainers: ['Shaun T'],
    nutritionPlans: transform20NutritionPlans
  });
  await transform20.save();

  // 80 Day Obsession
  const eightyDayObsession = new Program({
    id: 3,
    name: '80 Day Obsession',
    image: 'https://bit.ly/2VAteaE',
    trainers: ['Autumn Calabrese'],
    nutritionPlans: eightyDayObsessionNutritionPlans
  });
  await eightyDayObsession.save();

  const breakfastRecipe1 = new Recipe({
    type: 'breakfast',
    name: "Autumn's Banana Apple Muffins",
    instructions: [
      'Preheat oven to 350° F.',
      'Line muffin pan with nine muffin papers and lightly coat with spray. Set aside.',
      'Combine eggs, banana, and butter in a medium bowl; mix well. Set aside.',
      'Combine almond flour, baking soda, and salt in a medium bowl; mix well.',
      'Add almond meal mixture to egg mixture; mix until blended.',
      'Add apple; mix until just blended.',
      'Divide batter evenly between prepared muffin cups, ¾ full (approx. ¼ cup).',
      'Bake for 18 to 22 minutes, or until golden brown and toothpick inserted into the center comes out clean.',
      'Transfer muffins to rack; cool.'
    ],
    servings: 9,
    ingredients: [
      {
        quantity: '2',
        item: 'large eggs, lightly beaten'
      },
      {
        quantity: '1',
        item: 'mashed ripe banana (approx. 2 medium bananas)',
        unit: 'cup'
      },
      {
        quantity: '1',
        item: 'unsalted organic grass-fed butter, melted',
        unit: 'Tbsp'
      },
      {
        quantity: '1 1/2',
        item: 'almond flour',
        unit: 'cups'
      },
      {
        quantity: '3/4',
        item: 'baking soda, gluten-free',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'sea salt (or Himalayan salt)',
        unit: 'dash'
      },
      {
        quantity: '1/2',
        item: 'chopped apple (approx. ¾ medium apple)',
        unit: 'cup'
      }
    ],
    prepTime: '20 min.',
    cookTime: '22 min.',
    nutritionInfo: {
      calories: 161,
      fat: {
        quantity: 12,
        unit: 'g'
      },
      satFat: {
        quantity: 2,
        unit: 'g'
      },
      cholesterol: {
        quantity: 45,
        unit: 'mg'
      },
      sodium: {
        quantity: 157,
        unit: 'mg'
      },
      carbs: {
        quantity: 11,
        unit: 'g'
      },
      fiber: {
        quantity: 3,
        unit: 'g'
      },
      sugars: {
        quantity: 4,
        unit: 'g'
      },
      protein: {
        quantity: 6,
        unit: 'g'
      }
    },
    containers: {
      green: '0',
      purple: '1',
      yellow: '0',
      red: '0',
      orange: '0',
      blue: '1',
      tsp: '0'
    }
  });
  await breakfastRecipe1.save();

  const breakfastRecipe2 = new Recipe({
    type: 'breakfast',
    name: 'Balsamic Mushroom Toast',
    instructions: [
      'Heat ghee in large skillet over high heat.',
      'Add mushrooms; cook, stirring frequently, for 3 minutes, or until golden brown. Reduce heat to medium-low',
      'Add shallot, thyme, salt, and pepper; cook, stirring frequently, for 1 to 2 minutes, or until shallot is translucent.',
      'Add vinegar; cook, stirring frequently, for 1 to 2 minutes, or until pan is almost dry.',
      'Top toast with mushroom mixture and enjoy!'
    ],
    servings: 1,
    ingredients: [
      {
        quantity: '1',
        item: 'ghee (organic grass-fed, if possible)',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'quartered cremini mushrooms',
        unit: 'cup'
      },
      {
        quantity: '1',
        item: 'finely chopped shallot',
        unit: 'Tbsp'
      },
      {
        quantity: '1',
        item: 'finely chopped thyme',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'sea salt (or Himalayan salt)',
        unit: 'dash'
      },
      {
        quantity: '1',
        item: 'ground black pepper',
        unit: 'dash'
      },
      {
        quantity: '2',
        item: 'balsamic vinegar',
        unit: 'Tbsp'
      },
      {
        quantity: '1',
        item: 'low-sodium sprouted wheat bread (like Ezekiel®), toasted',
        unit: 'slice'
      }
    ],
    prepTime: '10 min.',
    cookTime: '8 min.',
    nutritionInfo: {
      calories: 173,
      fat: {
        quantity: 5,
        unit: 'g'
      },
      satFat: {
        quantity: 3,
        unit: 'g'
      },
      cholesterol: {
        quantity: 12,
        unit: 'mg'
      },
      sodium: {
        quantity: 373,
        unit: 'mg'
      },
      carbs: {
        quantity: 26,
        unit: 'g'
      },
      fiber: {
        quantity: 4,
        unit: 'g'
      },
      sugars: {
        quantity: 7,
        unit: 'g'
      },
      protein: {
        quantity: 6,
        unit: 'g'
      }
    },
    containers: {
      green: '1',
      purple: '0',
      yellow: '1',
      red: '0',
      orange: '0',
      blue: '0',
      tsp: '1'
    }
  });
  await breakfastRecipe2.save();

  const breakfastRecipe3 = new Recipe({
    type: 'breakfast',
    name: 'Brown Rice Porridge',
    instructions: [
      'Combine rice, almond milk, salt, cocoa powder, maple syrup, cinnamon, and cardamom in a medium serving bowl; mix well.',
      'Top with sunflower seeds, coconut, chia seeds, and ginger; enjoy!'
    ],
    servings: 1,
    ingredients: [
      {
        quantity: '1/2',
        item: 'cooked brown rice',
        unit: 'cup'
      },
      {
        quantity: '2',
        item: 'unsweetened almond milk',
        unit: 'Tbsp'
      },
      {
        quantity: '1',
        item: 'sea salt (or Himalayan salt)',
        unit: 'pinch'
      },
      {
        quantity: '1/4',
        item: 'unsweetened cocoa powder',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'pure maple syrup',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'ground cinnamon',
        unit: 'pinch'
      },
      {
        quantity: '1',
        item: 'ground cardamom',
        unit: 'pinch'
      },
      {
        quantity: '1',
        item: 'raw sunflower seeds',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'unsweetened shredded coconut',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'chia seeds',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'finely chopped pickled ginger',
        unit: 'Tbsp'
      }
    ],
    prepTime: '10 min.',
    cookTime: 'None',
    nutritionInfo: {
      calories: 186,
      fat: {
        quantity: 4,
        unit: 'g'
      },
      satFat: {
        quantity: 1,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0,
        unit: 'mg'
      },
      sodium: {
        quantity: 399,
        unit: 'mg'
      },
      carbs: {
        quantity: 32,
        unit: 'g'
      },
      fiber: {
        quantity: 4,
        unit: 'g'
      },
      sugars: {
        quantity: 5,
        unit: 'g'
      },
      protein: {
        quantity: 4,
        unit: 'g'
      }
    },
    containers: {
      green: '0',
      purple: '0',
      yellow: '1',
      red: '0',
      orange: '1/2',
      blue: '0',
      tsp: '0'
    }
  });
  await breakfastRecipe3.save();

  const breakfastRecipe4 = new Recipe({
    type: 'breakfast',
    name: 'Crepes Your Way',
    instructions: [
      'Combine eggs, almond milk, sugar, and salt in a medium bowl; whisk until well blended.',
      'Add coconut flour; whisk until well blended and free of lumps. Set aside.',
      'Lightly coat a 10-inch nonstick skillet with spray. Wipe skillet with a paper towel, leaving only a thin layer of spray.',
      'Preheat skillet over low heat until it just begins to get hot.',
      'Add ¼ cup batter to pan, swirling immediately to coat entire bottom and ¼-inch up the sides with a thin, even layer of batter; cook for approx. 90 seconds, or until crêpe has completely set. Gently peel from the edge and flip.',
      'Cook for 30 seconds. Place crêpe on a plate; cover with a paper towel.',
      'Continue with remaining batter, stacking crêpes with paper towels in between each on the plate.'
    ],
    servings: 4,
    ingredients: [
      {
        quantity: '4',
        item: 'large eggs'
      },
      {
        quantity: '1/4',
        item: 'unsweetened almond milk',
        unit: 'cup'
      },
      {
        quantity: '2',
        item: 'coconut sugar',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'sea salt (or Himalayan salt)',
        unit: 'pinch'
      },
      {
        quantity: '3',
        item: 'coconut flour',
        unit: 'Tbsp'
      }
    ],
    prepTime: '10 min.',
    cookTime: '8 min.',
    nutritionInfo: {
      calories: 108,
      fat: {
        quantity: 6,
        unit: 'g'
      },
      satFat: {
        quantity: 2,
        unit: 'g'
      },
      cholesterol: {
        quantity: 183,
        unit: 'mg'
      },
      sodium: {
        quantity: 158,
        unit: 'mg'
      },
      carbs: {
        quantity: 6,
        unit: 'g'
      },
      fiber: {
        quantity: 2,
        unit: 'g'
      },
      sugars: {
        quantity: 3,
        unit: 'g'
      },
      protein: {
        quantity: 7,
        unit: 'g'
      }
    },
    containers: {
      green: '0',
      purple: '0',
      yellow: '0',
      red: '1/2',
      orange: '0',
      blue: '1/2',
      tsp: '0'
    }
  });
  await breakfastRecipe4.save();

  const breakfastRecipe5 = new Recipe({
    type: 'breakfast',
    name: 'Fixate Breakfast Sausage',
    instructions: [
      'Combine turkey, maple syrup, salt, sage, rosemary, pepper, juniper, nutmeg, and water in a large mixing bowl; mix with clean hands until just blended. (Do not overmix, as that will make the sausage tough.) Set aside.',
      'Heat oil in large nonstick skillet over medium-high heat.',
      'Add turkey mixture; cook, stirring frequently to break turkey into crumblesized pieces, for 5 to 8 minutes, or until turkey is no longer pink.'
    ],
    servings: 4,
    ingredients: [
      {
        quantity: '1',
        item: 'raw 93% lean ground turkey',
        unit: 'lb'
      },
      {
        quantity: '2',
        item: 'pure maple syrup',
        unit: 'Tbsp'
      },
      {
        quantity: '1 1/2',
        item: 'sea salt (or Himalayan salt)',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'finely chopped fresh sage',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'finely chopped fresh rosemary',
        unit: 'tsp'
      },
      {
        quantity: '1/4',
        item: 'ground black pepper',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'ground juniper berries',
        unit: 'dash'
      },
      {
        quantity: '1/4',
        item: 'ground nutmeg',
        unit: 'tsp'
      },
      {
        quantity: '2',
        item: 'ice cold water',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'olive oil',
        unit: 'tsp'
      }
    ],
    prepTime: '10 min.',
    cookTime: '9 min.',
    nutritionInfo: {
      calories: 208,
      fat: {
        quantity: 11,
        unit: 'g'
      },
      satFat: {
        quantity: 3,
        unit: 'g'
      },
      cholesterol: {
        quantity: 84,
        unit: 'mg'
      },
      sodium: {
        quantity: 935,
        unit: 'mg'
      },
      carbs: {
        quantity: 7,
        unit: 'g'
      },
      fiber: {
        quantity: 0,
        unit: 'g'
      },
      sugars: {
        quantity: 7,
        unit: 'g'
      },
      protein: {
        quantity: 21,
        unit: 'g'
      }
    },
    containers: {
      green: '0',
      purple: '0',
      yellow: '0',
      red: '1',
      orange: '0',
      blue: '0',
      tsp: '0'
    }
  });
  await breakfastRecipe5.save();

  const entreeRecipe1 = new Recipe({
    type: 'entree',
    name: 'Avocado Chicken Salad Wrap',
    instructions: [
      'Combine avocados, lemon juice, lemon peel, mustard, dill, salt, and pepper in a medium bowl; mix until well blended.',
      'Add chicken, grapes, celery, onions, and pine nuts; toss gently to blend.',
      'Place 1 cup avocado mixture on each tortilla. Roll up, cut in half, and serve immediately'
    ],
    servings: 14,
    ingredients: [
      {
        quantity: '2',
        item: 'medium ripe avocados, mashed'
      },
      {
        quantity: '1/4',
        item: 'fresh lemon juice',
        unit: 'cup'
      },
      {
        quantity: '1',
        item: 'finely grated lemon peel (lemon zest)',
        unit: 'Tbsp'
      },
      {
        quantity: '1/4',
        item: 'Dijon mustard',
        unit: 'cup'
      },
      {
        quantity: '1/4',
        item: 'chopped fresh dill weed',
        unit: 'cup'
      },
      {
        quantity: '3/4',
        item: 'sea salt (or Himalayan salt)',
        unit: 'tsp'
      },
      {
        quantity: '1/2',
        item: 'ground black pepper',
        unit: 'tsp'
      },
      {
        quantity: '5 1/4',
        item: 'shredded cooked chicken breast',
        unit: 'cups'
      },
      {
        quantity: '2',
        item: 'red grapes, cut in half',
        unit: 'cups'
      },
      {
        quantity: '1',
        item: 'chopped celery (approx. 3 medium stalks)',
        unit: 'cup'
      },
      {
        quantity: '1',
        item: 'chopped red onion (approx. 1½ medium)',
        unit: 'cup'
      },
      {
        quantity: '1/2',
        item: 'thinly sliced green onion (approx. 4 medium stalks)',
        unit: 'cup'
      },
      {
        quantity: '1/4',
        item: 'pine nuts',
        unit: 'cup'
      },
      {
        quantity: '7',
        item: '(9-inch) sprouted whole-grain tortillas'
      }
    ],
    prepTime: '20 min.',
    cookTime: 'None',
    nutritionInfo: {
      calories: 248,
      fat: {
        quantity: 9,
        unit: 'g'
      },
      satFat: {
        quantity: 1,
        unit: 'g'
      },
      cholesterol: {
        quantity: 45,
        unit: 'mg'
      },
      sodium: {
        quantity: 343,
        unit: 'mg'
      },
      carbs: {
        quantity: 21,
        unit: 'g'
      },
      fiber: {
        quantity: 5,
        unit: 'g'
      },
      sugars: {
        quantity: 5,
        unit: 'g'
      },
      protein: {
        quantity: 22,
        unit: 'g'
      }
    },
    containers: {
      green: '0',
      purple: '0',
      yellow: '1',
      red: '1/2',
      orange: '0',
      blue: '1/2',
      tsp: '0'
    }
  });
  await entreeRecipe1.save();

  const entreeRecipe2 = new Recipe({
    type: 'entree',
    name: 'Fix-ed Grilled Cheese',
    instructions: [
      'Spread each slice of bread with ½ tsp. ghee. Season with salt.',
      'Top dry slice of bread with cheese and second slice of bread. Make sure buttered sides of bread are on the outside of the sandwich.',
      'Grill sandwich in small skillet, over medium-low heat, for 4 minutes on each side, or until bread is golden brown and cheese is melted. Press down on sandwich to seal. Remove from heat.',
      'Cut off crusts; cut sandwich into four sticks.'
    ],
    servings: 2,
    ingredients: [
      {
        quantity: '2',
        item: 'low-sodium sprouted whole-grain bread (like Ezekiel®)',
        unit: 'slices'
      },
      {
        quantity: '1',
        item: 'ghee (organic grass-fed, if possible)',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'sea salt (or Himalayan salt)',
        unit: 'dash'
      },
      {
        quantity: '2',
        item: 'Muenster cheese (approx. 2 oz.)',
        unit: 'slices'
      }
    ],
    prepTime: '5 min.',
    cookTime: '8 min.',
    nutritionInfo: {
      calories: 200,
      fat: {
        quantity: 11,
        unit: 'g'
      },
      satFat: {
        quantity: 6,
        unit: 'g'
      },
      cholesterol: {
        quantity: 36,
        unit: 'mg'
      },
      sodium: {
        quantity: 333,
        unit: 'mg'
      },
      carbs: {
        quantity: 15,
        unit: 'g'
      },
      fiber: {
        quantity: 3,
        unit: 'g'
      },
      sugars: {
        quantity: 0,
        unit: 'g'
      },
      protein: {
        quantity: 10,
        unit: 'g'
      }
    },
    containers: {
      green: '0',
      purple: '0',
      yellow: '1',
      red: '0',
      orange: '0',
      blue: '1',
      tsp: '1/2'
    }
  });
  await entreeRecipe2.save();

  const entreeRecipe3 = new Recipe({
    type: 'entree',
    name: 'Overstuffed Turkey Club',
    instructions: [
      'Spread one slice of bread with muffuletta mix and the other with mustard. Set slice of bread with mustard aside.',
      'Top first slice of bread with tomato, onion, pickles, turkey, turkey bacon, lettuce, and second slice of bread.',
      'Wrap sandwich tightly in parchment paper, if desired, before slicing in half. (This helps hold all that stuffing in place.) Eat one half and wrap second half in plastic wrap for storage.'
    ],
    servings: 2,
    ingredients: [
      {
        quantity: '2',
        item: 'low-sodium sprouted whole-grain bread (like Ezekiel®)',
        unit: 'slices'
      },
      {
        quantity: '1',
        item: 'muffuletta mix',
        unit: 'Tbsp'
      },
      {
        quantity: '1',
        item: 'Dijon mustard',
        unit: 'Tbsp'
      },
      {
        quantity: '1/3',
        item: 'sliced tomato (approx. 1 medium)',
        unit: 'cup'
      },
      {
        quantity: '1/3',
        item: 'sliced red onion (approx. ½ medium)',
        unit: 'cup'
      },
      {
        quantity: '2',
        item: 'sliced dill pickles',
        unit: 'Tbsp'
      },
      {
        quantity: '6',
        item:
          'low-sodium, nitrite-free, deli-sliced turkey breast (approx. 4 oz.)',
        unit: 'slices'
      },
      {
        quantity: '4',
        item: 'cooked turkey bacon',
        unit: 'slices'
      },
      {
        quantity: '1/3',
        item: 'butter (or Bibb) lettuce',
        unit: 'cup'
      }
    ],
    prepTime: '10 min.',
    cookTime: 'None',
    nutritionInfo: {
      calories: 229,
      fat: {
        quantity: 8,
        unit: 'g'
      },
      satFat: {
        quantity: 2,
        unit: 'g'
      },
      cholesterol: {
        quantity: 50,
        unit: 'mg'
      },
      sodium: {
        quantity: 909,
        unit: 'mg'
      },
      carbs: {
        quantity: 22,
        unit: 'g'
      },
      fiber: {
        quantity: 4,
        unit: 'g'
      },
      sugars: {
        quantity: 3,
        unit: 'g'
      },
      protein: {
        quantity: 19,
        unit: 'g'
      }
    },
    containers: {
      green: '1',
      purple: '0',
      yellow: '1',
      red: '1',
      orange: '0',
      blue: '0',
      tsp: '0'
    }
  });
  await entreeRecipe3.save();

  const entreeRecipe4 = new Recipe({
    type: 'entree',
    name: 'Seared Ahi Tuna',
    instructions: [
      'Place ahi, soy sauce, mirin, lime juice, garlic, ginger, and oil in a resealable plastic bag. Seal, squeezing out excess air. Massage ingredients for a few seconds to distribute evenly. Marinate, in the refrigerator, for 30 minutes (or up to 2 hours).',
      'Remove ahi from bag. Discard leftover marinade. Pat ahi dry with a paper towel. Coat evenly on all sides with sesame seeds. Set aside.',
      'Heat medium cast iron pan (or heavy-bottomed skillet) over high heat until very hot.',
      'Add ahi; sear for 1½ to 3 minutes on each side (depending on the size and cut of ahi), until all sides are browned. Remove from heat.',
      'Let ahi sit for 5 minutes before gently slicing across the grain.',
      'Serve as is, or use as a fantastic protein addition to your favorite salad!'
    ],
    servings: 3,
    ingredients: [
      {
        quantity: '1',
        item: 'raw ahi tuna',
        unit: 'lb'
      },
      {
        quantity: '2',
        item: 'reduced-sodium tamari soy sauce',
        unit: 'Tbsp'
      },
      {
        quantity: '2',
        item: 'mirin',
        unit: 'Tbsp'
      },
      {
        quantity: '2',
        item: 'fresh lime juice',
        unit: 'Tbsp'
      },
      {
        quantity: '1',
        item: 'garlic, grated',
        unit: 'clove'
      },
      {
        quantity: '1/2',
        item: 'grated ginger (or ¼ tsp. ground ginger)',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'toasted sesame oil',
        unit: 'tsp'
      },
      {
        quantity: '2',
        item: 'sesame seeds',
        unit: 'Tbsp'
      }
    ],
    prepTime: '40 min.',
    cookTime: '6 min.',
    nutritionInfo: {
      calories: 238,
      fat: {
        quantity: 6,
        unit: 'g'
      },
      satFat: {
        quantity: 1,
        unit: 'g'
      },
      cholesterol: {
        quantity: 68,
        unit: 'mg'
      },
      sodium: {
        quantity: 452,
        unit: 'mg'
      },
      carbs: {
        quantity: 9,
        unit: 'g'
      },
      fiber: {
        quantity: 1,
        unit: 'g'
      },
      sugars: {
        quantity: 4,
        unit: 'g'
      },
      protein: {
        quantity: 36,
        unit: 'g'
      }
    },
    containers: {
      green: '0',
      purple: '0',
      yellow: '0',
      red: '1',
      orange: '0',
      blue: '0',
      tsp: '1'
    }
  });
  await entreeRecipe4.save();

  const entreeRecipe5 = new Recipe({
    type: 'entree',
    name: 'Tuna Melt on Roasted Portobello Mushroom',
    instructions: [
      'Preheat oven to 425° F.',
      'Place mushrooms on baking sheet smooth side down. Brush evenly with oil. Bake for 20 to 22 minutes, turning after 10 minutes. Mushrooms will be softened. Set aside.',
      'While mushrooms are baking, combine tuna, avocado, lemon juice, mustard, parsley, and garlic powder in a medium bowl; mix well.',
      'Top each mushroom evenly with tuna mixture, 1 slice of tomato, and 2 Tbsp. cheese.',
      'Bake for 3 to 5 minutes, or until cheese is melted; serve immediately.'
    ],
    servings: 4,
    ingredients: [
      {
        quantity: '4',
        item: 'large portobello mushroom caps, remove stems and gills'
      },
      {
        quantity: '1',
        item: 'olive oil',
        unit: 'tsp'
      },
      {
        quantity: '1 1/2',
        item:
          'chunk light tuna, packed in water, well-drained (approx. 12 oz.)',
        unit: 'cups'
      },
      {
        quantity: '1/2',
        item: 'medium ripe avocado, mashed'
      },
      {
        quantity: '2',
        item: 'fresh lemon juice',
        unit: 'Tbsp'
      },
      {
        quantity: '1',
        item: 'Dijon mustard',
        unit: 'Tbsp'
      },
      {
        quantity: '2',
        item: 'chopped fresh parsley',
        unit: 'Tbsp'
      },
      {
        quantity: '1/2',
        item: 'garlic powder',
        unit: 'tsp'
      },
      {
        quantity: '4',
        item: 'medium tomato',
        unit: 'slices'
      },
      {
        quantity: '1/2',
        item: 'shredded Swiss cheese (approx. 2 oz.)',
        unit: 'cup'
      }
    ],
    prepTime: '15 min.',
    cookTime: '27 min.',
    nutritionInfo: {
      calories: 221,
      fat: {
        quantity: 10,
        unit: 'g'
      },
      satFat: {
        quantity: 3,
        unit: 'g'
      },
      cholesterol: {
        quantity: 57,
        unit: 'mg'
      },
      sodium: {
        quantity: 486,
        unit: 'mg'
      },
      carbs: {
        quantity: 9,
        unit: 'g'
      },
      fiber: {
        quantity: 3,
        unit: 'g'
      },
      sugars: {
        quantity: 3,
        unit: 'g'
      },
      protein: {
        quantity: 26,
        unit: 'g'
      }
    },
    containers: {
      green: '1',
      purple: '0',
      yellow: '0',
      red: '1/2',
      orange: '0',
      blue: '1',
      tsp: '0'
    }
  });
  await entreeRecipe5.save();

  const snackRecipe1 = new Recipe({
    type: 'side & snack',
    name: 'Berry Quinoa Parfait',
    instructions: [
      'Evenly layer half of quinoa, strawberries, blackberries, blueberries, raspberries, yogurt, and honey in a tall glass. Repeat with remaining half of ingredients.',
      'Serve immediately or cover and refrigerate for up to 3 days.'
    ],
    servings: 1,
    ingredients: [
      {
        quantity: '1/2',
        item: 'cooked quinoa',
        unit: 'cup'
      },
      {
        quantity: '1/4',
        item: 'sliced fresh strawberries',
        unit: 'cup'
      },
      {
        quantity: '1/4',
        item: 'fresh blackberries',
        unit: 'cup'
      },
      {
        quantity: '1/4',
        item: 'fresh blueberries',
        unit: 'cup'
      },
      {
        quantity: '1/4',
        item: 'fresh raspberries',
        unit: 'cup'
      },
      {
        quantity: '3/4',
        item: 'reduced-fat (2%) plain Greek yogurt',
        unit: 'cup'
      },
      {
        quantity: '3/4',
        item: 'raw honey',
        unit: 'tsp'
      }
    ],
    prepTime: '5 min.',
    cookTime: 'None',
    nutritionInfo: {
      calories: 320,
      fat: {
        quantity: 6,
        unit: 'g'
      },
      satFat: {
        quantity: 3,
        unit: 'g'
      },
      cholesterol: {
        quantity: 9,
        unit: 'mg'
      },
      sodium: {
        quantity: 64,
        unit: 'mg'
      },
      carbs: {
        quantity: 46,
        unit: 'g'
      },
      fiber: {
        quantity: 8,
        unit: 'g'
      },
      sugars: {
        quantity: 20,
        unit: 'g'
      },
      protein: {
        quantity: 23,
        unit: 'g'
      }
    },
    containers: {
      green: '0',
      purple: '1',
      yellow: '1',
      red: '1',
      orange: '0',
      blue: '0',
      tsp: '0'
    }
  });
  await snackRecipe1.save();

  const snackRecipe2 = new Recipe({
    type: 'side & snack',
    name: 'Caramelized Pearl Onions',
    instructions: [
      'Place onions, port, vinegar, maple syrup, salt, and rosemary in a 3-quart slow cooker. Mix well. Cover; cook on low for 8 to 10 hours, or until onions are soft and caramelized to a deep brown.',
      'Remove lid; cook on high, stirring occasionally, for 15 to 30 minutes, or until excess liquid has evaporated.',
      'Remove rosemary.'
    ],
    servings: 8,
    ingredients: [
      {
        quantity: '1 1/2',
        item: 'frozen pearl onions',
        unit: 'lbs'
      },
      {
        quantity: '1/2',
        item: 'ruby port',
        unit: 'cup'
      },
      {
        quantity: '1/2',
        item: 'apple cider vinegar',
        unit: 'cup'
      },
      {
        quantity: '1/4',
        item: 'pure maple syrup',
        unit: 'cup'
      },
      {
        quantity: '1',
        item: 'sea salt (or Himalayan salt)',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'fresh rosemary',
        unit: 'sprig'
      }
    ],
    prepTime: '5 min.',
    cookTime: '10 hrs. 30 min.',
    nutritionInfo: {
      calories: 79,
      fat: {
        quantity: 2,
        unit: 'g'
      },
      satFat: {
        quantity: 1,
        unit: 'g'
      },
      cholesterol: {
        quantity: 4,
        unit: 'mg'
      },
      sodium: {
        quantity: 354,
        unit: 'mg'
      },
      carbs: {
        quantity: 14,
        unit: 'g'
      },
      fiber: {
        quantity: 1,
        unit: 'g'
      },
      sugars: {
        quantity: 11,
        unit: 'g'
      },
      protein: {
        quantity: 2,
        unit: 'g'
      }
    },
    containers: {
      green: '0',
      purple: '0',
      yellow: '1',
      red: '0',
      orange: '0',
      blue: '0',
      tsp: '0'
    }
  });
  await snackRecipe2.save();

  const snackRecipe3 = new Recipe({
    type: 'side & snack',
    name: 'Chicken Pepperoni Crumbles',
    instructions: [
      'Combine salt, pepper, paprika, garlic powder, fennel, and cayenne in a large mixing bowl; mix well.',
      'Add chicken; mix well with clean hands or a rubber spatula. Over-kneading can make the chicken a little tough, so be sure to mix just until the spices are incorporated. Set aside.',
      'Heat oil in large skillet over medium-high heat.',
      'Add chicken mixture; cook, stirring frequently to break up large pieces, for 5 to 7 minutes, or until chicken is cooked through and is broken into small crumbles. Remove chicken with a slotted spoon; cool on a plate lined with paper towels to absorb any excess fat.'
    ],
    servings: 6,
    ingredients: [
      {
        quantity: '3/4',
        item: 'sea salt (or Himalayan salt)',
        unit: 'tsp'
      },
      {
        quantity: '1/2',
        item: 'ground black pepper',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'ground sweet paprika',
        unit: 'Tbsp'
      },
      {
        quantity: '1',
        item: 'garlic powder',
        unit: 'tsp'
      },
      {
        quantity: '1/4',
        item: 'ground fennel seed',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'cayenne pepper',
        unit: 'pinch'
      },
      {
        quantity: '1',
        item: 'raw lean ground chicken breast',
        unit: 'lb'
      },
      {
        quantity: '1',
        item: 'olive oil',
        unit: 'Tbsp'
      }
    ],
    prepTime: '10 min.',
    cookTime: '8 min.',
    nutritionInfo: {
      calories: 134,
      fat: {
        quantity: 9,
        unit: 'g'
      },
      satFat: {
        quantity: 2,
        unit: 'g'
      },
      cholesterol: {
        quantity: 65,
        unit: 'mg'
      },
      sodium: {
        quantity: 332,
        unit: 'mg'
      },
      carbs: {
        quantity: 1,
        unit: 'g'
      },
      fiber: {
        quantity: 0,
        unit: 'g'
      },
      sugars: {
        quantity: 0,
        unit: 'g'
      },
      protein: {
        quantity: 14,
        unit: 'g'
      }
    },
    containers: {
      green: '0',
      purple: '0',
      yellow: '0',
      red: '1/2',
      orange: '0',
      blue: '0',
      tsp: '0'
    }
  });
  await snackRecipe3.save();

  const snackRecipe4 = new Recipe({
    type: 'side & snack',
    name: 'Cloud Bread',
    instructions: [
      'Heat oven to 300° F.',
      'Lightly coat large baking sheet with spray, then cover it with parchment paper. Set aside.',
      'Separate egg yolks from egg whites. Place egg whites in a medium bowl. Place egg yolks in a separate medium bowl. Set aside.',
      'Add cream of tartar to egg whites. Beat with a mixer on high until stiff peaks form, about 4 minutes. Set aside.',
      'Add salt, if desired, and yogurt to egg yolks. Beat with a mixer on medium until blended.',
      'Gently fold ⅓ of egg white mixture into egg yolk mixture. Fold in the remaining egg white mixture until just incorporated, being careful not to overmix.',
      'Using a large spoon, transfer a scoop of egg mixture onto prepared baking sheet, gently spreading into a thick pancake shape about 3 inches in diameter. Repeat with remaining batter.',
      'Bake for 25 to 30 minutes, or until golden brown and exterior is crispy to the touch. Immediately loosen each cloud bread with a spatula; allow to cool on the baking sheet for 3 minutes, then transfer to a wire rack to cool completely.',
      'Serve immediately, or store in an airtight container.'
    ],
    servings: 3,
    ingredients: [
      {
        quantity: '3',
        item: 'large eggs'
      },
      {
        quantity: '1',
        item: 'cream of tartar',
        unit: 'dash'
      },
      {
        quantity: '1',
        item: 'sea salt (or Himalayan salt) (to taste; optional)',
        unit: 'dash'
      },
      {
        quantity: '1/3',
        item: 'reduced-fat (2%) plain Greek yogurt',
        unit: 'cup'
      }
    ],
    prepTime: '10 min.',
    cookTime: '30 min.',
    nutritionInfo: {
      calories: 94,
      fat: {
        quantity: 6,
        unit: 'g'
      },
      satFat: {
        quantity: 2,
        unit: 'g'
      },
      cholesterol: {
        quantity: 184,
        unit: 'mg'
      },
      sodium: {
        quantity: 167,
        unit: 'mg'
      },
      carbs: {
        quantity: 2,
        unit: 'g'
      },
      fiber: {
        quantity: 0,
        unit: 'g'
      },
      sugars: {
        quantity: 2,
        unit: 'g'
      },
      protein: {
        quantity: 9,
        unit: 'g'
      }
    },
    containers: {
      green: '0',
      purple: '0',
      yellow: '0',
      red: '1/2',
      orange: '0',
      blue: '0',
      tsp: '0'
    }
  });
  await snackRecipe4.save();

  const snackRecipe5 = new Recipe({
    type: 'side & snack',
    name: 'Creamy Cauliflower Mash',
    instructions: [
      'Boil water in steamer (or large saucepan) over high heat. Reduce heat to medium-high. Place cauliflower and garlic in steamer basket; cook for 10 to 12 minutes, or until tender.',
      'Place cauliflower and garlic, almond milk, oil, and salt in food processor; pulse until smooth.',
      'Serve hot.'
    ],
    servings: 6,
    ingredients: [
      {
        item: 'water'
      },
      {
        quantity: '8',
        item: 'cauliflower florets, washed, patted dry',
        unit: 'cups'
      },
      {
        quantity: '2',
        item: 'garlic, crushed',
        unit: 'cloves'
      },
      {
        quantity: '1/3',
        item: 'unsweetened almond milk',
        unit: 'cup'
      },
      {
        quantity: '1',
        item: 'extra-virgin olive oil',
        unit: 'Tbsp'
      },
      {
        quantity: '1/2',
        item: 'sea salt (or Himalayan salt)',
        unit: 'tsp'
      }
    ],
    prepTime: '15 min.',
    cookTime: '12 min.',
    nutritionInfo: {
      calories: 57,
      fat: {
        quantity: 3,
        unit: 'g'
      },
      satFat: {
        quantity: 0,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0,
        unit: 'mg'
      },
      sodium: {
        quantity: 240,
        unit: 'mg'
      },
      carbs: {
        quantity: 7,
        unit: 'g'
      },
      fiber: {
        quantity: 2,
        unit: 'g'
      },
      sugars: {
        quantity: 3,
        unit: 'g'
      },
      protein: {
        quantity: 3,
        unit: 'g'
      }
    },
    containers: {
      green: '1',
      purple: '0',
      yellow: '0',
      red: '0',
      orange: '0',
      blue: '0',
      tsp: '1/2'
    }
  });
  await snackRecipe5.save();

  const soupSaladRecipe1 = new Recipe({
    type: 'soup & salad',
    name: 'Charred Corn Salad',
    instructions: [
      'Preheat gas (or charcoal) grill on high heat.',
      'Coat corn with spray; grill corn for approx. 10 minutes, turning each time the underside gets charred, or until corn is charred on all sides. Set aside to cool.',
      'When corn is cool enough to touch, cut kernels off the cob.',
      'Combine corn, onion, tomatoes, garlic, jalapeño, lime juice, lime peel, oil, cilantro, salt, and pepper in a medium bowl; toss gently to blend.'
    ],
    servings: 8,
    ingredients: [
      {
        quantity: '4',
        item: 'medium ears of corn, husks and silk removed'
      },
      {
        quantity: '1',
        item: 'chopped red onion (approx. 1 1/3 medium)',
        unit: 'cup'
      },
      {
        quantity: '2',
        item: 'medium Roma tomatoes, seeded, chopped'
      },
      {
        quantity: '1',
        item: 'garlic, grated',
        unit: 'clove'
      },
      {
        quantity: '1/2',
        item: 'medium jalapeño pepper, seeds and veins removed, finely chopped'
      },
      {
        quantity: '2',
        item: 'fresh lime juice',
        unit: 'Tbsp'
      },
      {
        quantity: '2',
        item: 'finely grated lime peel (lime zest)',
        unit: 'tsp'
      },
      {
        quantity: '3',
        item: 'olive oil',
        unit: 'Tbsp'
      },
      {
        quantity: '3',
        item: 'chopped fresh cilantro',
        unit: 'Tbsp'
      },
      {
        quantity: '1/4',
        item: 'sea salt (or Himalayan salt)',
        unit: 'tsp'
      },
      {
        quantity: '1/4',
        item: 'ground black pepper',
        unit: 'tsp'
      }
    ],
    prepTime: '10 min.',
    cookTime: '10 min.',
    nutritionInfo: {
      calories: 98,
      fat: {
        quantity: 5,
        unit: 'g'
      },
      satFat: {
        quantity: 1,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0,
        unit: 'mg'
      },
      sodium: {
        quantity: 73,
        unit: 'mg'
      },
      carbs: {
        quantity: 11,
        unit: 'g'
      },
      fiber: {
        quantity: 1,
        unit: 'g'
      },
      sugars: {
        quantity: 3,
        unit: 'g'
      },
      protein: {
        quantity: 1,
        unit: 'g'
      }
    },
    containers: {
      green: '1/2',
      purple: '0',
      yellow: '1/2',
      red: '0',
      orange: '0',
      blue: '0',
      tsp: '1/2'
    }
  });
  await soupSaladRecipe1.save();

  const soupSaladRecipe2 = new Recipe({
    type: 'soup & salad',
    name: 'Creamy Tomato Soup',
    instructions: [
      'Heat oil in medium saucepan over medium heat for 1 minute, or until fragrant.',
      'Add onion; cook, stirring frequently, for 4 to 5 minutes, or until translucent.',
      'Add garlic; cook, stirring frequently, for 2 minutes.',
      'Add tomatoes, almond milk, sugar, salt, and basil. Bring to a boil. Reduce heat to medium low; gently boil for 10 minutes.',
      'Remove basil. If you want a smooth soup, place soup in a blender or food processor, in small batches; cover with lid and kitchen towel. Blend until smooth.',
      'Garnish each portion with ½ tsp. sherry (if desired); enjoy.'
    ],
    servings: 4,
    ingredients: [
      {
        quantity: '1',
        item: 'olive oil',
        unit: 'Tbsp'
      },
      {
        quantity: '1/2',
        item: 'chopped onion (approx. ¾ medium onion)',
        unit: 'cup'
      },
      {
        quantity: '2',
        item: 'garlic, finely chopped',
        unit: 'cloves'
      },
      {
        quantity: '28',
        item: 'whole peeled tomatoes, pureed (preferably San Marzano)',
        unit: 'oz'
      },
      {
        quantity: '1 1/2',
        item: 'unsweetened almond milk',
        unit: 'cups'
      },
      {
        quantity: '1',
        item: 'coconut sugar',
        unit: 'Tbsp'
      },
      {
        quantity: '1/4',
        item: 'sea salt (or Himalayan salt)',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'fresh basil, leaves and stem attached',
        unit: 'sprig'
      },
      {
        quantity: '2',
        item: 'dry sherry (for garnish; optional)',
        unit: 'tsp'
      }
    ],
    prepTime: '15 min.',
    cookTime: '23 min.',
    nutritionInfo: {
      calories: 118,
      fat: {
        quantity: 5,
        unit: 'g'
      },
      satFat: {
        quantity: 0,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0,
        unit: 'mg'
      },
      sodium: {
        quantity: 259,
        unit: 'mg'
      },
      carbs: {
        quantity: 16,
        unit: 'g'
      },
      fiber: {
        quantity: 4,
        unit: 'g'
      },
      sugars: {
        quantity: 12,
        unit: 'g'
      },
      protein: {
        quantity: 2,
        unit: 'g'
      }
    },
    containers: {
      green: '0',
      purple: '0',
      yellow: '1',
      red: '0',
      orange: '0',
      blue: '0',
      tsp: '1'
    }
  });
  await soupSaladRecipe2.save();

  const soupSaladRecipe3 = new Recipe({
    type: 'soup & salad',
    name: 'Dill Cucumber Salad',
    instructions: [
      'Combine coriander, pepper, salt, vinegar, and honey in a medium bowl; whisk until incorporated.',
      'Add cucumber, onion, and dill; toss to blend.',
      'Refrigerate salad, covered, at least 1 hour and enjoy!'
    ],
    servings: 4,
    ingredients: [
      {
        quantity: '2',
        item: 'ground coriander',
        unit: 'tsp'
      },
      {
        quantity: '1/2',
        item: 'ground black pepper',
        unit: 'tsp'
      },
      {
        quantity: '1/2',
        item: 'sea salt (or Himalayan salt)',
        unit: 'tsp'
      },
      {
        quantity: '3',
        item: 'apple cider vinegar',
        unit: 'Tbsp'
      },
      {
        quantity: '1',
        item: 'raw honey',
        unit: 'Tbsp'
      },
      {
        quantity: '3',
        item:
          'thinly sliced English hothouse cucumber (approx. 1 medium cucumber)',
        unit: 'cups'
      },
      {
        quantity: '1/2',
        item: 'thinly sliced red onion (approx. 1/2 medium onion)',
        unit: 'cup'
      },
      {
        quantity: '2',
        item: 'finely chopped fresh dill',
        unit: 'Tbsp'
      }
    ],
    prepTime: '10 min.',
    cookTime: 'None',
    nutritionInfo: {
      calories: 38,
      fat: {
        quantity: 0,
        unit: 'g'
      },
      satFat: {
        quantity: 0,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0,
        unit: 'mg'
      },
      sodium: {
        quantity: 288,
        unit: 'mg'
      },
      carbs: {
        quantity: 9,
        unit: 'g'
      },
      fiber: {
        quantity: 1,
        unit: 'g'
      },
      sugars: {
        quantity: 6,
        unit: 'g'
      },
      protein: {
        quantity: 1,
        unit: 'g'
      }
    },
    containers: {
      green: '1',
      purple: '0',
      yellow: '0',
      red: '0',
      orange: '0',
      blue: '0',
      tsp: '0'
    }
  });
  await soupSaladRecipe3.save();

  const soupSaladRecipe4 = new Recipe({
    type: 'soup & salad',
    name: 'Easy Chicken Noodle Soup',
    instructions: [
      'Heat oil in large saucepan over medium heat.',
      'Add onion and celery; cook, stirring frequently, for 5 to 6 minutes, or until onion is translucent.',
      'Add broth, oregano, salt, and pepper. Bring to a boil, over high heat, stirring occasionally.',
      'Add carrots and pasta; boil, stirring occasionally, for 8 to 10 minutes, or until pasta is tender. Remove from heat.',
      'Add chicken and cilantro; mix well.'
    ],
    servings: 8,
    ingredients: [
      {
        quantity: '2',
        item: 'olive oil',
        unit: 'tsp'
      },
      {
        quantity: '1/2',
        item: 'chopped onion (approx. 3/4 medium)',
        unit: 'cup'
      },
      {
        quantity: '2',
        item: 'sliced celery (approx. 5 medium stalks)',
        unit: 'cups'
      },
      {
        quantity: '8',
        item: 'low-sodium organic chicken broth',
        unit: 'cups'
      },
      {
        quantity: '1',
        item: 'dried oregano leaves',
        unit: 'tsp'
      },
      {
        quantity: '1/2',
        item: 'sea salt (or Himalayan salt)',
        unit: 'tsp'
      },
      {
        quantity: '1/2',
        item: 'ground black pepper',
        unit: 'tsp'
      },
      {
        quantity: '1 1/2',
        item: 'sliced carrots (approx. 2 medium)',
        unit: 'cups'
      },
      {
        quantity: '1 1/4',
        item: 'dry whole wheat pasta',
        unit: 'cups'
      },
      {
        quantity: '3',
        item: 'cubed cooked chicken breast, boneless, skinless',
        unit: 'cups'
      },
      {
        quantity: '1/4',
        item: 'chopped fresh cilantro',
        unit: 'cup'
      }
    ],
    prepTime: '15 min.',
    cookTime: '22 min.',
    nutritionInfo: {
      calories: 188,
      fat: {
        quantity: 5,
        unit: 'g'
      },
      satFat: {
        quantity: 1,
        unit: 'g'
      },
      cholesterol: {
        quantity: 72,
        unit: 'mg'
      },
      sodium: {
        quantity: 489,
        unit: 'mg'
      },
      carbs: {
        quantity: 16,
        unit: 'g'
      },
      fiber: {
        quantity: 3,
        unit: 'g'
      },
      sugars: {
        quantity: 2,
        unit: 'g'
      },
      protein: {
        quantity: 20,
        unit: 'g'
      }
    },
    containers: {
      green: '1',
      purple: '0',
      yellow: '1',
      red: '1/2',
      orange: '0',
      blue: '0',
      tsp: '0'
    }
  });
  await soupSaladRecipe4.save();

  const soupSaladRecipe5 = new Recipe({
    type: 'soup & salad',
    name: 'Orange and Fennel Salad with Kalamata Olives',
    instructions: [
      'Arrange orange slices in an even layer on a large serving plate. Set aside.',
      'Arrange fennel slices over top of oranges so that you can still see the oranges, which are the star of the show, beneath them. (Reserve any remaining fennel for future salads, soups, or braises.)',
      'Sprinkle olives over fennel; drizzle with oil and lemon juice (if desired).',
      'Season with salt and pepper. Refrigerate, covered, for at least 30 minutes to allow flavors to meld.',
      'When ready to serve, garnish with reserved fennel fronds. Enjoy!'
    ],
    servings: 4,
    ingredients: [
      {
        quantity: '4',
        item:
          'medium oranges, peeled, white pith removed, sliced in 1/4-inch slices '
      },
      {
        quantity: '2',
        item:
          'thinly sliced fennel bulb, fronds chopped and reserved (approx. 1 large fennel bulb)',
        unit: 'cups'
      },
      {
        quantity: '20',
        item: 'Kalamata olives, pitted, cut in half'
      },
      {
        quantity: '2',
        item: 'extra-virgin olive oil',
        unit: 'Tbsp'
      },
      {
        quantity: '2',
        item: 'fresh lemon juice',
        unit: 'tsp'
      },
      {
        quantity: '1',
        item: 'sea salt (or Himalayan salt)',
        unit: 'pinch'
      },
      {
        quantity: '1',
        item: 'ground black pepper',
        unit: 'pinch'
      }
    ],
    prepTime: '15 min.',
    cookTime: 'None',
    nutritionInfo: {
      calories: 206,
      fat: {
        quantity: 15,
        unit: 'g'
      },
      satFat: {
        quantity: 2,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0,
        unit: 'mg'
      },
      sodium: {
        quantity: 328,
        unit: 'mg'
      },
      carbs: {
        quantity: 19,
        unit: 'g'
      },
      fiber: {
        quantity: 5,
        unit: 'g'
      },
      sugars: {
        quantity: 15,
        unit: 'g'
      },
      protein: {
        quantity: 2,
        unit: 'g'
      }
    },
    containers: {
      green: '1/2',
      purple: '1',
      yellow: '0',
      red: '0',
      orange: '1/2',
      blue: '0',
      tsp: '2'
    }
  });
  await soupSaladRecipe5.save();

  await res.send('ALL THINGS SAVED!!!');
});

module.exports = router;
