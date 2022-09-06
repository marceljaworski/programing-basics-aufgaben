// ------
// Wir programmieren uns ein Restaurant! Das Restaurant verfügt über eine Speisekarte, kann geöffnet oder geschlossen werden und führt eine Kasse mit ein wenig Wechselgeld zu Beginn. Über das Geld in der Kasse wird das Personal bezahlt, sobald das Restaurant schließt.
// Benötigt werden außerdem folgende Personengruppen: Gäste, Kellner, Köche (und Barkeeper). Gäste sollen Speisen und Getränke bestellen können, die von Kellnern aufgenommen und an Köche (und Barkeeper) weitergegeben werden. Köche (und Barkeeper) können Bestellungen von Kellnern erhalten und sie zubereiten. Nach der Zubereitung bringen Kellner die Speisen und Getränke zu den Gästen. Nach dem Essen bezahlen Gäste an Kellner. Zum Schluss bekommen Kellner und Köche (und Barkeeper) ihren Lohn.

const getränkeKarte = [
    {getränk : "Limonade", preise : 2}, 
    {getränk :"Bier", preise : 3}, 
    {getränk :"flascheWein", preise : 14}
]
const [pizza, burger, nudeln, suppe, salad, cookies] = speiseKarte
const [limonade, bier, weinflasche] = getränkeKarte
const getSumOfArray = (arr) => {
    if (arr.length === 0) return 0;
    return arr.shift() + getSumOfArray(arr);
};

class Restaurant {
    constructor(speisekarte, name, kasse, geoeffnet, speisekarte, getränkeKarte, bestellungen, mitarbeiter){
        this.speiseKarte = [
            {speise :"Bretzel Pizza", preise : 12},
            {speise :"Bretzel Burger", preise : 10}, 
            {speise :"Bretzel Nudeln", preise : 8},
            {speise :"Bretzel Suppe", preise : 7}, 
            {speise :"Bretzel Salad", preise : 10}, 
            {speise :"Bretzel Cookies", preise : 12}
        ]
        this.name = name;
        this.kasse = 50;
        this.geoeffnet = false;
        this.speisekarte = speisekarte;
        this.getränkeKarte = getränkeKarte;
        this.bestellungen = [];
        this.mitarbeiter = [];
    } 
    mitarbeiterHinzufugen(mitarbeiter) {
        this.mitarbeiter.push(mitarbeiter)
    }
    bestellungRegistrieren(){
        this.bestellungen.push(bestellung);
    }   
    kassieren(bestellung){
        this.kasse += bestellung.preisen.preis;
    }   
    personalBezahlen(){
        const lohn = 60;
        if(this.kasse<) 
    }
    oeffnen(){
        this.geoeffnet = true;
        console.log(`${this.name} Restaurant ist geoffnet. Herzlich Willkommen! `)
    }
    schliessen(){
        this.geoeffnet = false;
        console.log(`${this.restaurantName} Restaurant ist geschlossen. Vielen Dank fur Ihren Besuch! `)
    }
    lohnBehzalen (lohn){
        this.kasse = kasse - lohn * (this.mitarbeiter.length);
    }  
};
// Bestellung
// ------------------------
 class Bestellung {
    constructor(gast, speise){
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
        if (this.zubereitet) return console.error("kann noch nicht serviert ")
        this.serviert = true;
    }
    abrechnen(!this.serviert){ return console.error("kann noch nicht abrechnet werden: ");
    this.abgerechnet = true;
    }
 }
const lohn = 100;


class Gäste {
    constructor (restaurant, kellner, tisch){
        this.restaurant = restaurant;
        this.kellner = kellner;
        this.tisch = tisch;
        this.bestellung = [];
        this.fertigeSpeise = [];
        this.rechnung = ""  ;
    }
    speiseBestellen(speise){
        this.bestellung.push(speise);
        kellner1.bestellung.push(speise);
        console.log(`Gäste: ich sitze am Tisch ${this.tisch} und hätte gern ein ${Object.values(speise)}`)
    }

    getränkeBestellen(){
        Kellner.bestellung.push();  
        this.bestellung.push();
    }
    rechnungAufrufen(){
        this.rechnung = getSumOfArray(this.bestellung.preise)
    }
}
class Kellner { 
    constructor (name, restaurant, tisch){
    this.name = name;
    this.restaurant = restaurant;
    this.tisch = tisch;
    this.bestellung = [];
    this.fertigeSpeise = [];
    this.lohn = 0;
    }
    lohnErhalten(lohn){
        this.lohn += lohn;
    }
    bestellungMitteilen(tisch){
        chefKoch.bestellung.push(this.bestellung)
        console.log(`Keller: Tisch ${tisch} hat ${Object.values(...this.bestellung)} bestellt`)
    }
    essenBringen(){
        gäste1.fertigeSpeise.push(this.fertigeSpeise)

    }
    abkassieren(){

    }
}
class Köche { 
    constructor (name, restaurant){
    this.name = name;
    this.restaurant = restaurant;
    this.bestellung = [];
    this.lohn = 0;
    
    }
    lohnErhalten(lohn){
        this.lohn += lohn;
    }
    bestellungVorbereiten(){
        kellner1.fertigeSpeise.push(this.bestellung)
        console.log(`Köche: This ${Object.values(...this.bestellung)} ist fertig`)
    }   
}
class Barkeeper extends Köche {
}


const restaurantBretzel = new Restaurant(name = `Die heisse Bretzel`, kasse = 120, false, speiseKarte, getränkeKarte);
restaurantBretzel.oeffnen()

speiseKarte.forEach(element => {
    console.log(`Unsere Speisekarte ` + Object.values(element))
});

const kellner1 = new Kellner("Tanja", restaurantBretzel, 1 );
const gäste1 = new Gäste(restaurantBretzel, kellner1, 1)
const chefKoch = new Köche("Kurt", restaurantBretzel)


console.log(`Kellner: Ich bin ${kellner1.name} was wollen Sie bestellen?`)
gäste1.speiseBestellen(pizza) 

kellner1.bestellungMitteilen(1)

chefKoch.bestellungVorbereiten(1)








