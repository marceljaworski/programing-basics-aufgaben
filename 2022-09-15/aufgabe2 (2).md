# Pokerhand

Implementiere eine Funktion `getWinnerCards` welche die beste Hand einer Pokerrunde ermittelt. Die Funktion erhält zwei Parameter.

1. `holeCards` ein Array aus Arrays mit jeweils zwei Karten Objekten, welche die Karten der Spieler die noch im Spiel sind beinhaltet
2. `communityCards` ein Array mit 5 Karten Objekten.

Die Funktion soll den Index der Gewinner Hand als Zahl zurückgeben.

### Info

Die Karten Objekte sehen so aus:

```js
const sevenOfHearts = {
    suit: "hearts",
    name: "7",
};

const assOfClubs = {
    suit: "clubs",
    name: "Ass",
};
```

```js
const holeCardsPlayerOne = [
    {suit: "hearts",name: "7"},
    {suit: "clubs",name: "Ass"}
]

const holeCardsPlayerTwo = [
{suit: "hearts",name: "10"},
{suit: "hearts",name: "Queen"}
]

const communityCards = [
{suit: "checker",name: "King"},
{suit: "checker",name: "Ass"},
{suit: "clubs",name: "Queen"},
{suit: "spades",name: "8"},
{suit: "spades",name: "6"},
]

getWinnerCards([holeCardsPlayerOne, holeCardsPlayerTwo], communityCards) // -> 1
```
