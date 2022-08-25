// Du bist Bootsbauer und entwirfst eine neue Art von Yacht.
// Erstelle eine Klasse Yacht die folgende Eigenschaften enthält:
// farbe (string), gewichtInKg (number), ps (number), name (string), schlafzimmer (number), badezimmer (number), hatEinBeiboot (boolean)
// Außerdem soll die Klasse drei Methoden erhalten:
// start() -> Soll auf der Konsole drucken: “Die Yacht <name> ist gestartet”
// anlegen() -> Soll auf der Konsole drucken: “Die Yacht <name> legt an”
// ablegen() -> Soll auf der Konsole drucken: “Die Yacht <name> legt ab”
// Erstelle drei Instanzen deiner Yacht mit verschiedenen Eigenschaften.

class Yacht {
    constructor (farbe, gewichtInKg, ps, name, schlafzimmer, badezimmer, hatEinBeiboot, datum){
        this.farbe = farbe;
        this.gewichtInKg = gewichtInKg;
        this.ps = ps;
        this.name = name;   
        this.schlafzimmer = schlafzimmer;
        this.badezimmer = badezimmer;
        this.hatEinBeiboot = hatEinBeiboot;
        
    }      
    start() {
        return `Die Yacht ${this.name} ist um ${new Date().getHours()} Uhr gestartet am `;
    }
    anlegen() {
        return `Die Yacht ${this.name} legt an`;
    }
    ablegen() {
        return `Die Yacht ${this.name} legt ab`;
    }
}


const marcelYacht = new Yacht("Turkis", 3000, 9200, "Amazonas", 2, 1, true);
console.log(marcelYacht);
console.log(marcelYacht.start());
console.log(marcelYacht.anlegen());
console.log(marcelYacht.ablegen());

// const familienYacht = new Yacht("white", 3000, 9200, "Enterprise", 4, 2, true);
// console.log(familienYacht);
// console.log(familienYacht.start());
// console.log(familienYacht.anlegen());
// console.log(familienYacht.ablegen());

// const abenteurYacht = new Yacht("green", 2000, 7200, "Abenteur Lust", 2, 1, true);
// console.log(abenteurYacht);
// console.log(abenteurYacht.start());
// console.log(abenteurYacht.anlegen());
// console.log(abenteurYacht.ablegen());


console.log("-----------------------")
// In dieser Aufgabe geht es darum, die grundlegenden Konzepte von Klassen zu üben. Wir üben die Verwendung der Klasse `Date`, die in JavaScript eingebaut ist!
// ​
// Füge deine Antworten direkt in diese Datei ein.
// ​
// ```js
const now = new Date();
const test = new Date();
// ```
// ​
// 1. Was ist die Variable `now` in dem obigen Code? Es ist die Instanz von new Date.
// 2. Welchen Typ hat die Variable `now`? Object
// 3. Was ist in dem obigen Code die Variable `Date`? Eine classe
// 4. Was ist der Typ von `Date`? Function
// 5. Was erhältst du, wenn du `console.log(now)` eingibst? datum: Jahre, monat und Tag.
// 6. Was erhältst du, wenn du `console.log(Date)` eingibst?  daten typ: Function Date.
// 7. Was erhältst du, wenn du `console.log(new Date())` eingibst? datum: Jahre, monat und Tag.
// 8. Ist `now` wahrheitsgemäß? Ja. Now ist Truthy
// 9. Was bekommst du, wenn du `console.log(now === test)` eingibst? Und warum? False
// 10. Was bekommst du, wenn du `console.log(now === Date)` eingibst? False
// 11. Was bekommst du, wenn du `console.log(now === new Date())` machst? False
// 12. Was bekommst du, wenn du `console.log(new Date() === new Date())` machst? Und warum? False.

console.log(now)
console.log(Date)
console.log(new Date())
console.log(now === test)
console.log(now === new Date())
console.log(new Date() === new Date());


console.log("-----------------------")
// # Bankkonto
// ​
// ## Aufgabenstellung
// ​
// Erstelle eine Klasse Konto. Die Klasse soll folgende Eigenschaften haben:
// ​
// -   `kontostand`, eine `Number` die den aktuellen Kontostand enthält.
// -   `iban`, ein `String` mit der IBAN des Bankkontos.
// -   `bankname`, ein `String` mit dem Namen der Bank.
// -   `kontoinhaber`, ein `String` mit dem Vor- und Nachnamen des Kontoinhabers
// ​
// Außerdem soll die Klasse Konto folgende Methoden besitzen:console.log(ole folgenden String ausgibt: `Dies ist eine Konto der x Bank. Die IBAN dieses Kontos lautet y.`
// ​
// ## Bonus
// ​
// Erweitere die Methode `abheben` sodass sie den Kontostand nicht verändert und ausgibt: `x€ konnte nicht abgehoben werden.`, falls der Kontostand nicht ausreicht.

class Bankkonto {
    constructor(bankname, iban, kontoinhaber, kontostand, kontoauszug) {
        this.bankname = bankname;
        this.iban = iban;
        this.kontoinhaber = kontoinhaber;
        this.kontostand = kontostand;
        this.kontoauszug = [];
    }
   
    abheben(betrag){
        if(this.kontostand<betrag){
            return`${betrag}€ konnte nicht abgehoben werden.`;
        }else{
            this.kontostand = this.kontostand - betrag;
            this.kontoauszug.push(`Am ${now} ${betrag}€ wurde erfolgreich abgehoben. Der neue Kontostand ist ${this.kontostand}€`);

            return`${betrag}€ wurde erfolgreich abgehoben. Der neue Kontostand ist ${this.kontostand}€`;
        }    
    }
    einzahlen(betrag){
        this.kontostand  = this.kontostand + betrag;
        this.kontoauszug.push(`Am ${now}${betrag}€ wurde erfolgreich eingezahlt. Der neue Kontostand ist ${this.kontostand}€`);
        return`${betrag}€ wurde erfolgreich eingezahlt. Der neue Kontostand ist ${this.kontostand}€`;
    }
    zeigInfo(){
        return `Dies ist eine Konto der ${this.bankname} Bank. Die IBAN dieses Kontos lautet ${this.iban}. Am ${now} der Kontostand ist ${this.kontostand}€`;
    }
   
};

const maxKontoInstanz = new Bankkonto("Sparkasse", "DE123456789012345", "Mustermann Max", 80);


console.log(maxKontoInstanz);
console.log(maxKontoInstanz.einzahlen(100));
console.log(maxKontoInstanz.abheben(300));
console.log(maxKontoInstanz.abheben(80));
console.log(maxKontoInstanz.zeigInfo());
console.table(maxKontoInstanz.kontoauszug);
