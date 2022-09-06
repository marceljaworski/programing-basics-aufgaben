/*
Wir programmieren uns ein Restaurant! Das Restaurant verfügt über eine Speisekarte, kann geöffnet oder geschlossen werden und führt eine Kasse mit ein wenig Wechselgeld zu Beginn. Über das Geld in der Kasse wird das Personal bezahlt, sobald das Restaurant schließt.

Benötigt werden außerdem folgende Personengruppen: Gäste, Kellner, Köche (und Barkeeper). Gäste sollen Speisen und Getränke bestellen können, die von Kellnern aufgenommen und an Köche (und Barkeeper) weitergegeben werden. Köche (und Barkeeper) können Bestellungen von Kellnern erhalten und sie zubereiten. Nach der Zubereitung bringen Kellner die Speisen und Getränke zu den Gästen. Nach dem Essen bezahlen Gäste an Kellner. Zum Schluss bekommen Kellner und Köche (und Barkeeper) ihren Lohn.
*/


// Restaurant
// ---------------------------------------------------------------------------------
class Restaurant {
    constructor() {
        this.speisekarte = [
            {
                name: "Pizza",
                preis: 12,
            },
            {
                name: "Pasta",
                preis: 9,
            },
            {
                name: "Salat",
                preis: 7,
            },
            {
                name: "Eis",
                preis: 8,
            },
        ];
        this.kasse = 50;
        this.mitarbeiter = [];
        this.geoeffnet = false;
        this.bestellungen = [];
    }

    mitarbeiterHinzufuegen(mitarbeiter) {
        this.mitarbeiter.push(mitarbeiter);
    }

    ueberrascheMich() {
        return this.speisekarte[Math.floor(Math.random() * this.speisekarte.length)];
    }

    bestellungRegistrieren(bestellung) {
        this.bestellungen.push(bestellung);
    }

    bestellungenArchivieren() {
        this.bestellungen = [];
    }

    kassieren(bestellung) {
        this.kasse += bestellung.speise.preis;
    }

    personalBezahlen() {
        const lohn = 60;
        if (this.kasse < this.mitarbeiter.length * lohn) return console.error("Nicht genug Geld in der Kasse, um alle Mitarbeiter zu bezahlen!");
        this.mitarbeiter.forEach(mitarbeiter => {
            mitarbeiter.lohnErhalten(lohn)
            this.kasse -= lohn;
        });
    }

    oeffnen() {
        if (this.mitarbeiter.length <= 0) return console.error("Kann nicht geöffnet werden. Keiner da!");
        this.geoeffnet = true;
    }

    schliessen() {
        if (this.bestellungen.find(bestellung => !bestellung.abgerechnet)) return console.error("Kann nicht schließen, es müssen noch Bestellungen abgerechnet werden!");
        this.personalBezahlen();
        this.bestellungenArchivieren();
        this.geoeffnet = false;
    }
}

// Bestellung
// ---------------------------------------------------------------------------------
class Bestellung {
    constructor(gast, speise) {
        this.gast = gast;
        this.speise = speise;
        this.zubereitet = false;
        this.serviert = false;
        this.abgerechnet = false;
    }

    zubereiten() {
        this.zubereitet = true;
    }

    servieren() {
        if (!this.zubereitet) return console.error("Kann noch nicht serviert werden: Die Bestellung wurde noch nicht zubereitet!");
        this.serviert = true;
    }

    abrechnen() {
        if (!this.serviert) return console.error("Kann noch nicht abgerechnet werden: Die Bestellung wurde noch nicht serviert!");
        this.abgerechnet = true;
    }
}

// Personal
// ---------------------------------------------------------------------------------
class Personal {
    constructor(restaurant) {
        this.restaurant = restaurant;
        this.lohn = 0;
    }

    lohnErhalten(lohn) {
        this.lohn += lohn;
    }
}

// Koch
// ---------------------------------------------------------------------------------
class Koch extends Personal {
    bestellungZubereiten() {
        const bestellung = this.restaurant.bestellungen.find(bestellung => !bestellung.zubereitet);
        if(!bestellung) return console.log("Keine Bestellung mehr zuzubereiten.");
        bestellung.zubereiten();
        console.log(`${bestellung.speise.name} ist fertig!`);
    }
}

// Kellner
// ---------------------------------------------------------------------------------
class Kellner extends Personal {
    bestellungAufnehmen(gast, speise) {
        const bestellung = new Bestellung(gast, speise);
        this.restaurant.bestellungRegistrieren(bestellung)
        console.log(`${speise.name}, kommt sofort, ${gast.name}!`);
    }

    bestellungServieren() {
        const bestellung = this.restaurant.bestellungen.find(bestellung => bestellung.zubereitet && !bestellung.serviert);
        if (!bestellung) return console.log("Keine Bestellung mehr zu servieren.");
        bestellung.servieren();
        console.log("Guten Appetit!");
    }

    bestellungAbrechnen(gast) {
        const bestellung = this.restaurant.bestellungen.find(bestellung => bestellung.gast === gast);
        if (!bestellung) return console.log("Sie haben keine Bestellung mehr offen.");
        restaurant.kassieren(bestellung);
        bestellung.abrechnen();
        console.log(`Vielen Dank für Ihren Besuch, ${gast.name}!`);
    }
}

// Gast
// ---------------------------------------------------------------------------------
class Gast {
    constructor(name, restaurant, kellner) {
        this.name = name;
        this.restaurant = restaurant;
        this.kellner = kellner;
    }

    bestellen(speise) {
        this.kellner.bestellungAufnehmen(this, speise);
    }

    bezahlen() {
        this.kellner.bestellungAbrechnen(this);
    }
}



// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
const restaurant = new Restaurant();

const kellner1 = new Kellner(restaurant);
const koch1 = new Koch(restaurant);

restaurant.mitarbeiterHinzufuegen(kellner1);
restaurant.mitarbeiterHinzufuegen(koch1);


function simuliereTag(restaurant, kellner, koch, tag = 1) {
    console.log();
    console.log("================");
    console.log(`Tag ${tag} - Auf geht's!`);
    console.log("================");
    console.log();

    restaurant.oeffnen();

    const sitzplaetze = Array(parseInt(Math.random() * 25) + 5).fill();
    const gaeste = sitzplaetze.map((_, index) => new Gast(`Gast ${index + 1}`, restaurant, kellner));

    // bestellen
    gaeste.forEach(gast => gast.bestellen(restaurant.ueberrascheMich()));
    // zubereiten
    restaurant.bestellungen.forEach(_ => koch.bestellungZubereiten());
    // servieren
    restaurant.bestellungen.forEach(_ => kellner.bestellungServieren());
    // abrechnen
    gaeste.forEach(gast => gast.bezahlen());

    restaurant.schliessen();

    console.log();
    console.log("================");
    console.log(`Tag ${tag} - Feierabend!`);
    console.log("----------------");
    console.log(restaurant);
    console.log("================");
    console.log();
}

const simulierteTage = 1;
for (let tag = 1; tag <= simulierteTage; tag++) {
    simuliereTag(restaurant, kellner1, koch1, tag);
}
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------



// console.log();
// console.log("================");
// console.log("Auf geht's!");
// console.log("----------------");
// console.log(restaurant);
// console.log("================");
// console.log();

// restaurant.oeffnen();

// const gast1 = new Gast("Gast 1", restaurant, kellner1);

// gast1.bestellen(restaurant.ueberrascheMich());
// koch1.bestellungZubereiten();
// kellner1.bestellungServieren();
// gast1.bezahlen();

// restaurant.schliessen();

// console.log();
// console.log("================");
// console.log("Feierabend!");
// console.log("----------------");
// console.log(restaurant);
// console.log("================");
// console.log();
