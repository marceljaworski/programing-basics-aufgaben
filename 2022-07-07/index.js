/**
* Author: Fantasia
* Projekt: Signup Seite
* Feature: Password Validierung
* Company: Tranzfer
*/
// Password das der Nutzer eingegeben hat
// Zum Testen verändern
let password = "tesjfjt!";
// State Variablen
let isPasswordSafe = password ? true : false;//variable declarieren
let errorMessages = [];//variable richtig declarieren
// Länge check -> Passwort muss mindestens 6 Buchstaben lang sein
if (password.length < 6) {
   isPasswordSafe = false;
   errorMessages.push("Password nicht lang genug");
}
// Sonderzeichen check -> Passwort muss mindestens ein Sonderzeichen enthalten
if (
   !password.includes("!") &&
   !password.includes("$") &&
   !password.includes("%") &&
   !password.includes("&") &&
   !password.includes("+") &&
   !password.includes("#")
 ) {
   isPasswordSafe = false;
   errorMessages.push("Passwort muss Sonderzeichen enthalten");

}
// Bekannte Worte check -> Passwort darf keine bekannten Worte enthalten
if (password.indexOf("password") >=0 || password.indexOf("123456") >=0 ) {
   isPasswordSafe = false;
   errorMessages.push("Passwort darf keine leichten Worte enthalten");
}
// Zum Schluss gibt das Programm aus ob das Passwort sicher ist
else {console.log("Überprüfung abgeschlossen.");}
console.log(
   isPasswordSafe ? "Passwort ist sicher." : "Passwort ist nicht sicher!"
);
if (isPasswordSafe) {
   console.log("Anmeldung kann fortfahren.");
} else if (!isPasswordSafe) {
    console.log(errorMessages);
} else {
   console.log(errorMessages.join(""));
}
