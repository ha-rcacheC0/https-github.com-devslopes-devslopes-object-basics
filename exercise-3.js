// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

const printPizzaPlace = () => {
  for (const key in dominos) {
    console.log(key, dominos[key]);
  }
};

printPizzaPlace();

const toppingsPriceRange = (object) => {
  let pizzaToppings = Object.values(object.pizzaToppings);
  let min;
  let max;
  for (key in pizzaToppings) {
    min = Math.min(...pizzaToppings);
    max = Math.max(...pizzaToppings);
  }
  return [min, max];
};
toppingsPriceRange(dominos);

const calculateAverageRating = (object) => {
  let ratings = Object.values(object.starReviews);
  let newRate = ratings.reduce((t, e) => {
    return (t += e);
  }, 0);
  return newRate / ratings.length;
};

calculateAverageRating(dominos).toFixed(1);
