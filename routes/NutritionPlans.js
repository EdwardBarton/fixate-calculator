const NutritionPlan = require('../models/NutritionPlan');

// LIIFT4 Nutrition Plans
const LIIFT4A = new NutritionPlan({
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
});
const LIIFT4B = new NutritionPlan({
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
});
const LIIFT4C = new NutritionPlan({
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
});
const LIIFT4D = new NutritionPlan({
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
});
const LIIFT4E = new NutritionPlan({
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
});
const LIIFT4F = new NutritionPlan({
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
});
const LIIFT4nutritionPlans = [
  LIIFT4A,
  LIIFT4B,
  LIIFT4C,
  LIIFT4D,
  LIIFT4E,
  LIIFT4F
];

// Transform:20 Nutrition Plans
const transform20A = new NutritionPlan({
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
});
const transform20B = new NutritionPlan({
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
});
const transform20C = new NutritionPlan({
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
});
const transform20D = new NutritionPlan({
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
});
const transform20E = new NutritionPlan({
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
});
const transform20NutritionPlans = [
  transform20A,
  transform20B,
  transform20C,
  transform20D,
  transform20E
];

// 80 Day Obsession Nutrition Plans
const eightyDOA = new NutritionPlan({
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
});
const eightyDOB = new NutritionPlan({
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
});
const eightyDOC = new NutritionPlan({
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
});
const eightyDOD = new NutritionPlan({
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
});
const eightyDOE = new NutritionPlan({
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
});
const eightyDOF = new NutritionPlan({
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
});
const eightyDayObsessionNutritionPlans = [
  eightyDOA,
  eightyDOB,
  eightyDOC,
  eightyDOD,
  eightyDOE,
  eightyDOF
];

module.exports = {
  LIIFT4nutritionPlans,
  transform20NutritionPlans,
  eightyDayObsessionNutritionPlans
};
