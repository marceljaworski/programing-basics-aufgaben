// Wir haben die folgende Funktion erhalten, die wir für zwei Aufträge verwenden wollen.
// Die Funktion selbst dürfen wir nicht verändern, aber beliebig oft ausführen.

// Wichtig:
// Unsere zwei Aufträge sollen mit beliebig vielen Zufallszahlen funktionieren.
// Wir müssen daher darauf achten, dass unser Algorithmus mit unterschiedlichen Mengen arbeiten kann.

function getRandomNumbers(amount) {
    const numbers = Array();

    for (let i = 0; i < amount; i++) {
        numbers.push(parseInt(Math.random() * 100));
    }

    return numbers;
}


// Beispiel: gib 10 Zufallszahlen aus und speichere sie in der Variable randomNumbers
const randomNumbers = getRandomNumbers(100);
console.log(randomNumbers);

// --------------------------------------------------------------------------
// 1. Losung
const unter50 = randomNumbers.filter(element => element < 50); 
console.log(`Es gibt ${unter50.length} Zahlen unter 50`);

// 2. Losung
console.log(`Zahlen unter 50: `, unter50);

const grosserGleich50 = randomNumbers.filter(element => element >= 50); 

console.log(`Zahlen größer oder gleich 50: `,grosserGleich50);


// 1. Gib die Anzahl der Zahlen unter 50 aus.
// Gib zur Kontrolle auch das Array der Zufallszahlen aus.

// Beispiel:
// getRandomNumbers(5) => [1, 59, 40, 50, 99]
// Ausgabe:
// Es gibt 2 Zahlen unter 50.

// Teste deinen Algorithmus mit den Anzahlen 10, 20, 100 und beliebig vielen weiteren.

//--------------------------------------------------------------------------

// 2. Gib zwei Arrays aus: Eines mit den Zahlen unter 50, und eines mit den Zahlen größer oder gleich 50.
// Gib zur Kontrolle auch das Array der Zufallszahlen aus.

// Beispiel:
// getRandomNumbers(5) => [1, 59, 40, 50, 99]
// Ausgabe:
// Zahlen unter 50: [1, 40]
// Zahlen größer oder gleich 50: [59, 50, 99]


// Teste deinen Algorithmus mit den Anzahlen 10, 20, 100 und beliebig vielen weiteren.

//Alternative Losung.. Ella`s Losung
let counter = 0;
let grosser50 = [];
let kleiner50 = [];
for (let i = 0; i < randomNumbers.length; i++){
    if (randomNumbers[i] < 50){
        counter++;
        kleiner50.push(randomNumbers[i]);
    } else {
        grosser50.push(randomNumbers[i]);
    }
}
//console.log(`Es gibt ${counter} Zahlen unter 50`);
//console.log(` Zahlen unter 50: ${kleiner50}`);
//console.log(`Zahlen grosser oder gleich 50: ${grosser50}`)