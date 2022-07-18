// 1. sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
console.log(`1.------------`);

const array = [55, 2, 4, 5];
let sum = 0;
for(i=0; i<array.length; i++){
    sum += array[i];
}
console.log(sum);


// 2. Hello Frien. Create an array filled with your friends' and family's names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
//  [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"
//Bonus [Susan, Rezvane, Hadi] ➞ expected bonus output: "Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Hadi is at index 2 of my friends and family array".
console.log(`2.------------`);

let family = [`Cezary`, `Magaly`, `Apolo`];
const halloFamily = [];
for(i= 0; i< family.length; i++){
    let familyWords = `Hallo `+ family[i];
    halloFamily.push(familyWords);
}
console.log(halloFamily);


// 3. City Names. Create an array of city names. Loop through the array and add the city names to a string. Examples:
//[Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome".
console.log(`3.------------`);

const cityNames = [`Berlin`, `Paris`, `Prague`, `Rome`];
const cityNamesString = cityNames.toString();

console.log(cityNamesString +".");

// 4.Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
//[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
//[6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
console.log(`4.------------`);
const array1 = [3, 5, 2, 4];
const odd = [];
const even = [];
for(i = 0; i < array1.length; i++){
    if (array1[i] % 2 == 0){
        array1[i] --; 
        //let evenNumber = array1[i] --; 
        //even.push(evenNumber)

    }else {
        array1[i] ++;
    }
    //let oddNumber = array1[i] ++;
    //odd.push(oddNumber) 
     
   
}
console.log(array1);
//console.log(even);


// 5. Capitalize. Create a program that capitalizes the first letter of each element in an array of names. Examples:
//["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
//["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]
//["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]
console.log(`5.------------`);

const names = ["cynthia", "karen", "jane", "carrie"];
const capitalized = [];
for (i = 0; i < names.length; i++){
    const name = names[i].charAt(0).toUpperCase() + names[i].substring(1);
    capitalized.push(name);
}
console.log(capitalized);

// 6. No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
//[1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
//[1, 6, 6, 9, 9] ➞ [1, 6, 9]
//[2, 2, 2, 2, 2, 2] ➞ [2]
//[5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
console.log(`6.------------`);
const duplicate = [1, 4, 4, 'Marcel', 'Marcel', 7, 7];


function numberSet (array){
    const noDuplicate = [];

    for (i = 0; i < array.length; i++){
        if(noDuplicate.indexOf(array[i]) === -1){
            noDuplicate.push(array[i]);
        }
    
    }
    return noDuplicate;
}
console.log(numberSet(duplicate));