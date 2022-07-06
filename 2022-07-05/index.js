//** 1. Entscheidungshilfe
//Entscheidungen sind nicht immer einfach. Oftmals stehen wir vor zwei Möglichkeiten und wissen nicht, welche wir wählen sollen. Wäre es nicht großartig, wenn wir ein kleines Programm dafür hätten, was uns diese schwierige Aufgabe abnimmt?
//Entwickle ein Programm, das uns ein "Ja!" oder "Nein!" ausgibt, wenn wir es ausführen. Die Antwort soll dabei zufällig gewählt werden.

const x = Math.random();
if (x < 0.5) {
  console.log("Ja");
} else {
  console.log("Nein");
}

const result2 = (x < 0.5) ? "Ja" : "Nein"// ternary operator
console.log(result2)

//Lasst uns würfeln! Ein sechsseitiger Würfel wird für viele Brettspiele benötigt. Schreibe ein Programm, welches für uns würfelt. Es soll zufällig eine Augenzahl zwischen 1 und 6 ausgeben.
//Bei einer 6 soll außerdem die Meldung erscheinen, dass man noch einmal würfeln darf.

const wurfelZahl = Math.floor(Math.random() * 6 + 1);
if (wurfelZahl === 6) {
  console.log(
    "Du hast die",
    wurfelZahl,
    "geworfen, du darfst noch einmal würfeln"
  );
} else {
  console.log("Du hast die ", wurfelZahl, "gewurfelt");
}