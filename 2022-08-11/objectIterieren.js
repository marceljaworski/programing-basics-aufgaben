// Objects: Teil 1
// Bitte drucke jede deiner Antworten auf der Konsole aus.
// 1. Objekt Person. Erstelle ein Objekt namens person. Führe eine Schleife durch das Objekt und drucke sowohl die Eigenschaft als auch den Wert des Objekts aus.
const person = {
    vorname: `Marcel`,
    alter: 36,
    beruf: `WebDeveloper`,
}
for( const key in person){
    console.log(key);
    console.log(key[person]);
   
}

// 2. Get Values. Erstelle eine Funktion, die ein Array mit allen Werten der Eigenschaften eines Objekts zurückgibt.
// Beispiele:
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
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
  city: "Paris"
}
console.log(`${person2.firstName} ${person2.lastName} is a ${person2.age} year old ${person2.job} driver in ${person2.city}`);
// Beispiel für die erwartete Ausgabe “Michael Smith is a 20 year old driver in Paris”.
// Bonusfragen
// 1. Konvertiere Schlüssel und Werte in ein Array. Erstelle eine Funktion, die ein Objekt in ein Array aus Schlüsseln und Werten umwandelt.
// Beispiele:
const object1 = {
  A: 1,
  B: 2,
  C: 3
}
function objectToArray(object){
    for(element in object){
        return Object.keys(object)
        
    }
    return Object.values(object)

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
let first = {firstName: "John"}
let last = {lastName: "Smith"}

function verschmelzen(a, b){
    const object2 = {};
    object2.push(a);
    object2.push(b);
    return object2;

    
}
console.log(verschmelzen(first, last))

// Expected output:
// {firstName: "John", lastName: "Smith"}
// Extra Credit: Was passiert, wenn du zwei Objekte mit denselben Eigenschaftswerten zusammenführst? Erwartet ihr beim Zusammenführen dieser beiden Objekte, dass ihr eines oder beide der ursprünglichen Objekte verändert? Warum oder warum nicht? Kommentiere deine Antworten.
// 4. Tausche Schlüssel und Werte. Erstelle eine Funktion, um eine Kopie eines Objekts zu erhalten. Die Kopie muss die Schlüssel und Werte vertauschen.
// Beispiel:
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// Erwartete Ausgabe:
// {John: "name", teacher: "job"}
// 5. Rückgabe von Schlüsseln und Werten. Schreibe ein Programm, das ein Objekt annimmt und ein Array zurückgibt, das zwei Arrays enthält: eines für die Schlüssel des Objekts und das andere für die Werte des Objekts.
// Beispiele:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]