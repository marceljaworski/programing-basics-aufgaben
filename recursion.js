// # Recursion
// ​
// - Benutze Recursion um die Aufgaben zu lösen 
// - for, while, do while, forEach, map, filter etc sind nicht erlaubt
// ​
// ## 2.1
// ​
// - Implementiere eine Funktion getSumOfArray, welche ein Array erhält und die Summe zurückgibt.
// ​
// ​
// ```javascript
//     const array = [1, 2, 3, 4, 5, 6]
//     getSumOfArray(array) // 21
// ```
// function getSumOfArray(array, x){
    
//     if(array.length === 0) return 0  
//     return array[x] + getSumOfArray(array, x + 1);
// }

// const getSumOfArray = (array) => {
//     n ||= 0;
//     if (n === array.length) {
//     return 0;
//     } else {
//     return array[n] + sum(array, n + 1);
//     }
    
// } 
const getSumOfArray = (arr) => {
    if (arr.length === 0) return 0;
    console.log(arr)
    return   getSumOfArray(arr.splice(1)) + arr [0];
};

console.log(getSumOfArray([1, 2, 3, 4, 5, 6]));

// ## 2.2
// ​
// - Schreiben Sie eine Funktion reverse, die einen string als Parameter erhält und den string umgekehrt zurückgibt.
// ​
// ```javascript
//     const hello = "hello world"
//     reverse(hello) // dlrow olleh
// ```
// function reverse(str){
//     return str.split('').reverse().join('');
// }

function reverse(str){
    if (str.length === 0) return "";
    console.log(str)
    return reverse(str.slice(1)) + str.charAt(0);
}
console.log(reverse("hello world"));

const reverseString = (str) => {
    if (str.length === 1) return str;
    return (
    str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1))
    );
    }; 
// function bigWordInString(str){
//     if(str.length === 0) return 0;
//     // if(str.charAt(0).includes("W")) return str.charAt(0);
//     return  bigWordInString(str.charAt(0).includes("W")) + str.slice(1);
// };

// console.log(bigWordInString("hello World"));
 