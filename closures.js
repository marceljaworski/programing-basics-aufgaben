// Aufgabe 1: 2022-08-23
// Schreibe eine Closure, mit der es möglich ist, Zahlen auf eine bestimmte Anzahl an Nachkommastellen zu runden.
// Die Anzahl soll über die outer function festgelegt werden können.
// Die Zahl, die an die inner function übergeben wird, soll dann entsprechend gerundet werden.
// Beispiele:
// Funktion rundet auf 2 Nachkommastellen:
// 5.492858 => 5.49
// 12.7491313 => 12.75
// Funktion rundet auf 4 Nachkommastellen:
// 5.492858 => 5.4929
// 12.7491313 => 12.7491

function runden (anzahl){
    const number = (number) => {
        console.log(number.toFixed(anzahl));
    }
    return number;
}
const rundetAuf2 = runden(2);
const rundetAuf4 = runden(4);


rundetAuf2(12.7491313);
rundetAuf4(12.7491313);
// Aufgabe 2:
// Schreibe eine Closure, die anhand eines Parameters entscheidet, welche Suchmaschine genutzt wird.
// Beim Aufruf der inner function soll dann die passende URL zum Suchbegriff und der zuvor festgelegten Suchmaschine ausgegeben werden.
// Verwende für die Wahl der Suchmaschine den Namen.
// Beispiele für URLs:
// Google: https://www.google.com/search?q=closures
// DuckDuckGo: https://duckduckgo.com/?q=closures
// Bing: https://www.bing.com/search?q=closures


// const suchGoogle = suchMaschine(`https://bing.com/search?q=`);
// const suchDuckGo = suchMaschine(`https://duckducguesses++;





function multiplizieren (zahl){
    const number = (number) => {
        console.log(number * zahl)
    }
    return number;
}
const mal2 = multiplizieren(2);
const mal4 = multiplizieren(4);


mal2(3);
mal4(3);

function guessingGame(amount){
    let answer = Math.floor(Math.random()*10);
    let guesses=0;
    guesses++;
    return function (guess){
    // debugger;
    if(guesses<amount){
    if(guess === answer) return "You got it!";
    if(guess>answer) return "Too high!";
    else return "Too low!";
    }
    else return "Start a new Game";
    }
}
var game5 = guessingGame(5);

console.log(game5(8));

