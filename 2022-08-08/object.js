// Um Newsletter zu versenden, benötigen wir einige Daten unserer User. Am wichtigsten ist natürlich die Email-Adresse, aber auch Vor- und Nachnamen für die Anrede sollen gespeichert werden. Noch dazu kann jeder User eine Liste mit Interessensgebieten angeben (Musik, IT, Sport...), um spezielle Newsletter zu erhalten.
// 1. Erstelle eine Übersicht mit unseren Usern. Wende hier dein Wissen über Objekte an, um eine möglichst effiziente Datenstruktur zu erreichen.
// 2. Beim Aufruf des Skripts soll eine Ausgabe erzeugt werden, die in etwa so aussieht:
// "Peter Müller ist mit der Adresse petermueller@web.de registriert und erhält Newsletter zu den Themen Sport und Kochen.
// Sarah Schmidt ist mit der Adresse sarah@schmidt.de registriert und erhält Newsletter zu den Themen Musik, IT und Reisen.
// Zusatzaufgaben:
// 3. Berücksichtige den Fall, dass ein User kein Interessensgebiet angegeben hat und formuliere die Ausgabe hierfür passend um.
// 4. Nimm noch ein Registrierungsdatum mit auf und lass es ebenfalls ausgeben ("... ist mit der Adresse x seit y registriert...")

const kunde1 = {
    nachname: `Underwood`,
    vorname: `Raja`,
    email: `pellentesque.tincidunt.tempus@outlook.org`,
    interesse: [ "Musik", "IT", "Sport"]
}
const kunde2 = {
    nachname: `Bennett`,
    vorname: `Owen`,
    email: `aliquet@protonmail.net`,
    interesse: [ "Programmieren", "Nachrichten", "Aktien"] 
}
const kunde3 = {
    nachname: `Conway`,
    vorname: `Amery`,
    email: `erat.neque.non@google.ca`,
    interesse: [ "Reisen", "Festivals"] 
}
const kunde4 = {
    nachname: `Clay`,
    vorname: `Lillian`,
    email: `eadipiscing.elit@aol.couk`,
    interesse: [ "Autos", "It"] 
}
const kunde5 = {
    nachname: `Berg`,
    vorname: `Nicholas`,
    email: `nullam.feugiat@yahoo.net`,
    interesse: [] 
}
function ausgabe (kundeNummer){
    
    if(kundeNummer.interesse.length > 1){
        kundeNummer.interesse.splice(kundeNummer.interesse.length -1, 0, `und`)
    }
    return`${kundeNummer.nachname} ${kundeNummer.vorname} ist mit der Adresse ${kundeNummer.email} registriert und erhält Newsletter zu den Themen ${kundeNummer.interesse.length > 0? kundeNummer.interesse.join(" ") : `kein Interessensgebiet angegeben`}`
}
console.log(ausgabe(kunde5))
