// # Das Kassiererproblem 
// ​
// Implementiere eine Funktion `calculateChange`, die einer Kassiererin hilft, den Kunden angemessenes Wechselgeld zu geben. Das Programm soll die Menge an Scheinen und Münzen für das Wechselgeld des Kunden zurückgeben. `calculateChange` erhält zwei Parameter. 1. price und 2. amountPaid
// ​
// ​
// ​
// Beispiel: Wenn der Preis 3,75 € beträgt und der bezahlte Betrag 50 €, dann sollte der Kunde 46,25 € Wechselgeld zurückbekommen. 
// * Die erwartete Ausgabe sollte sein: 
// * 2 x 20 € // 2 Zwanzig-Euro-Scheine
// * 1 x 5 € // 1 Fünf-Euro-Schein
// * 1 x 1 € // 1 Euro
// * 1 x 0,2 € // 1 Zwanzig-Cent-Münze
// * 1 x 0,05 € // 1 Fünf-Cent-Münze
// ​
// ```js
// calculateChange(3.75, 50) // returns: 2 x 20 €, 1 x 5 €, 1 x 1 €, 1 x 0,2 €, 1 x 0,05 €
// ```
// ​
// Beispiel: Preis: 4,50 €, Bezahlter Betrag: 20 €, Wechselgeld: 15.50
// * Erwartete Ausgabe: 
// * 1 x €10
// * 1 x €5
// * 1 x €0.5
// ​
// ```js
// calculateChange(4.5, 20) // returns: 1 x 10 €, 1 x 5 €, 1 x 0.5 €
// ```
// ​
// * Anmerkungen
// * Enthält Ausgaben für Ausnahmen, z. B. Preis: €4, bezahlter Betrag: €3. 

// function calculateChange(price, amountPaid) {
//     const moneyChange = amountPaid - price;
//     return moneyChange;

// }
// console.log(calculateChange(4.5, 20));
function calculateChange(price, amountPaid) {
    let moneyChange = (amountPaid - price) * 100;
    console.log(`Change:${moneyChange/100}`);
    
    var changeAmount = {};
    const cointypes = [
    "fifty",
    "twenty",
    "ten",
    "Five",
    "two",
    "one",
    "halb",
    "twentyCent",
    "tenCent",
    "fiveCent",
    "oneCent"
    ];
    const coinvalues = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 1];

    for (let i = 0; i < coinvalues.length; i++) {
        var amount = Math.floor(moneyChange / coinvalues[i]);
        // console.log(amount)

        if (amount > 0) {
            changeAmount[cointypes[i]] = amount;
        
            moneyChange = moneyChange % coinvalues[i];
            // console.log("moneyChange" + moneyChange)
        }
    }
    return changeAmount;
    }
    // console.log(calculateChange(5, 25)); 
    
    console.log(calculateChange(3.75, 50)); 

    console.log(calculateChange(4.5, 20)); 




    
    
    // function count (string) { 
    //     // The function code should be here
    //     const rezult = string.split("").reduce((acc,ell)=>{
    //     if(acc[ell]===undefined)acc[ell]=0
    //     acc[ell]+=1
    //     return acc
    //     },{})
        
    //     return rezult
    //     } 