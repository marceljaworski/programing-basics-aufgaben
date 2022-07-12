//Switch

const tag = "Sonntag";

switch (tag) {
    case "Montag":
        console.log("Montag");
        break;
    case "Dienstag":
        console.log("Dienstag");
        break;  
    case "Mittwoch":
        console.log("Mittwoch");
        break;  
    case "Donnerstag":
        console.log("Donnerstag");
        break;
    case "Freitag":
        console.log("Freitag");
        break;  
    case "Samstag":
        console.log("Samstag");
        break;  
    default:
        console.log("Sonntag");         
}   

//** For Schleifen
// Start   ;  check  ; danach
//for(let i =0; i <= 10; i++){
//    console.log(i);
//}

//* Break and continue
//for (let j = 0; j <= 100; j++){
//    console.log("break beispiel:", j);
//    if (i===5) break;
//}

//for (let k = 0; k <= 10; k++){
//    console.log("break beispiel:", k);
//    if (k===5) continue;    
//}

//Teil 1:
//Du bist für die Implementierung eines Warenkorb-Systems zuständig. Ziel ist es dem Nutzer des Onlineshops das teuerste Produkt, das günstigste Produkt und die Gesamtkosten für alle Produkte anzuzeigen.
//Schreibe einen Algorithmus der für folgenden Input:
//const cost = [2.39, 13.99, 4.19, 59.99, 1.99];
//const productNames = ["Zahncreme","Tofu", "Müsli", "Toaster", "Kaugummi"];
//Folgenden Output auf der Konsole anzeigt:
//"Das teuerste Produkt ist: Toaster"
//"Das billigste Produkt ist: Kaugummi"
//"Alle 5 Produkte zusammen kosten: 82,55€"
//Info: Runde alle Preise auf zwei Nachkommastellen.
//Bonus:
//Jetzt besteht der input aus drei Arrays. Zusätzlich zu den Preisen und den Produktnamen kommt jetzt noch ein Array amounts mit der Anzahl der jeweiligen Produkte.
//const amounts = [4, 1, 2, 1, 3];
//Die Zahncreme wird also 4 mal gekauft. Der Tofu 1 mal und so weiter.
//Passe den Output von oben an sodass die Gesamtanzahl an Produkten und der Gesamtpreis stimmen. (bearbeitet) 

const cost =  [2.39, 13.99, 4.19, 59.99, 1.99];
const productNames = ["Zahncreme","Tofu", "Müsli", "Toaster", "Kaugummi"];
const teuerste = Math.max(2.39, 13.99, 4.19, 59.99, 1.99);
teuersteProdukt = productNames.slice (3, 4);
console.log(`Das teuereste Produkt ist: ${teuersteProdukt} und costet ${teuerste}$`)
const billigste = Math.min(2.39, 13.99, 4.19, 59.99, 1.99)
billigsteProdukt = productNames.slice (4, 5);
console.log(`Das billigste Produkt ist: ${billigsteProdukt} und costet ${billigste}$`);

const zahnCreme = +cost.slice(0, 1).join();
const tofu = +cost.slice(1, 2).join();
const musli = +cost.slice(2, 3).join();
const toaster = +cost.slice(3, 4).join();
const kauGummi = +cost.slice(4, 5).join();

const plusResult = zahnCreme + tofu + musli + toaster + kauGummi;
console.log(`Alle 5 Produkte zusammen kosten: ${plusResult}$`);