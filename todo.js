/*
Schreibe ein Objekt, welches Aufgaben enthält und Methoden, mit denen die Aufgaben bearbeitet werden können.
Es soll möglich sein, eine neue Aufgabe hinzuzufügen, eine Aufgabe als erledigt zu markieren und Aufgaben zu löschen.
Außerdem soll man über eine weitere Methode nur unerledigte Aufgaben finden können.
Überlege dir, welche Eigenschaften eine einzelne Aufgabe haben muss, damit man die Methoden anwenden kann.

Beispiele für Aufgaben:

- Einkaufen gehen X
- Wohnung putzen  X
- Essen kochen    X
- Wäsche waschen
- Yaman wecken

*/

const todo = {
    naechsteId: 1,
    aufgaben : [],
    aufgabeHinzufugen(bezeichnung) {
        const aufgabe = {
            id: this.naechsteId,
            aufgabe : bezeichnung,
            erledigt: false,
        };
        this.aufgaben.push(aufgabe);
        this.naechsteId++;
    },
    aufgabeErledigen(index) {
        if(this.aufgaben[index].erledigt) return console.error(`Die Aufgabe ${this.aufgaben[index].aufgabe} wurde erledigt.`);
        this.aufgaben[index].erledigt = true;
    },
    check() {
        zuErledigen = this.aufgaben.filter(element => !element.erledigt);
        // console.log(zuErledigen)
        aufgabeZuErledigen = zuErledigen.map(element => element.aufgabe);
        // console.log(aufgabeZuErleding)
        // console.log(Object.values(zuErledigen));
        if(zuErledigen.length > 0) return console.log(`Es sind noch ${zuErledigen.length} Aufgaben zu erledigen: ${aufgabeZuErledigen.join(`, `)}`);
        return console.log("alle Aufgaben sind erledigt!");
    },
    suchen(suchbegriff) {
        return this.aufgaben.filter(aufgabe => aufgabe.bezeichnung.toLowerCase().includes(suchbegriff.toLowerCase()));
    },
};
todo.aufgabeHinzufugen("frustuckMachen")
todo.aufgabeHinzufugen("einkaufenGehen")
todo.aufgabeHinzufugen("pflanzenGiessen")
todo.aufgabeHinzufugen("rechnungenBezahlen")
todo.aufgabeErledigen(0)
todo.aufgabeErledigen(1)

console.log(todo);


todo.check()


// console.log("Dominiks Losung================================================================")
// const todo = {
//     naechsteId: 1,
//     aufgaben: [],

//     hinzufuegen(bezeichnung) {
//         const aufgabe = {
//             id: this.naechsteId,
//             bezeichnung: bezeichnung,
//             erledigt: false,
//         };
//         this.aufgaben.push(aufgabe);
//         this.naechsteId++;
//     },

//     erledigen(id) {
//         const aufgabe = this.aufgaben.find(aufgabe => aufgabe.id === id);
//         if (!aufgabe) return console.log("Aufgabe nicht gefunden");
//         aufgabe.erledigt = true;
//     },

//     loeschen(id) {
//         const aufgaben = this.aufgaben.filter(aufgabe => aufgabe.id !== id);
//         this.aufgaben = aufgaben;
//     },

//     unerledigteAufgaben() {
//         return this.aufgaben.filter(aufgabe => aufgabe.erledigt === false);
//     },

//     suchen(suchbegriff) {
//         return this.aufgaben.filter(aufgabe => aufgabe.bezeichnung.toLowerCase().includes(suchbegriff.toLowerCase()));
//     },
// };


// console.log("Und die in eine Klasse umgewandelte Version:")
// class Todo {
//     constructor() {
//         this.naechsteId = 1;
//         this.aufgaben = [];
//     }

//     hinzufuegen(bezeichnung) {
//         const aufgabe = {
//             id: this.naechsteId,
//             bezeichnung: bezeichnung,
//             erledigt: false,
//         };
//         this.aufgaben.push(aufgabe);
//         this.naechsteId++;
//     }

//     erledigen(id) {
//         const aufgabe = this.aufgaben.find(aufgabe => aufgabe.id === id);
//         if (!aufgabe) return console.log("Aufgabe nicht gefunden");
//         aufgabe.erledigt = true;
//     }

//     loeschen(id) {
//         const aufgaben = this.aufgaben.filter(aufgabe => aufgabe.id !== id);
//         this.aufgaben = aufgaben;
//     }

//     unerledigteAufgaben() {
//         return this.aufgaben.filter(aufgabe => aufgabe.erledigt === false);
//     }

//     suchen(suchbegriff) {
//         return this.aufgaben.filter(aufgabe => aufgabe.bezeichnung.toLowerCase().includes(suchbegriff.toLowerCase()));
//     }
// };