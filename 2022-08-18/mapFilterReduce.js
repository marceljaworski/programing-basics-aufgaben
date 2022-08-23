// # Map, Filter, Reduce
// ​
console.log("#### 1. Gesamtbestellungen abfragen")
// ​
// -   Berechne die Gesamtzahl der Bestellungen.
// ​

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
];
const gesamtzahl = orders.reduce((a, b) => a + b.amount, 0);

console.log(gesamtzahl);

console.log("#### 2. Inkrementieren um 1")
// ​
// ```javascript
 const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// ```
// ​
// -   Erstellen Sie eine Funktion, die jedes Element in `arrayOfNumbers` um 1 erhöht. Geben Sie das neue Array von modifizierten Elementen zurück.
function increment (arr){
    return arr.map(x => x + 1);
};
// const neueArray = arrayOfNumbers.map(x => x + 1);
console.log(increment(arrayOfNumbers));

console.log("#### 3. Gerade Zahlen filtern")
// ​
// -   Erstellen Sie eine Funktion namens filterEvens, die ein Array filtert und nur gerade Zahlen zurückgibt. Die Funktion sollte ein Array von Zahlen als Argument nehmen und keine Schleife verwenden.
// ​
// -   Beispiele:
// ​
// ```javascript
const filterEvens1 = [1, 2, 3, 11, 12, 13]; //returned [2,12]
const filterEvens2 = [22, 2, 31, 110, 6, 13]; //returned [22,2,110,6]
// ```
function filterEvens(arr){
    return arr.filter(item => item % 2 === 0);
};
// const filterEvens = filterEvens1.filter(item => item % 2 === 0);

console.log(filterEvens(filterEvens1));

console.log("#### 4. Freunde filtern") 
// ​
// -   Erstelle eine Funktion, die ein übergebenes Array nach einem "Suchbefehl" filtert.
// ​
// -   Beispiele
// ​
// ```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, "ka")); // ["Rika"];
// console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];
// ```
const freundeFiltern = (arr) => {
    return arr.filter((name) => name.includes("e")).map((name) => name[0].toUpperCase() + name.substring(1));
};

// const filtered = friends.filter(name => {if(name.includes("a")) return friends.map((name) => name[0].toUpperCase() + name.substring(1));});

console.log(freundeFiltern(friends));

console.log("#### 5. Summe")
// ​
// -   Schreiben Sie eine Funktion namens sum, die die Methode reduce verwendet, um ein Array von Zahlen zu summieren.
// ​
// -   Beispiele:
// ​
// ```javascript
const sum =[1, 2, 3, 4, 5]; //gibt 15 zurück
// sum([6, 7, 7]); //liefert 20
// ```

const sumTotal = sum.reduce((a, b) => a + b, 0);

console.log(sumTotal);

console.log("#### 6. Quadratwurzel")
// ​
// -   Schreibe eine Funktion die ein Array aus Numbers als Parameter erhält. Finde für jede Zahl die Quadratwurzel und gebe das neue Array zurück.

const quadratwurzel = sum.map((num) => num * num);

console.log(quadratwurzel);