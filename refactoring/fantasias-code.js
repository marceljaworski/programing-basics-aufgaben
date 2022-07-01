/**
* Author: Fantasia
* Projekt: Bankanbindung Sparkasse
* Subprojekt: Senden einer Überweisung
* Company: tranzfer
*/
const API_URL = "api.sparkasse.de/v3/accounts";
const API_key = "lwqdjOI987HHUIaihjaskdh";
const TRANZFER_CUSTOMER_ID = "tranzfer-009";/*Entweder "" oder '' aber nicht gemischt " '*/
let bankname = "Sparkasse";
console.log("Initialisiere Verbindung...");/*Hier fehlt ( ... immer () beides benutzen, nicht nur eins )*/
console.log("Verbindung mit", bankname + " hergestellt");/* variables mussen mit , getrent sein*/
let kunde1 = "Jan Müller";/*biite nich den Name von Variablen mit nummer anfangen. Und nicht vergiss ; semicolon am Ende des Satz.*/
let kunde2 = "Martina Stein";/*biite nich den Name von Variablen mit nummer anfangen.*/
let iban1 = "1234 0000 9908 9999";
let iban2 = "1222 0000 9908 9999";/*bitte nicht den gleich Variablename eingeben*/
let betrag = 23.3;/*zwischen let und betrag fehlt ein lehr zeichnen. Zum Variablen deklarieren braucht immer ein lehr zeichnen zwischen */
console.log("Starte Überweisung");
console.log(`Von ${kunde1} IBAN: ${iban1}`);
console.log("Nach"+kunde2+"IBAN:"+iban2);/*console.log(`Nach "${kunde2}" IBAN: "${iban2}"`)*/
console.log(`Sende Betrag ${betrag}€`);
console.log("Überweisung erfolgreich");
console.log("Transaktionsdauer erfassen")//Wir wiessen nicht ob es ist ein kommentar or? /Transaktionsdauer erfassen
bankname = "Sparkasse Berlin";
let transaktionsDauer;//const transaktionsDauer;/* const Variable darf nicht ohne wert lassen
transaktionsDauer = 100;
console.log("Beende Verbindung...");
console.log("Verbindung mit "+bankname+" beendet");//console.log('Verbindung mit '+bankname+" beendet");/*Entweder "" oder `` aber nicht gemischt " `*/
console.log("Dauer der Transaktion "+transaktionsDauer+"s");