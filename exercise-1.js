/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

const flavorTown = {
  name: "Flavor Town",
  cuisines: ["hamburger", "pizza", "tacos"],
  numberOfStars: 5,
  favorited: true,
};

flavorTown.address = "123 Main St.";
flavorTown.zipcode = 86753;
flavorTown.acceptsReservations = true;

flavorTown.numberOfStars += 1;
flavorTown.favorited = !flavorTown.favorited;
flavorTown.cuisines.push("Corn Flakes");

console.log(flavorTown);

const retrieveProperty = (object, stringKey) => {
  if (object[stringKey] === undefined) {
    return "The information you requested does not exist.";
  } else if (object[stringKey] === object[stringKey]) {
    return object[stringKey];
  }
};

console.log(`retrievePropery: ${retrieveProperty(flavorTown, "cuisines")}`);
console.log(`retrievePropery: ${retrieveProperty(flavorTown, "favorited")}`);
console.log(`retrievePropery: ${retrieveProperty(flavorTown, "name")}`);
console.log(`retrievePropery: ${retrieveProperty(flavorTown, "nickName")}`);
console.log(`retrievePropery: ${retrieveProperty(flavorTown, "state")}`);
