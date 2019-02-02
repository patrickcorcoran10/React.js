const princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// log the name of each princess, follow by a colon, followed by their age
// forEach: executes a provided function once for each array element
princesses.forEach(princess => console.log(`${princess.name}: ${princess.age}`));

// create an array of just the names from the princesses array
// map: creates a new array with the results of calling a provided function on every element in the calling array
const names = princesses.map(function(princess) {
  return princess.name;
});
// console.log("names: ", names);
// 
const names1 = princesses.map(princess => princess.name);
console.log(names1);
// 

// using the `names` array, get only those names that start with an 'M'
// filter: creates a new array with elements that pass the test of the provided function
const mNames = names.filter(function(name) {
  return name.startsWith("M");
});
// console.log("m-names: ", mNames);

// get a single value from the data: the average age of all of the princesses
// map: applies a function against an "accumulator" and each element in the array (from left to right) to reduce it to a single value.
const sum = princesses.reduce(function(sum, princess) {
  return sum + princess.age;
}, 0);
const average = sum / princesses.length;
// console.log("average age: ", average);

const sum1 = princesses.reduce((sum, princess) => sum + princess.age, 0);
const average1 = sum1 / princesses.length;
console.log("average age: ", average1);

// BONUS: get the average age of all princesses whose name includes an 'l'
const lNames = princesses.filter(princess => princess.name.includes("l"));

const lSum1 = lNames.reduce((sum, princess) => sum + princess.age, 0);

const lAverage1 = lSum1 / lNames.length;

console.log("l-average: ", lAverage1);
