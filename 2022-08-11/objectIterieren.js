// Objects: Teil 1
// Bitte drucke jede deiner Antworten auf der Konsole aus.
// 1. Objekt Person. Erstelle ein Objekt namens person. Führe eine Schleife durch das Objekt und drucke sowohl die Eigenschaft als auch den Wert des Objekts aus.
console.log(`1. Objekt Person.-------`)
const person = {
    vorname: `Marcel`,
    alter: 36,
    beruf: `WebDeveloper`,
}
for( const key in person){
    console.log(key,person[key]);
   
}

// 2. Get Values. Erstelle eine Funktion, die ein Array mit allen Werten der Eigenschaften eines Objekts zurückgibt.
// Beispiele:
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
console.log(`2. Get Values.-------`)
console.log(Object.values(person))
// Erwartete Ausgabe:
// ["tea", "coffee", "milk"] 
// 3. Füge eine Methode hinzu. Erstelle ein Objekt und füge eine Methode zu diesem Objekt hinzu, die die Werte der Objekte in einer Zeichenkette ausgibt.
// Beispiel
let person2 = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris",
  printInfo: function(){
    return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} driver in ${this.city}`

  }
}
console.log(`printInfo`, person2.printInfo());
// Beispiel für die erwartete Ausgabe “Michael Smith is a 20 year old driver in Paris”.
// Bonusfragen
console.log(`1. Konvertiere Schlüssel und Werte in ein Array.`)
// 1. Konvertiere Schlüssel und Werte in ein Array. Erstelle eine Funktion, die ein Objekt in ein Array aus Schlüsseln und Werten umwandelt.
// Beispiele:
const object1 = {
  A: 1,
  B: 2,
  C: 3
}
function objectToArray(object){
   
    return Object.entries(object)

}
console.log(objectToArray(object1))
// Erwartete Ausgabe:
// [["A", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 
// Erwartete Ausgabe:
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 
// 2. Eigenschaften auflisten. Erstelle eine Funktion, die ein Array von Eigenschaften eines Javascript-Objekts zurückgibt.
// Beispiel
console.log(`2. Eigenschaften auflisten.`)
let student = {
  name: "Mike", 
  class: "4A", 
  course: "English"
}
console.log(Object.keys(student));
// Erwartete Ausgabe:
// ["name", "class", "course"]
// 3. Verschmelzen. Erstelle eine Funktion, die zwei Objekte als Parameter nimmt und sie zu einem neuen Objekt zusammenführt.
// Beispiel
console.log("combined objects --------")
let first = {firstName: "John"}
let last = {lastName: "Smith"}

function verschmelzen(a, b){
   let merged ={...a, ...b};
   return merged;
}
console.log(verschmelzen(first, last))

// Expected output:
// {firstName: "John", lastName: "Smith"}
// Extra Credit: Was passiert, wenn du zwei Objekte mit denselben Eigenschaftswerten zusammenführst? Erwartet ihr beim Zusammenführen dieser beiden Objekte, dass ihr eines oder beide der ursprünglichen Objekte verändert? Warum oder warum nicht? Kommentiere deine Antworten.

// 4. Tausche Schlüssel und Werte. Erstelle eine Funktion, um eine Kopie eines Objekts zu erhalten. Die Kopie muss die Schlüssel und Werte vertauschen.
// Beispiel:
console.log(`4. Tausche Schlüssel und Werte`)
let person3 = {
  name: "John", 
  job: "teacher"
}
function tauschWertKey(obj){
    const newPerson = {};
    for (const item in obj){
        newPerson[obj[item]]= item;
    }
    return newPerson
}
console.log(tauschWertKey(person3))
// Erwartete Ausgabe:
// {John: "name", teacher: "job"}
// 5. Rückgabe von Schlüsseln und Werten. Schreibe ein Programm, das ein Objekt annimmt und ein Array zurückgibt, das zwei Arrays enthält: eines für die Schlüssel des Objekts und das andere für die Werte des Objekts.

console.log(`5. Rückgabe von Schlüsseln und Werten.`)
console.log(Object.keys(object1), Object.values(object1));

// Beispiele:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]


// Objects: Teil 2
console.log(`Objects: Teil 2 -------------------`)
console.log(`1. Überprüfe, ob eine Zahl innerhalb eines bestimmten Bereichs liegt.`)
// 1. Überprüfe, ob eine Zahl innerhalb eines bestimmten Bereichs liegt. Erstelle eine Funktion isWithinRange, die überprüft, ob eine Zahl innerhalb des Bereichs der Eigenschaften min und max eines Objekts liegt. Nimm an, dass min <= max immer wahr ist.
// Beispiele:


function isWithinRange(number, object){
    if( number >= object.min && number <= object.max) return true;
    return false

}

console.log(isWithinRange(4, { min: 0, max: 5 }) )
console.log(isWithinRange(4, { min: 4, max: 5 }) )
console.log(isWithinRange(4, { min: 6, max: 10 }))
console.log(isWithinRange(5, { min: 5, max: 5 }) )
console.log(`2. calcMaxScrabbleScore`)
// 2. Scrabble. Erstelle eine Funktion calcMaxScrabbleScore, die bei einem Array von Scrabble-Steinen die maximale Punktzahl zählt, die ein Spieler mit den Steinen in seiner Hand erreichen kann. Beispiel:
const scrabbleHand = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]
function calcMaxScrabbleScore(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i].score;
    }
    return sum;
}
console.log(calcMaxScrabbleScore(scrabbleHand))//; ➞ 28
// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// Hier wäre die maximale Punktzahl des Spielers 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
console.log(`3. Ist es ein leeres Objekt?`)
// 3. Ist es ein leeres Objekt? Erstelle eine Funktion isEmptyObject, die true zurückgibt, wenn ein Objekt leer ist, und false, wenn nicht.

const obj1 = { one: 1, two: 2, three: 3 };
const obj2 = {};

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }
console.log("Is Object 1 Empty? : ", isEmptyObject(obj1));
console.log("Is Object 2 Empty? : ", isEmptyObject(obj2));

// Beispiele:
// isEmptyObject({}) ➞ true
// isEmptyObject({a: 1}) ➞ false
console.log(`4. Buchstaben zählen.`)
// 4. Buchstaben zählen. Erstelle eine Funktion, die die Anzahl der Vorkommen jedes Buchstabens in einer Zeichenkette zählt. Gib ein Objekt mit Schlüssel-Wert-Paaren von Buchstaben und der Anzahl der Vorkommen für jeden Buchstaben zurück.
// Beispiel:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

const tree = "tree"; 
function countLetters (string){
    const countedLetters = {};
    const arr =string.split('')
    for(let i = 0; i<arr.length; i++){
        const letter = arr[i]
        if(countedLetters[letter] == undefined){
            countedLetters[letter]=1;
        }else{
            countedLetters[letter] +=1;
        }
    }
    return countedLetters;
    
}
 // ➞ {t: 1, r: 1, e: 2} 
console.log(countLetters(tree));

// const str = "Water under the bridge" // const letters = {}; // function countLetters(str){ // for (let i = 0; i < str.length; i++) { // const letter = str[i]; // if (letter != " "){ // const letterFrequency = str.split(letter).length-1; // letters[letter] = letterFrequency; // } // console.log(letters); // } // }; // countLetters(str); 

console.log(`5. Kostenloser Versand`)
// 5. Kostenloser Versand. Erstelle eine Funktion, die bestimmt, ob eine Online-Bestellung versandkostenfrei sein soll. Eine Bestellung ist versandkostenfrei, wenn der Gesamtpreis der Artikel 50 € übersteigt.
// Beispiele:
// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

console.log(`6. Programmierobjekt.`)
// 6. Programmierobjekt.
// const programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes"
// };
// Schreibe einen Befehl, der die Sprache “Go” an das Ende des Arrays “languages” anfügt.
// Ändere die Schwierigkeit auf 7.
// Schreibe eine Anweisung mit dem Schlüsselwort delete, um den Schlüssel jokes aus dem Programmierobjekt zu entfernen.
// Schreibe eine Anweisung, um dem Programmierobjekt einen neuen Schlüssel namens “isFun” mit dem Wert “true” hinzuzufügen.
// Durchlaufe in einer Schleife das Array languages und gib alle Sprachen in console.log aus.
// Gib in einer Schleife alle Schlüssel des Programmierobjekts in console.log ein.
// Verwende eine Schleife, um alle Werte des Programmierobjekts zu protokollieren.
// Füge die Methode worthwhile hinzu, die den Wert “Learning the programming languages: JavaScript, Python, Ruby, Go ist lohnend und herausfordernd”, wenn die Schlüssel “isChallenging” und “isRewarding” den Wert true haben.
// Bonus: Erkläre in einem Kommentar, was gedruckt wird, wenn wir eine Objektmethode über die Konsole protokollieren, ohne sie aufzurufen, und warum.
// Bonus:
// Achte darauf, dass kein anderer Code die Eigenschaften des Objekts löschen oder ändern kann.