/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

const grabCategories = (object) => {
  return Object.keys(object.pizzaToppings);
};

const verifyValues = (object, values) => {
  return Object.values(object).length === values;
};

const getToppingsInfo = (object) => {
  return Object.entries(object.pizzaToppings);
};

papaJohns.printAd = printAd = (topping) => {
  return `Welcome to ${papaJohns.name}. We are located at ${papaJohns.address}. This week we are having a sale on ${topping} for $${papaJohns.pizzaToppings[topping]}. ${papaJohns.slogan}`;
};

papaJohns.address = "oktoberfest";
papaJohns.slogan = "Oh yeah!";

console.log(verifyValues(papaJohns, 10));
console.log(grabCategories(papaJohns));
console.log(getToppingsInfo(papaJohns));
console.log(printAd("bacon"));
