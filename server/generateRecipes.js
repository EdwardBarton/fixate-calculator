const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

const generateRandomContainers = () => Math.floor(Math.random() * 4);

app.get('/generaterecipes', (req, res) => {
  axios
    .get(
      'https://api.edamam.com/search?q=lunch&app_id=b32978be&app_key=347e9bb3e963f8caaa52429502462648&to=5&diet=low-fat'
    )
    .then(resp => {
      const breakfastRecipes = resp.data.hits.map(r => {
        return {
          name: r.recipe.label,
          image: r.recipe.image,
          instructionsURL: r.recipe.url,
          servings: r.recipe.yield,
          ingredients: r.recipe.ingredientLines,
          calories: Math.round(r.recipe.calories),
          time: r.recipe.totalTime,
          nutritionInfo: {
            fat: r.recipe.totalNutrients.FAT
              ? {
                  quantity: Math.floor(r.recipe.totalNutrients.FAT.quantity),
                  unit: r.recipe.totalNutrients.FAT.unit
                }
              : { quantity: 0 },
            cholesterol: r.recipe.totalNutrients.CHOLE
              ? {
                  quantity: Math.floor(r.recipe.totalNutrients.CHOLE.quantity),
                  unit: r.recipe.totalNutrients.CHOLE.unit
                }
              : { quantity: 0 },
            sodium: r.recipe.totalNutrients.NA
              ? {
                  quantity: Math.floor(r.recipe.totalNutrients.NA.quantity),
                  unit: r.recipe.totalNutrients.NA.unit
                }
              : { quantity: 0 },
            carbs: r.recipe.totalNutrients.CHOCDF
              ? {
                  quantity: Math.floor(r.recipe.totalNutrients.CHOCDF.quantity),
                  unit: r.recipe.totalNutrients.CHOCDF.unit
                }
              : { quantity: 0 },
            fiber: r.recipe.totalNutrients.FIBTG
              ? {
                  quantity: Math.floor(r.recipe.totalNutrients.FIBTG.quantity),
                  unit: r.recipe.totalNutrients.FIBTG.unit
                }
              : { quantity: 0 },
            sugars: r.recipe.totalNutrients.SUGAR
              ? {
                  quantity: Math.floor(r.recipe.totalNutrients.SUGAR.quantity),
                  unit: r.recipe.totalNutrients.SUGAR.unit
                }
              : { quantity: 0 },
            protein: r.recipe.totalNutrients.PROCNT
              ? {
                  quantity: Math.floor(r.recipe.totalNutrients.PROCNT.quantity),
                  unit: r.recipe.totalNutrients.PROCNT.unit
                }
              : { quantity: 0 }
          },
          containers: {
            green: generateRandomContainers(),
            purple: generateRandomContainers(),
            yellow: generateRandomContainers(),
            red: generateRandomContainers(),
            orange: generateRandomContainers(),
            blue: generateRandomContainers(),
            teaspoon: generateRandomContainers()
          }
        };
      });

      res.send(breakfastRecipes);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(process.env.port || 8001);
