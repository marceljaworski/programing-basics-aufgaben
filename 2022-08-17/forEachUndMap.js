// # forEach() und map()

// **1.** Schreiben Sie eine Funktion namens `doubleValues`, die ein Array akzeptiert und ein neues Array zurückgibt, in dem alle Werte verdoppelt sind.

// Beispiele:
// ```
const doubleWerte = [1,2,3]; // [2,4,6]
// doubleWerte([5,1,2,3,10]) // [10,2,4,6,20]

const doubleValues = (arr)=>{
    return arr.map((element)=> element * 2)
}//seg;unda alternativa

var doubles = doubleWerte.map(function(x){
    return x * 2;
});
console.log(doubles);
// **2.** Schreiben Sie eine Funktion namens `onlyEvenValues`, die ein Array annimmt und ein neues Array zurückgibt, das nur die geraden Werte des Arrays enthält, das der Funktion übergeben wurde.

// Beispiele:
// ```
// nurGeradeWerte([1,2,3]) // [2]
const nurGeradeWerte= [5,1,2,3,10]; // [2,10]
// ```
// var onlyEvenValues = nurGeradeWerte.forEach((element)=>{
//     let gerade = [];
//     if(element % 2 == 0){
//         gerade.push(element)
//     }
//     return gerade;
// });
// console.log(onlyEvenValues)
function onlyEvenValues2(arr){
    let evenArray = [];
    nurGeradeWerte.forEach(function(element){
        if(element%2===0)evenArray.push(element)
    });
    return evenArray;
}
console.log(onlyEvenValues2(nurGeradeWerte));

// **3.** Schreiben Sie eine Funktion namens `showFirs0tAndLast`, die ein Array von Zeichenketten akzeptiert und ein neues Array mit nur dem ersten und letzten Zeichen jeder Zeichenkette zurückgibt

// Beispiele:

// ```js
const showFirstAndLast=['colt','matt', 'tim', 'udemy']; // ["ct", "mt", "tm", "uy"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
// ```
function showFirs0tAndLast (arr){
    return arr.charAt(0)+arr[arr.length-1];
}
var firstLast = showFirstAndLast.map(showFirs0tAndLast);
console.log(firstLast);

// **4.** Schreiben Sie eine Funktion namens "vowelCount", die eine Zeichenkette annimmt und ein Objekt zurückgibt, dessen Schlüssel die Vokale und dessen Werte die Anzahl der Vorkommen des Vokals in der Zeichenkette sind. Diese Funktion sollte Groß- und Kleinschreibung nicht berücksichtigen, so dass sowohl Klein- als auch Großbuchstaben gezählt werden.

// Beispiele:

// ```js
// vowelCount('Elie') // {e:2, i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
// ```
function getVowelsCount(str){
    const vowels = "aeiou";
    let result = {};
    str.toLowerCase().split("").forEach((element)=>{
        if(vowels.includes(element)&& result[element]===undefined){
            result[element] = 0;
        }
        if(vowels.includes(element)){
            result[element] ++ ;
        }
    })
    return result;
};
console.log(getVowelsCount("hALLo kleine Fisch"));

// Addieren der Zahlen aus einer einzigen Zahl
// Erstellen Sie eine Funktion, die eine Zahl als Argument annimmt. Addiere alle Zahlen von 1 bis zu der Zahl, die du an die Funktion übergeben hast. Wenn die Eingabe zum Beispiel 4 ist, sollte die Funktion 10 zurückgeben, weil 1 + 2 + 3 + 4 = 10 ist.
Beispiele:
// addUp(4) //➞ 10
// addUp(13) //➞ 91
// addUp(600) //➞ 180300
// let addUp = (n) => {
//     if (n < 0 || typeof n !== "number") {
//       return "Enter any positive number between 1 and 1000.";
//     } else {
//       let a = 0;
//       let b = 1;
//       for (let i = 0; i < n; i++) {
//         a += b;
//         b += 1;
//       }
//       return a;
//     }
// };
// function addUp(num) {
//     if (num === 1) return 1;
//     return num + addUp(num - 1);
// }
function addUp(n) {
    let z = 0;
    for(let i = 0; i<=n; i++){
      z += i;
    };
    return z;
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));