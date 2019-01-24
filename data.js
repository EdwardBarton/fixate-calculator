// *************** BEACHBODY FITNESS PROGRAMS *************** //
const programs = [
  // LIIFT4
  {
    id: 1,
    name: 'LIIFT4',
    image: 'https://bit.ly/2Fbi4UR',
    trainers: ['Joel Freeman'],
    nutritionPlans: [
      {
        id: 'A',
        weight: {
          male: {
            min: 0,
            max: 168
          },
          female: {
            min: 0,
            max: 168
          }
        },
        minCalories: 1200,
        maxCalories: 1499,
        containers: {
          green: 3,
          purple: 2,
          red: 4,
          yellow: 2,
          blue: 1,
          orange: 1,
          tsp: 2
        }
      },
      {
        id: 'B',
        weight: {
          male: {
            min: 168.5,
            max: 195
          },
          female: {
            min: 168.5,
            max: 195
          }
        },
        minCalories: 1500,
        maxCalories: 1799,
        containers: {
          green: 4,
          purple: 3,
          red: 4,
          yellow: 3,
          blue: 1,
          orange: 1,
          tsp: 4
        }
      },
      {
        id: 'C',
        weight: {
          male: {
            min: 195.5,
            max: 222
          },
          female: {
            min: 195.5,
            max: 222
          }
        },
        minCalories: 1800,
        maxCalories: 2099,
        containers: {
          green: 5,
          purple: 3,
          red: 5,
          yellow: 4,
          blue: 1,
          orange: 1,
          tsp: 5
        }
      },
      {
        id: 'D',
        weight: {
          male: {
            min: 222.5,
            max: 240
          },
          female: {
            min: 222.5,
            max: 240
          }
        },
        minCalories: 2100,
        maxCalories: 2299,
        containers: {
          green: 6,
          purple: 4,
          red: 6,
          yellow: 4,
          blue: 1,
          orange: 1,
          tsp: 6
        }
      },
      {
        id: 'E',
        weight: {
          male: {
            min: 240.5,
            max: 259
          },
          female: {
            min: 240.5,
            max: 259
          }
        },
        minCalories: 2300,
        maxCalories: 2499,
        containers: {
          green: 7,
          purple: 5,
          red: 6,
          yellow: 5,
          blue: 1,
          orange: 1,
          tsp: 7
        }
      },
      {
        id: 'F',
        weight: {
          male: {
            min: 259.5,
            max: 1000
          },
          female: {
            min: 259.5,
            max: 1000
          }
        },
        minCalories: 2500,
        maxCalories: 2799,
        containers: {
          green: 8,
          purple: 5,
          red: 7,
          yellow: 5,
          blue: 1,
          orange: 1,
          tsp: 8
        }
      }
    ]
  },
  // Transform:20
  {
    id: 2,
    name: 'Transform:20',
    image: 'https://bit.ly/2Ry1nZE',
    trainers: ['Shaun T'],
    nutritionPlans: [
      {
        id: 'A',
        weight: {
          male: {
            min: null,
            max: null
          },
          female: {
            min: 0,
            max: 168
          }
        },
        minCalories: 1200,
        maxCalories: 1499,
        containers: {
          green: 3,
          purple: 2,
          red: 4,
          yellow: 2,
          blue: 1,
          orange: 1,
          tsp: 2
        }
      },
      {
        id: 'B',
        weight: {
          male: {
            min: 0,
            max: 168
          },
          female: {
            min: 168.5,
            max: 195
          }
        },
        minCalories: 1500,
        maxCalories: 1799,
        containers: {
          green: 4,
          purple: 3,
          red: 4,
          yellow: 3,
          blue: 1,
          orange: 1,
          tsp: 4
        }
      },
      {
        id: 'C',
        weight: {
          male: {
            min: 168.5,
            max: 195
          },
          female: {
            min: 195.5,
            max: 222
          }
        },
        minCalories: 1800,
        maxCalories: 2099,
        containers: {
          green: 5,
          purple: 3,
          red: 5,
          yellow: 4,
          blue: 1,
          orange: 1,
          tsp: 5
        }
      },
      {
        id: 'D',
        weight: {
          male: {
            min: 195.5,
            max: 222
          },
          female: {
            min: 222.5,
            max: 240
          }
        },
        minCalories: 2100,
        maxCalories: 2299,
        containers: {
          green: 6,
          purple: 4,
          red: 6,
          yellow: 4,
          blue: 1,
          orange: 1,
          tsp: 6
        }
      },
      {
        id: 'E',
        weight: {
          male: {
            min: 222.5,
            max: 1000
          },
          female: {
            min: 240.5,
            max: 1000
          }
        },
        minCalories: 2300,
        maxCalories: 2499,
        containers: {
          green: 7,
          purple: 5,
          red: 6,
          yellow: 5,
          blue: 1,
          orange: 1,
          tsp: 7
        }
      }
    ]
  },
  // 80 Day Obsession
  {
    id: 3,
    name: '80 Day Obsession',
    image: 'https://bit.ly/2VAteaE',
    trainers: ['Autumn Calabrese'],
    nutritionPlans: [
      {
        id: 'A',
        minCalories: 1200,
        maxCalories: 1499,
        containers: {
          green: 4,
          purple: 2,
          red: 4,
          yellow: 2,
          blue: 1,
          orange: 1,
          tsp: 3
        }
      },
      {
        id: 'B',
        minCalories: 1500,
        maxCalories: 1799,
        containers: {
          green: 4,
          purple: 3,
          red: 3,
          yellow: 3,
          blue: 1,
          orange: 1,
          tsp: 4
        }
      },
      {
        id: 'C',
        minCalories: 1800,
        maxCalories: 2099,
        containers: {
          green: 5,
          purple: 3,
          red: 5,
          yellow: 4,
          blue: 1,
          orange: 1,
          tsp: 5
        }
      },
      {
        id: 'D',
        minCalories: 2100,
        maxCalories: 2299,
        containers: {
          green: 6,
          purple: 4,
          red: 6,
          yellow: 4,
          blue: 1,
          orange: 1,
          tsp: 6
        }
      },
      {
        id: 'E',
        minCalories: 2300,
        maxCalories: 2499,
        containers: {
          green: 7,
          purple: 5,
          red: 6,
          yellow: 5,
          blue: 1,
          orange: 1,
          tsp: 7
        }
      },
      {
        id: 'F',
        minCalories: 2500,
        maxCalories: 2800,
        containers: {
          green: 8,
          purple: 5,
          red: 7,
          yellow: 5,
          blue: 1,
          orange: 1,
          tsp: 8
        }
      }
    ]
  }
];

// *************** FIXATE RECIPES *************** //
const recipes = [
  {
    id: 1,
    type: 'breakfast',
    name: 'Arnold Palmer Concentrate',
    image:
      'https://www.edamam.com/web-img/11c/11ce887aafcdd20b0cd5f7a861f0fa66.jpg',
    instructionsURL:
      'http://zesterdaily.com/drinking/arnold-palmer-concentrate-recipe/',
    servings: 4,
    ingredients: [
      '8 medium lemons, unwaxed if possible',
      '6 black tea bags (such as english breakfast, orange pekoe, darjeeling)',
      '2 cups water',
      '1½ cups sugar'
    ],
    calories: 1296,
    time: 312,
    nutritionInfo: {
      fat: {
        quantity: 1,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0
      },
      sodium: {
        quantity: 32,
        unit: 'mg'
      },
      carbs: {
        quantity: 343,
        unit: 'g'
      },
      fiber: {
        quantity: 12,
        unit: 'g'
      },
      sugars: {
        quantity: 311,
        unit: 'g'
      },
      protein: {
        quantity: 5,
        unit: 'g'
      }
    },
    containers: {
      green: 0,
      purple: 1,
      yellow: 2,
      red: 3,
      orange: 2,
      blue: 2,
      tsp: 2
    }
  },
  {
    id: 2,
    type: 'breakfast',
    name: 'Apricot Breakfast Popsicles Recipe',
    image:
      'https://www.edamam.com/web-img/76e/76e3eb57e3b6982ed1f34fa538814471.jpg',
    instructionsURL:
      'http://www.seriouseats.com/recipes/2013/07/apricot-breakfast-popsicles-with-yogurt-recipe.html',
    servings: 6,
    ingredients: [
      '8 apricots, halved and pitted',
      '2-4 tablespoons honey',
      '4 cardamom pods, slightly crushed, plus more ground to taste',
      '3/4 cup plain yogurt'
    ],
    calories: 441,
    time: 480,
    nutritionInfo: {
      fat: {
        quantity: 7,
        unit: 'g'
      },
      cholesterol: {
        quantity: 23,
        unit: 'mg'
      },
      sodium: {
        quantity: 90,
        unit: 'mg'
      },
      carbs: {
        quantity: 92,
        unit: 'g'
      },
      fiber: {
        quantity: 6,
        unit: 'g'
      },
      sugars: {
        quantity: 86,
        unit: 'g'
      },
      protein: {
        quantity: 10,
        unit: 'g'
      }
    },
    containers: {
      green: 3,
      purple: 0,
      yellow: 1,
      red: 3,
      orange: 2,
      blue: 0,
      tsp: 1
    }
  },
  {
    id: 3,
    name: 'Black Tea Jelly',
    type: 'breakfast',
    image:
      'https://www.edamam.com/web-img/822/8224b5b91557151df19b9d82e727436d.jpeg',
    instructionsURL: 'http://www.food52.com/recipes/4167_black_tea_jelly',
    servings: 2,
    ingredients: [
      "2 cups of your favorite black tea (I use Taylor's of Harrogate Scottish Breakfast), strongly brewed and cooled to room temperature",
      '2 packets (1/2 an ounce) powdered gelatin',
      '1/4 cup sugar'
    ],
    calories: 246,
    time: 0,
    nutritionInfo: {
      fat: {
        quantity: 0,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0
      },
      sodium: {
        quantity: 42,
        unit: 'mg'
      },
      carbs: {
        quantity: 51,
        unit: 'g'
      },
      fiber: {
        quantity: 0
      },
      sugars: {
        quantity: 49,
        unit: 'g'
      },
      protein: {
        quantity: 12,
        unit: 'g'
      }
    },
    containers: {
      green: 1,
      purple: 1,
      yellow: 0,
      red: 2,
      orange: 2,
      blue: 1,
      tsp: 0
    }
  },
  {
    id: 4,
    name: 'Breakfast Smoothies',
    type: 'breakfast',
    image:
      'https://www.edamam.com/web-img/56e/56ed0ce74f0785273f5adb39ca563cc9.jpg',
    instructionsURL: 'http://www.marthastewart.com/336228/breakfast-smoothies',
    servings: 4,
    ingredients: [
      '1 1/2 cups (12 ounces) plain fat-free yogurt',
      '3 to 4 bananas, peeled, cut into chunks',
      '14 ounces strawberries, stems removed, roughly chopped to equal 3 cups',
      '1/4 cup skim milk or soy milk',
      '2 tablespoons honey',
      '1 cup ice'
    ],
    calories: 827,
    time: 5,
    nutritionInfo: {
      fat: {
        quantity: 3,
        unit: 'g'
      },
      cholesterol: {
        quantity: 8,
        unit: 'mg'
      },
      sodium: {
        quantity: 313,
        unit: 'mg'
      },
      carbs: {
        quantity: 186,
        unit: 'g'
      },
      fiber: {
        quantity: 18,
        unit: 'g'
      },
      sugars: {
        quantity: 132,
        unit: 'g'
      },
      protein: {
        quantity: 28,
        unit: 'g'
      }
    },
    containers: {
      green: 0,
      purple: 3,
      yellow: 1,
      red: 0,
      orange: 2,
      blue: 2,
      tsp: 0
    }
  },
  {
    id: 5,
    name: 'Pickled Radishes recipes',
    type: 'breakfast',
    image:
      'https://www.edamam.com/web-img/c12/c1271e0c95e734774df288b12d7d99f1',
    instructionsURL:
      'http://www.tastingtable.com/entry_detail/chefs_recipes/8214/Pickled_Radishes_Recipe.htm',
    servings: 1,
    ingredients: [
      '1 cup white wine vinegar',
      '1 cup water',
      '3 garlic cloves, thinly sliced',
      '1 tablespoon kosher salt',
      '2 tsps granulated sugar',
      '8 medium radishes (preferably breakfast radishes), quartered lengthwise',
      '½ small red onion, thinly sliced crosswise'
    ],
    calories: 109,
    time: 25,
    nutritionInfo: {
      fat: {
        quantity: 0,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0
      },
      sodium: {
        quantity: 1310,
        unit: 'mg'
      },
      carbs: {
        quantity: 15,
        unit: 'g'
      },
      fiber: {
        quantity: 1,
        unit: 'g'
      },
      sugars: {
        quantity: 10,
        unit: 'g'
      },
      protein: {
        quantity: 1,
        unit: 'g'
      }
    },
    containers: {
      green: 1,
      purple: 0,
      yellow: 0,
      red: 0,
      orange: 1,
      blue: 3,
      tsp: 1
    }
  },
  {
    id: 6,
    type: 'snack',
    name: "Strawberry Fruit Roll-Ups from 'Classic Snacks Made from Scratch'",
    image:
      'https://www.edamam.com/web-img/9f6/9f670d334e5620ed20d7a244c7bd158f.jpg',
    instructionsURL:
      'http://www.seriouseats.com/recipes/2013/02/strawberry-fruit-roll-ups-from-classic-snacks-made-from-scratch-recipe.html',
    servings: 12,
    ingredients: [
      '1 pound strawberries, hulled',
      '3/4 cup (5 1/4 ounces) granulated sugar',
      '1 tablespoon freshly squeezed lemon juice (from about 1/2 lemon)'
    ],
    calories: 724,
    time: 390,
    nutritionInfo: {
      fat: {
        quantity: 1,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0
      },
      sodium: {
        quantity: 6,
        unit: 'mg'
      },
      carbs: {
        quantity: 184,
        unit: 'g'
      },
      fiber: {
        quantity: 9,
        unit: 'g'
      },
      sugars: {
        quantity: 171,
        unit: 'g'
      },
      protein: {
        quantity: 3,
        unit: 'g'
      }
    },
    containers: {
      green: 2,
      purple: 2,
      yellow: 1,
      red: 0,
      orange: 1,
      blue: 0,
      tsp: 1
    }
  },
  {
    id: 7,
    name: 'Baked Potato Snack recipes',
    type: 'snack',
    image:
      'https://www.edamam.com/web-img/633/6330c4b566f8eba34eb1c5a4e66aa43e',
    instructionsURL: 'http://www.marthastewart.com/353269/baked-potato-snack',
    servings: 1,
    ingredients: [
      '1 medium sweet potato, or baking potato',
      'ground black pepper',
      'salt'
    ],
    calories: 195,
    time: 70,
    nutritionInfo: {
      fat: {
        quantity: 0,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0
      },
      sodium: {
        quantity: 571,
        unit: 'mg'
      },
      carbs: {
        quantity: 44,
        unit: 'g'
      },
      fiber: {
        quantity: 3,
        unit: 'g'
      },
      sugars: {
        quantity: 1,
        unit: 'g'
      },
      protein: {
        quantity: 5,
        unit: 'g'
      }
    },
    containers: {
      green: 2,
      purple: 3,
      yellow: 3,
      red: 3,
      orange: 0,
      blue: 3,
      tsp: 3
    }
  },
  {
    id: 8,
    name: 'Gingerbread Snacking Cake',
    type: 'snack',
    image:
      'https://www.edamam.com/web-img/ae0/ae081a54586068c8c3f61d37b5ceedc7.jpg',
    instructionsURL:
      'http://smittenkitchen.com/blog/2013/12/gingerbread-snacking-cake/',
    servings: 10,
    ingredients: [
      '8 tablespoons (1 stick, 4 ounces or 115 grams) unsalted butter, cut into chunks, plus more for pan',
      '1 cup water',
      '1 1/2 tsps baking soda',
      '2/3 cup packed dark-brown sugar',
      '1 cup unsulfured molasses',
      '1 tablespoon freshly grated ginger (optional)',
      '2 large eggs, room temperature, lightly beaten',
      '2 1/2 cups all-purpose flour, plus more for pan',
      '2 tsps ground ginger',
      '1 1/2 tsps ground cinnamon',
      '1/2 tsp ground cloves',
      '1/2 tsp ground or freshly grated nutmeg',
      '1/2 tsp salt',
      '2 tsps baking powder',
      'Confectioners’ sugar, for dusting finished cake',
      'Lightly sweetened whipped cream, essential for serving'
    ],
    calories: 2933,
    time: 0,
    nutritionInfo: {
      fat: {
        quantity: 16,
        unit: 'g'
      },
      cholesterol: {
        quantity: 380,
        unit: 'mg'
      },
      sodium: {
        quantity: 2942,
        unit: 'mg'
      },
      carbs: {
        quantity: 658,
        unit: 'g'
      },
      fiber: {
        quantity: 11,
        unit: 'g'
      },
      sugars: {
        quantity: 409,
        unit: 'g'
      },
      protein: {
        quantity: 45,
        unit: 'g'
      }
    },
    containers: {
      green: 1,
      purple: 0,
      yellow: 0,
      red: 3,
      orange: 3,
      blue: 0,
      tsp: 3
    }
  },
  {
    id: 9,
    name: 'Healthy Vegan Snacking recipes',
    type: 'snack',
    image:
      'https://www.edamam.com/web-img/939/9391ed601aa7ed85f28c0e4407b84d40',
    instructionsURL:
      'http://www.foodrepublic.com/2011/06/01/healthy-vegan-snacking/',
    servings: 4,
    ingredients: [
      '1 cup watermelon, large dice',
      '1 cup mango, large dice',
      '½ cup blueberries',
      '½ cup cherries, pitted',
      '¼ cup candied ginger, small dice',
      '1 cup orange juice'
    ],
    calories: 515,
    time: 20,
    nutritionInfo: {
      fat: {
        quantity: 1,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0
      },
      sodium: {
        quantity: 48,
        unit: 'mg'
      },
      carbs: {
        quantity: 127,
        unit: 'g'
      },
      fiber: {
        quantity: 8,
        unit: 'g'
      },
      sugars: {
        quantity: 111,
        unit: 'g'
      },
      protein: {
        quantity: 6,
        unit: 'g'
      }
    },
    containers: {
      green: 3,
      purple: 3,
      yellow: 3,
      red: 1,
      orange: 1,
      blue: 1,
      tsp: 3
    }
  },
  {
    id: 10,
    name: 'Warm Fruit and Nut Snack',
    type: 'snack',
    image:
      'https://www.edamam.com/web-img/7d2/7d272534d3a9a3c4e206d026f85458ff.jpg',
    instructionsURL:
      'http://www.pbs.org/food/recipes/warm-fruit-and-nut-snack/',
    servings: 12,
    ingredients: [
      '2 bananas',
      '2 cups red grapes, seedless',
      '2 cups green grapes, seedless'
    ],
    calories: 623,
    time: 86,
    nutritionInfo: {
      fat: {
        quantity: 1,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0
      },
      sodium: {
        quantity: 14,
        unit: 'mg'
      },
      carbs: {
        quantity: 162,
        unit: 'g'
      },
      fiber: {
        quantity: 11,
        unit: 'g'
      },
      sugars: {
        quantity: 121,
        unit: 'g'
      },
      protein: {
        quantity: 6,
        unit: 'g'
      }
    },
    containers: {
      green: 2,
      purple: 3,
      yellow: 2,
      red: 2,
      orange: 3,
      blue: 2,
      tsp: 2
    }
  },
  {
    id: 11,
    type: 'lunch',
    name: 'Sack Lunch: Fairytale Picnic Recipe',
    image:
      'https://www.edamam.com/web-img/70a/70aaa8022bf8706c375551c44718eaab.jpg',
    instructionsURL:
      'http://www.seriouseats.com/recipes/2008/03/sack-lunch-fairytale-picnic-fresh-pickled-vegetables-recipe.html',
    servings: 2,
    ingredients: [
      '1 1/2 cups white wine vinegar',
      '1 3/4 cups water',
      '2 1/2 tablespoons sugar',
      '1/2 bay leaf',
      '4 thyme sprigs',
      'Half a dried cayenne pepper or a pinch of dried chile flakes',
      '1/2 tsp coriander seeds',
      '2 whole cloves',
      '1 garlic clove, peeled and cut in half',
      'A big pinch of salt',
      'A few cups of tiny pieces of one or more vegetables, for example cauliflower florets, sliced carrots, quartered pearl onions, halved okra pods, small turnips cut into wedges, whole green beans, small cubes of celery root, etc.'
    ],
    calories: 274,
    time: 0,
    nutritionInfo: {
      fat: {
        quantity: 0,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0
      },
      sodium: {
        quantity: 360,
        unit: 'mg'
      },
      carbs: {
        quantity: 48,
        unit: 'g'
      },
      fiber: {
        quantity: 6,
        unit: 'g'
      },
      sugars: {
        quantity: 31,
        unit: 'g'
      },
      protein: {
        quantity: 4,
        unit: 'g'
      }
    },
    containers: {
      green: 1,
      purple: 2,
      yellow: 2,
      red: 0,
      orange: 0,
      blue: 0,
      tsp: 0
    }
  },
  {
    id: 12,
    type: 'lunch',
    name: 'Pork-And-Black Bean Power Lunch',
    image:
      'https://www.edamam.com/web-img/929/9292137c7d899767b71acbbe93d48e4d.jpg',
    instructionsURL:
      'http://www.myrecipes.com/recipe/pork-and-black-bean-power-lunch-10000001823302/',
    servings: 4,
    ingredients: [
      '1 (8.8-oz.) pouch ready-to-serve whole grain medley rice*',
      '1/2 cup rinsed and drained canned black beans',
      '1/4 cup shredded fully cooked pork roast au jus',
      '2 to 3 Tbsp. Cuban Salsa Verde'
    ],
    calories: 1088,
    time: 0,
    nutritionInfo: {
      fat: {
        quantity: 6,
        unit: 'g'
      },
      cholesterol: {
        quantity: 21,
        unit: 'mg'
      },
      sodium: {
        quantity: 409,
        unit: 'mg'
      },
      carbs: {
        quantity: 220,
        unit: 'g'
      },
      fiber: {
        quantity: 8,
        unit: 'g'
      },
      sugars: {
        quantity: 1,
        unit: 'g'
      },
      protein: {
        quantity: 30,
        unit: 'g'
      }
    },
    containers: {
      green: 1,
      purple: 1,
      yellow: 3,
      red: 2,
      orange: 1,
      blue: 1,
      tsp: 0
    }
  },
  {
    id: 13,
    type: 'lunch',
    name: 'Snakebite Recipe',
    image:
      'https://www.edamam.com/web-img/5fb/5fb33bf36b9a194b2258cb21387906f3.jpg',
    instructionsURL: 'http://www.chowhound.com/recipes/snakebite-29934',
    servings: 1,
    ingredients: [
      '8 ounces hard cider, chilled',
      '8 ounces lager, chilled',
      '1/4 ounce black currant liqueur (a.k.a. crème de cassis, optional)'
    ],
    calories: 219,
    time: 5,
    nutritionInfo: {
      fat: {
        quantity: 0,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0
      },
      sodium: {
        quantity: 18,
        unit: 'mg'
      },
      carbs: {
        quantity: 19,
        unit: 'g'
      },
      fiber: {
        quantity: 0
      },
      sugars: {
        quantity: 2,
        unit: 'g'
      },
      protein: {
        quantity: 2,
        unit: 'g'
      }
    },
    containers: {
      green: 1,
      purple: 1,
      yellow: 0,
      red: 3,
      orange: 3,
      blue: 2,
      tsp: 1
    }
  },
  {
    id: 14,
    type: 'lunch',
    name: 'Apple flavored lentils and rice',
    image:
      'https://www.edamam.com/web-img/649/6495057e5738be7ae34267819a69a847.jpg',
    instructionsURL:
      'http://honestcooking.com/apple-flavored-lentils-and-rice/',
    servings: 1,
    ingredients: [
      '¼ cup of rice, uncooked',
      '¼ cup of red onions, finely diced',
      '½ cup of lentils',
      '½ small, gala apple, finely diced',
      '1 tsp of lemon',
      '1 tsp of dried parsley',
      '¼ cup of feta, crumbled'
    ],
    calories: 676,
    time: 40,
    nutritionInfo: {
      fat: {
        quantity: 9,
        unit: 'g'
      },
      cholesterol: {
        quantity: 33,
        unit: 'mg'
      },
      sodium: {
        quantity: 354,
        unit: 'mg'
      },
      carbs: {
        quantity: 116,
        unit: 'g'
      },
      fiber: {
        quantity: 13,
        unit: 'g'
      },
      sugars: {
        quantity: 13,
        unit: 'g'
      },
      protein: {
        quantity: 33,
        unit: 'g'
      }
    },
    containers: {
      green: 0,
      purple: 0,
      yellow: 2,
      red: 2,
      orange: 2,
      blue: 3,
      tsp: 1
    }
  },
  {
    id: 15,
    type: 'lunch',
    name: 'Marinated Cauliflower',
    image:
      'https://www.edamam.com/web-img/4e2/4e297f28eedc5865eb4a5d28380339fa.JPG',
    instructionsURL: 'https://food52.com/recipes/6999-marinated-cauliflower',
    servings: 4,
    ingredients: [
      '1 head cauliflower',
      '1/2 cup cider vinegar',
      '1/2 cup water',
      '1 tsp dry mustard',
      '1/2 tsp turmeric',
      '3/4 cup sugar',
      'pinch white pepper'
    ],
    calories: 755,
    time: 0,
    nutritionInfo: {
      fat: {
        quantity: 2,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0
      },
      sodium: {
        quantity: 174,
        unit: 'mg'
      },
      carbs: {
        quantity: 179,
        unit: 'g'
      },
      fiber: {
        quantity: 11,
        unit: 'g'
      },
      sugars: {
        quantity: 160,
        unit: 'g'
      },
      protein: {
        quantity: 11,
        unit: 'g'
      }
    },
    containers: {
      green: 3,
      purple: 1,
      yellow: 2,
      red: 0,
      orange: 1,
      blue: 2,
      tsp: 1
    }
  },
  {
    id: 16,
    type: 'dinner',
    name: 'Little Hot After-Dinner Shots',
    image:
      'https://www.edamam.com/web-img/507/507d62f41d3ee34bc9892aec3358a2dd.jpg',
    instructionsURL:
      'http://leitesculinaria.com/84883/recipes-little-hot-after-dinner-shots.html',
    servings: 8,
    ingredients: [
      '3/4 cup (6 ounces) brandy or whiskey',
      '3/4 cup (6 ounces) Simple Syrup',
      '8 tablespoons whipped cream'
    ],
    calories: 912,
    time: 0,
    nutritionInfo: {
      fat: {
        quantity: 5,
        unit: 'g'
      },
      cholesterol: {
        quantity: 18,
        unit: 'mg'
      },
      sodium: {
        quantity: 102,
        unit: 'mg'
      },
      carbs: {
        quantity: 127,
        unit: 'g'
      },
      fiber: {
        quantity: 0
      },
      sugars: {
        quantity: 126,
        unit: 'g'
      },
      protein: {
        quantity: 0,
        unit: 'g'
      }
    },
    containers: {
      green: 2,
      purple: 2,
      yellow: 0,
      red: 1,
      orange: 0,
      blue: 3,
      tsp: 2
    }
  },
  {
    id: 17,
    type: 'dinner',
    name: 'Dinner Rolls',
    image:
      'https://www.edamam.com/web-img/c44/c44dc9adfaf217fb927cca62e34261b5.jpg',
    instructionsURL: 'https://food52.com/recipes/8306-dinner-rolls',
    servings: 9,
    ingredients: [
      '1/4 cup water, body temperature',
      '1 tsp dry active yeast',
      '2 tablespoons sugar',
      '1 tsp kosher salt, heaping, if you use a fine grind salt only use 1/2 tsp',
      '3 tablespoons raw wheat germ, toasted in a saute pan until nutty smelling',
      '2 cups unbleached all purpose flour',
      '1 stick of unsalted butter, softened, plus some for brushing the rolls',
      '2 large eggs'
    ],
    calories: 1408,
    time: 0,
    nutritionInfo: {
      fat: {
        quantity: 16,
        unit: 'g'
      },
      cholesterol: {
        quantity: 372,
        unit: 'mg'
      },
      sodium: {
        quantity: 1202,
        unit: 'mg'
      },
      carbs: {
        quantity: 259,
        unit: 'g'
      },
      fiber: {
        quantity: 11,
        unit: 'g'
      },
      sugars: {
        quantity: 27,
        unit: 'g'
      },
      protein: {
        quantity: 50,
        unit: 'g'
      }
    },
    containers: {
      green: 0,
      purple: 3,
      yellow: 1,
      red: 2,
      orange: 3,
      blue: 0,
      tsp: 3
    }
  },
  {
    id: 18,
    type: 'dinner',
    name: 'Dinner Tonight: Portuguese Salad',
    image:
      'https://www.edamam.com/web-img/028/028958eecc587e55b05ca18484787470.jpg',
    instructionsURL:
      'http://www.seriouseats.com/recipes/2008/07/portuguese-salad-recipe.html',
    servings: 2,
    ingredients: [
      '1 red bell pepper',
      '1 green bell pepper',
      '3 plum tomatoes',
      '1/4 olive oil',
      '1 cucumber, peeled',
      '1/4 cup cilantro, chopped',
      '2 tablespoons red wine vinegar',
      '1 tsp chili paste',
      'Salt and pepper'
    ],
    calories: 153,
    time: 187,
    nutritionInfo: {
      fat: {
        quantity: 1,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0
      },
      sodium: {
        quantity: 1777,
        unit: 'mg'
      },
      carbs: {
        quantity: 32,
        unit: 'g'
      },
      fiber: {
        quantity: 8,
        unit: 'g'
      },
      sugars: {
        quantity: 17,
        unit: 'g'
      },
      protein: {
        quantity: 6,
        unit: 'g'
      }
    },
    containers: {
      green: 2,
      purple: 1,
      yellow: 3,
      red: 2,
      orange: 2,
      blue: 1,
      tsp: 3
    }
  },
  {
    id: 19,
    type: 'dinner',
    name: 'Golden Dinner Rolls recipes',
    image:
      'https://www.edamam.com/web-img/620/620c1ea6a24b3ac994ecc2fb1b6c0f3a',
    instructionsURL:
      'http://www.epicurious.com/recipes/food/views/Golden-Dinner-Rolls-351232',
    servings: 12,
    ingredients: [
      '1/2 small (about 4 ounces/112 grams) orange-fleshed sweet potato (also called yam)',
      '1 1/2 cups plus 1 tablespoon (8 ounces/224 grams) unbleached all-purpose flour',
      '1/3 cup plus 4 tsps (3.5 ounces/98 grams) water, room temperature (70°F to 90°F)',
      '1 1/2 tsps honey',
      '3/4 tsp instant yeast (also known as rapid-rise or bread machine yeast)',
      '1 1/2 tablespoons non-fat dry milk powder',
      '1 tablespoon unsalted butter, softened, plus 6 tablespoons unsalted butter, melted and cooled',
      '3/4 tsp fine sea salt'
    ],
    calories: 1724,
    time: 0,
    nutritionInfo: {
      fat: {
        quantity: 19,
        unit: 'g'
      },
      cholesterol: {
        quantity: 42,
        unit: 'mg'
      },
      sodium: {
        quantity: 1503,
        unit: 'mg'
      },
      carbs: {
        quantity: 333,
        unit: 'g'
      },
      fiber: {
        quantity: 12,
        unit: 'g'
      },
      sugars: {
        quantity: 15,
        unit: 'g'
      },
      protein: {
        quantity: 47,
        unit: 'g'
      }
    },
    containers: {
      green: 3,
      purple: 2,
      yellow: 2,
      red: 1,
      orange: 0,
      blue: 3,
      tsp: 3
    }
  },
  {
    id: 20,
    type: 'dinner',
    name: 'After-Dinner Turmeric Spritzer recipes',
    image:
      'https://www.edamam.com/web-img/fd9/fd95a44a976bf90bcdb4de50ba2221ea',
    instructionsURL:
      'http://www.thekitchn.com/recipe-after-dinner-turmeric-spritzer-230146',
    servings: 1,
    ingredients: [
      '3 sage leaves',
      '1 sprig mint',
      '1 sprig rosemary',
      '1 (1-inch) piece fresh ginger',
      '1/4 tsp turmeric powder',
      'Juice of 1 medium orange',
      '1 cup club soda (or water)',
      '1 tablespoon apple cider vinegar',
      '1 tablespoon honey',
      '1 to 2 tsps digestive or aromatic bitters'
    ],
    calories: 181,
    time: 10,
    nutritionInfo: {
      fat: {
        quantity: 0,
        unit: 'g'
      },
      cholesterol: {
        quantity: 0
      },
      sodium: {
        quantity: 55,
        unit: 'mg'
      },
      carbs: {
        quantity: 39,
        unit: 'g'
      },
      fiber: {
        quantity: 5,
        unit: 'g'
      },
      sugars: {
        quantity: 29,
        unit: 'g'
      },
      protein: {
        quantity: 2,
        unit: 'g'
      }
    },
    containers: {
      green: 2,
      purple: 3,
      yellow: 3,
      red: 3,
      orange: 1,
      blue: 0,
      tsp: 2
    }
  }
];

module.exports = { recipes, programs };
