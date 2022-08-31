console.log("# Aufgabe 1")
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


console.log("# Aufgabe 2")
class Circle { 
    constructor(radius){
        this.radius = radius;
    } 
    getArea() { console.log( Math.PI * Math.pow(this.radius, 2)); }
    getPerimeter() { 
        console.log( (2 * Math.PI) * this.radius); }
}
let circy1 = new Circle(11);

circy1.getArea(); // Should return 380.132711084365

let circy4 = new Circle(4.44);
circy4.getPerimeter(); // Should return 27.897342763877365

console.log("# Aufgabe 3") 


function makePlusFunction(zahl) {
    return number = (number) => {
        return number + zahl
    }
    
}
const plusFive = makePlusFunction(5);

console.log(plusFive(2)); // returns 7
console.log(plusFive(-8)); // returns -3

const plusTen = makePlusFunction(10);

console.log(plusTen(0)); // returns 10
console.log(plusTen(188)); // returns 198


console.log("# Aufgabe 4") 

function colorPatternTimes(array) {
    let arr = [array[0]];
    for (let word of array) {
      if (arr[arr.length - 1] !== word) arr.push(word);
    }
    return arr.length - 1 + array.length * 2;
  }

console.log(colorPatternTimes(["Blue"])) // return 2

console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"])) // return 11
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])) // return 13
console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"])) // return 14