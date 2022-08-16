// 1. Array Destructuring
// Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring assignment to complete this task.

const fruit="banana";
const vegetable="cucumber";
const food=["bread","cake","pizza"];

console.log(fruit, vegetable, ...food)

// const fr//uit = [];
// const vegetable = [];
// const food = [];
// fruit.push(`banana`);
// vegetable.push(`cucumber`);
// console.log(...fruit, ...vegetable);
//food.push(`bread`,`cakes`,`pizza`);
// console.log(...food);

// 2.Object Destructuring
// Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values.

const halloweenCostume = {
    Ella : `Hexe`,
    Vaso : `Vampire`,
    Marcel : `Poseidon`
};
const {Ella, Vaso, Marcel} = halloweenCostume;
console.log(Ella, Vaso, Marcel);

// 3. Parameters: Object Destructuring
// Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// Then, create a function to display all of the band/musician's data.
// Example
// weißes_häkchen
// eyes
// erhobene_hände





// 11:31 Uhr
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.