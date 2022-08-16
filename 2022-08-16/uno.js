// Uno!
// Vorlage für die Spieler
const player = {
    name: "",
    hand: [],
    score: 0,
    level: "beginner",
};

// Alle Karten im Spiel
const stack = [
    { color: "green", number: "1" },
    { color: "green", number: "2" },
    { color: "green", number: "3" },
    { color: "green", number: "4" },
    { color: "green", number: "5" },
    { color: "green", number: "6" },
    { color: "green", number: "7" },
    { color: "green", number: "8" },
    { color: "green", number: "9" },
    { color: "green", number: "10" },
    { color: "green", number: "11" },
    { color: "green", number: "12" },
    { color: "green", number: "13" },
    { color: "blue", number: "1" },
    { color: "blue", number: "2" },
    { color: "blue", number: "3" },
    { color: "blue", number: "4" },
    { color: "blue", number: "5" },
    { color: "blue", number: "6" },
    { color: "blue", number: "7" },
    { color: "blue", number: "8" },
    { color: "blue", number: "9" },
    { color: "blue", number: "10" },
    { color: "blue", number: "11" },
    { color: "blue", number: "12" },
    { color: "blue", number: "13" },
    { color: "red", number: "1" },
    { color: "red", number: "2" },
    { color: "red", number: "3" },
    { color: "red", number: "4" },
    { color: "red", number: "5" },
    { color: "red", number: "6" },
    { color: "red", number: "7" },
    { color: "red", number: "8" },
    { color: "red", number: "9" },
    { color: "red", number: "10" },
    { color: "red", number: "11" },
    { color: "red", number: "12" },
    { color: "red", number: "13" },
    { color: "yellow", number: "1" },
    { color: "yellow", number: "2" },
    { color: "yellow", number: "3" },
    { color: "yellow", number: "4" },
    { color: "yellow", number: "5" },
    { color: "yellow", number: "6" },
    { color: "yellow", number: "7" },
    { color: "yellow", number: "8" },
    { color: "yellow", number: "9" },
    { color: "yellow", number: "10" },
    { color: "yellow", number: "11" },
    { color: "yellow", number: "12" },
    { color: "yellow", number: "13" },
];

// Mischen, mischen, mischen!
// Ganz schön lang, diese Zeile... Geht bestimmt besser.
const shuffledStack = stack.sort(() => Math.random() - 0.5).sort(); 
// function shuffleCards(array){
//     const cardsCopy = [...cards];
//     const shuffledCards = [];
//     while(cardsCopy.length >= 1){
//         const randomPosition = Math.floor(Math.random()* cardsCopy.length);
//         const randomCard = cardsCopy[randomPosition];
//         shuffledCards.push(randomCard);
//         cardsCopy.splice(randomPosition, 1);
//     }
//     cards = [...shuffledCards]
// }

// Spieler 1 mit der Vorlage erstellen
const player1 = JSON.parse(JSON.stringify(player));
player1.name = "Fantasia";

// Fünf Karten ziehen
let card1 = shuffledStack.shift();
let card2 = shuffledStack.shift();
let card3 = shuffledStack.shift();
let card4 = shuffledStack.shift();
let card5 = shuffledStack.shift();

player1.hand = [card1, card2, card3, card4, card5];

// Spieler 2 mit der Vorlage erstellen
const player2 = JSON.parse(JSON.stringify(player));
player2.name = "Andi Feind";

// Fünf Karten ziehen
card1 = shuffledStack.shift();
card2 = shuffledStack.shift();
card3 = shuffledStack.shift();
card4 = shuffledStack.shift();
card5 = shuffledStack.shift();

player2.hand = [card1, card2, card3, card4, card5];

// Die erste aufgedeckte Karte.
// Die Spieler sollen die passenden Karten auf den gameStack ablegen.
const gameStack = shuffledStack.shift();
function karteAblegen (arr, gameStack){
    if(gameStack.color===arr.color||gameStack.number=== arr.number){


    }
}

// ...was ist denn hier passiert?!
console.log("player1", player1);
console.log("player2", player2);
console.log({ gameStack, shuffledStack });
// Bitte hilf mir!

// 1. Spieler anlegen
// Es sollen zwei unterschiedliche Spieler angelegt werden können.
// Dafür soll aber unbedingt die Vorlage verwendet werden.

// 2. Karten ziehen
// Beide Spieler sollen fünf Karten vom Stapel ziehen.
// Natürlich dürfen die beiden nicht die gleichen Karten auf der Hand haben.

// 3. Spielvorbereitung
// Wir haben viel Code wiederholt. Können wir das eleganter lösen?
// Eine Funktion hier, eine Methode dort,...

// 4. Das Spiel!
// Hast Du Lust, das Spiel weiterzuführen? Auf geht's!

