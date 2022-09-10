// # WordRank-Bewertungssystem
// Erstellen Sie eine Funktion, die eine Reihe von Wörtern annimmt und das Wort mit der höchsten Punktzahl zurückgibt. Jeder Buchstabe eines Wortes erhält Punkte entsprechend seiner Position im Alphabet: a = 1, b = 2, c = 3, usw.
// ## Beispiele
// ```js
// wordRank("The quick brown fox.") ➞ "brown"
// wordRank("Nancy is very pretty.") ➞ "pretty"
// wordRank("Check back tomorrow, man!") ➞ "tomorrow"
// wordRank("Wednesday is hump day.") ➞ "Wednesday"
// ```
// ## Anmerkungen
// - Wenn zwei Wörter die gleiche Punktzahl haben, wird das Wort zurückgegeben, das in der ursprünglichen Zeichenkette zuerst vorkommt.
// - Die zurückgegebene Zeichenfolge sollte nur alphabetische Zeichen (a-z) enthalten.
// - Die Groß- und Kleinschreibung muss in der zurückgegebenen Zeichenkette beachtet werden (siehe 4. Beispiel oben).


function wordRank1(str) { 
    let value = 0;
    let letters = str.split("");
    const abc = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let i = 0; i < letters.length; i++){
        for (let j = 0; j < abc.length; j++){
            if (letters[i] == abc [j]){
                value += abc.indexOf(letters[i]);
            }
        }
    }
    return value;

}
console.log("======")

function satzRank(string){
    let words = string.split(" ");
    let values = words.map(word => wordRank1(word));
    return words[values.indexOf(Math.max(...values))];

}
console.log(satzRank("The quick brown fox."))
console.log(satzRank("Nancy is very pretty."))
console.log(satzRank("Check back tomorrow, man!"))
console.log(satzRank("Wednesday is hump day."))