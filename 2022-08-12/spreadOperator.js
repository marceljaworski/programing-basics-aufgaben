// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// Once again create two arrays. Save all elements of both arrays to another variable.

const euroCountries = [`Spain`,`France`, `Deutchsland`];
const asianCountries = [`China`, `Malaysia`]
let countries = [...euroCountries, ...asianCountries];
console.log(...countries);

// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.

let countriesCopy = [...countries];
console.log(countriesCopy);

// 3. Find the Largest...
// Create a function to find the largest number in an array.

numbersArray = [4, 8, 2, 10];
function maxNumber(arr){

    return Math.max(...arr);
}
console.log(maxNumber(numbersArray));

// 4. Find the Smallest
// Create a function to find the smallest number in an array.

function minNumber(arr){
    return Math.min(...arr);
};
console.log(minNumber(numbersArray));

// 5. Clone and Merge
// Given two objects:
const person = {name: "John"}
const job = {role: "Teacher"}

// 5.1 Clone the person object.

let person2 ={...person};
console.log(person2);

// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.

const employee = {...person, ...job}
console.log(employee);

// 5.3 Then change the values of the properties in the employee object.

employee.name = "Dominik und Marvin";
employee.role = "DCI Teacher"
console.log(employee);