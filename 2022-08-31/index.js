// # Aufgabe 1
// ​
// [Englische Version](https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj)
// ​
// Erstellen Sie eine Funktion, die true zurückgibt, wenn das erste Array im zweiten verschachtelt werden kann.
// ​
// arr1 kann innerhalb von arr2 verschachtelt werden, wenn:
// ​
// -   arr1's kleinste Zahl größer ist als arr2's kleinste Zahl.
// -   arr1's größte Zahl kleiner ist als arr2's größte Zahl.
// ​
// ## Beispiele:
// ​
// ```js
// ​
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// ​
// canNest([3, 1], [4, 0]) ➞ true
// ​
// canNest([9, 9, 8], [8, 9]) ➞ false
// ​
// canNest([1, 2, 3, 4], [2, 3]) ➞ false
// ​
// ```

// function canNest (a, b){
    
//     if ( Math.min(...a) > Math.min(...b) && Math.max(...a) < Math.max(...b)){
//         return true;
//     }else{
//         return false;
//     }
// }
const canNest = ((a, b) => Math.min(...a) > Math.min(...b) && Math.max(...a) < Math.max(...b)? true : false );

console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));
