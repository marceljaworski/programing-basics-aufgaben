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
    aufgaben : [
        {
            aufgabe : `frustuckMachen`,
            erledigt : false,
        },
        {
            aufgabe : `einkaufenGehen`,
            erledigt : false,
        },
        {
            aufgabe : `pflanzenGiessen`,
            erledigt : false,
        },
    ],
    aufgabeErledigen(index) {
        if(this.aufgaben[index].erledigt) return console.error(`Die Aufgabe ${this.aufgaben[index].aufgabe} wurde erledigt.`);
        this.aufgaben[index].erledigt = true;
    },
    // frustuckMachen() {
    //     if(this.aufgaben[0].erledigt) return console.error("Die Frustuck wurde schon vorbereitet");
    //     this.aufgaben[0].erledigt = true;
    // },
    // einkaufenGehen: function () {
    //     if(this.aufgaben[1].erledigt) return console.error("Die Einkauf wurde schon gekauft");
    //     this.aufgaben[1].erledigt = true;
    // },
    // pflanzenGiessen() {
    //     if(this.aufgaben[2].erledigt) return console.error("Die Pflanzen wurden schon gegossen");
    //     this.aufgaben[2].erledigt = true;
    // },
};
todo.aufgabeErledigen(0)
todo.aufgabeErledigen(1)

// console.log(todo)
// todo.frustuckMachen()
// console.log(todo)
// todo.frustuckMachen()
// console.log(todo)

// todo.einkaufenGehen()
// console.log(todo)
// todo.einkaufenGehen()
// console.log(todo)

// todo.pflanzenGiessen()
// console.log(todo)
// todo.pflanzenGiessen()
// console.log(todo)

todo.aufgaben.push({
    aufgabe : `rechnungenBezahlen`,
    erledigt : false,
},);

// console.log(todo);
// todo.rechnungenBezahlen = function () {
//     if(this.aufgaben[3].erledigt) return console.error("Rechnungen wurden schon bezahlt");
//     this.aufgaben[3].erledigt = true;
// }
console.log(todo);

todo.check = function () {
    zuErledigen = this.aufgaben.filter(element => !element.erledigt);
    // console.log(zuErledigen)
    aufgabeZuErledigen = zuErledigen.map(element => element.aufgabe);
    // console.log(aufgabeZuErleding)
    // console.log(Object.values(zuErledigen));
    if(zuErledigen.length > 0) return console.log(`es sind noch ${zuErledigen.length} Aufgaben zu erledigen: ${aufgabeZuErledigen.join(`, `)}`);
    return console.log("alle Aufgaben sind erledigt");
}
todo.check()
