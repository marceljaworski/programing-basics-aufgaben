// # Bankkonto
// ## Aufgabenstellung
// Erstelle ein Objekt lege es in einer Variable namens `bankkonto` ab. Das Objekt soll folgende Eigenschaften haben:
// -   `kontostand`, eine `Number` die den aktuellen Kontostand enthält.
// -   `iban`, ein `String` mit der IBAN des Bankkontos.
// -   `bankname`, ein `String` mit dem Namen der Bank.
// -   `kontoinhaber`, ein `String` mit dem Vor- und Nachnamen des Kontoinhabers
// Außerdem soll das Bankkonto folgende Methoden besitzen:
// -   `abheben`, eine Methode die als Parameter einen Betrag x erhält und ihn vom Kontostand abzieht. Die Methode soll außerdem auf der Konsole ausgeben: `x€ wurde erfolgreich abgehoben. Der neue Kontostand ist y€`
// -   `einzahlen`, eine Methode die als Parameter einen Betrag x erhält und ihn zum Kontostand addiert. Die Methode soll außerdem auf der Konsole ausgeben: `x€ wurde erfolgreich eingezahlt. Der neue Kontostand ist y€`
// - `zeigInfo`, eine Methode ohne Parameter, welche auf der Konsole folgenden String ausgibt: `Dies ist eine Konto der x Bank. Die IBAN dieses Kontos lautet y.`
// ## Bonus
// Erweitere die Methode `abheben` sodass sie den Kontostand nicht verändert und ausgibt: `x€ konnte nicht abgehoben werden.`, falls der Kontostand nicht ausreicht.

const bankkonto = {
    kontostand : 200,
    iban : "DE123456789012345",
    bankname : 'Sparkasse Regensburg',
    kontoinhaber : "Mustermann Max",

    abheben: function (betrag){
        if(this.kontostand<betrag){
            console.log(`${betrag}€ konnte nicht abgehoben werden.`);
        }else{
            this.kontostand = this.kontostand - betrag;

            console.log(`${betrag}€ wurde erfolgreich abgehoben. Der neue Kontostand ist ${y}€`);
        }    
    },
    einzahlen: function (betrag){
        this.kontostand  = this.kontostand + betrag;
        
        console.log(`${betrag}€ wurde erfolgreich eingezahlt. Der neue Kontostand ist ${y}€`);
    },
    zeigInfo: function (){
        console.log(`Dies ist eine Konto der ${this.bankname} Bank. Die IBAN dieses Kontos lautet ${this.iban}.`);
    },
};

bankkonto.abheben(1000);