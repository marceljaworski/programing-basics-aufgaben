// Es ist Montag. Du bist nach einem großartigen Wochenende zurück im Büro, aber dort erwartet dich eine schlechte Nachricht: Fantasia ist krank und die Deadline des Projekts rückt immer näher! Sie hat dir drei Funktionen überlassen, die Benennung ist aber nicht wirklich hilfreich und du musst nun herausfinden, ob und wie sie benutzt werden können.
// - Teste die Funktionen
// - Finde heraus, was sie tun und vor allem: wie sie es tun
// - Schreibe Kommentare in den Code
// - Finde passende Namen für Variablen
// - Bonus: Bestimme die Komplexität der Funktionen
// - Bonus: Gibt es Unterschiede, wenn bestimmte Argumente übergeben werden

// const namen = ["i", "E", "a", "m"];
const numbers = [2, 1, 3, 7, 9]
let countA = 0;
function functionA(array) {
    for (let i = 0; i < array.length; i++) {
       countA ++;//+5
        for (let j = 0; j < array.length - 1 - i; j++) {
        //    countA ++;//+10
            const a = array[j];
            const b = array[j + 1];
            if (a > b) {
                // countA ++
                array[j] = b;
                array[j + 1] = a;
            }
        }
    }
    return array;
}
console.log(`functionA`,functionA( numbers));
// console.log(`functionA`,functionA(namen));

let countB = 0;


function functionB(array) {
    let index;
    for (let i = 0; i < array.length - 1; i++) {
        countB ++;//+4
        index = i;
        for (let j = i; j < array.length; j++) {
            //  countB ++;//+14
            if (array[index] > array[j]) {
                // countB ++;
                index = j;

            }
        }
        if (i !== index) {
            // countB ++;
            const a = array[i];
            const b = array[index];
            array[i] = b;
            array[index] = a;
        }
    }
    return array;
}

console.log(`functionB`,functionB(numbers));
// console.log(`functionB`,functionB(namen));
// funcionC sortiert die Element von den Array, gibt alls ergebnis: fur nummer de grosste value zuerst, fur strings elementen es wird von der alfabet positions sortiert. 
let countC = 0;
function functionC(array) {
    let x;
    
    for (let i = 1; i < array.length; i++) {
        let j = i;
        x = array[i];
        countC ++;//+4
        while (j > 0 && array[j - 1] < x) {
            // countC ++;//+10
            array[j] = array[j - 1];
            j--;
        }
        array[j] = x;
    }
    return array;
}

console.log(`functionC`,functionC(numbers));
// console.log(`functionC`,functionC(namen));
console.log(`A`,countA, `B`, countB,`c`, countC);


function fixTheMeerkat(arr) {
    [letzte, mitte , erste] = arr
    return [erste, mitte, letzte]; 
  }
  console.log(fixTheMeerkat([3, 2, 1]));
