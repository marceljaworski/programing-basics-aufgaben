function sagHalloZu(name){
    console.log(`Hallo ${name}`);
}

sagHalloZu("Marcel");
sagHalloZu("Marvin");

function multiply(zahl1, zahl2){
    console.log('multiply', zahl1 * zahl2);
}

multiply(2, 3);
multiply(10, 3);

function addiere(zahl1, zahl2){
    console.log("addiere", zahl1, zahl2);
    console.log("addiere",zahl1 + zahl2);
}

addiere(2);
addiere(100, 10);

//return
function berechneMehrwertSteuer(preis){
    const mehrwertsteuer = preis * 0.19;
    return mehrwertsteuer;
}

console.log(berechneMehrwertSteuer(10));

const preisBanane = 2.39;
const steuerBanane = berechneMehrwertSteuer(preisBanane);
console.log("Steuer Banane: ", steuerBanane);

//Aufgabe 1:
//Deklariere eine Funktion mit dem Namen istGeradeZahl, welche einen Parameter zahl erhält und einen Boolean zurück gibt. Der Boolean soll true sein wenn die Zahl gerade ist und false wenn sie nicht gerade ist. Führe zum Schluss den folgenden Code aus und überprüfe dein Ergebnis:

function istGeradeZahl(zahl){
    return zahl % 2 === 0;
    //return geradeZahl;
    //if (zahl % 2 === 0) {
    //    return true;
    //} 
    //return false;
}
console.log(istGeradeZahl(3),"soll false sein");
console.log(istGeradeZahl(10),"soll true sein");
console.log(istGeradeZahl(7),"soll false sein");
console.log(istGeradeZahl(40),"soll true sein");

