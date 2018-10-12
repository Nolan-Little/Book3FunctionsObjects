// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 7 === 0) {
//     console.log("chickenmonkey");
//   } else if (i % 7 === 0) {
//     console.log("monkey");
//   } else if (i % 5 === 0) {
//     console.log("chicken");
//   } else {
//     console.log(i)
//   }
// }

// let counter = 0;
// const nextBand = function (bandName) {
//   counter++;
//   return `${counter}. ${bandName}`
// }

// const killers = nextBand("killers");
// console.log(killers);
// const coaches = nextBand("coaches")
// console.log(coaches);

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
  // Modify the food so that it is cooked
  currentObject.cooked = true;
  // Put the cooked food into the appropriate array
  cookedFood.push(currentObject);
  return currentObject
};

// uncookedFood.forEach( (i) => {grill(i)})

function cookFood(uncooked, cooked) {
 for (let i = 0; i < uncooked.length; i++){
    grill(uncooked[i]);
  }
 for (let j = 0; j < cooked.length; j++) {
   if (cooked.cooked === true) {
     uncooked.shift();
   }
 }
  return uncooked
}

let finallyCooked = cookFood(uncookedFood, cookedFood)
// console.log(cookedFood);
console.log(finallyCooked);
// console.log(uncookedFood);





