/*
Aufgabe 1 (Karte ziehen)
Implementiere eine Funktion mit dem Namen getCard welche eine zufällige Karte aus dem Array cards entfernt und als String zurückgibt. Wenn man die Funktion getCard 52 mal aufgerufen hat soll sie zurück geben “Der Stapel ist leer”.
Nutze folgenden Code:
const cards = [“2 Pik”,“3 Pik”,“4 Pik”,“5 Pik”,“6 Pik”, “7 Pik”, “8 Pik”, “9 Pik”, “10 Pik”, “Bube Pik”, “Dame Pik”, “König Pik”, “Ass Pik”, “2 Kreuz”,“3 Kreuz”,“4 Kreuz”,“5 PKreuzik”,“6 Kreuz”, “7 Kreuz”, “8 Kreuz”, “9 Kreuz”, “10 Kreuz”, “Bube Kreuz”, “Dame Kreuz”, “König Kreuz”, “Ass Kreuz”, “2 Karo”,“3 Karo”,“4 Karo”,“5 Karo”,“6 Karo”, “7 Karo”, “8 Karo”, “9 Karo”, “10 Karo”, “Bube Karo”, “Dame Karo”, “König Karo”, “Ass Karo”, “2 Herz”,“3 Herz”,“4 Herz”,“5 Herz”,“6 Herz”, “7 Herz”, “8 Herz”, “9 Herz”, “10 Herz”, “Bube Herz”, “Dame Herz”, “König Herz”, “Ass Herz”]
Bonus:
Implementiere eine Funktion mit dem Namen shuffleCards welche die Karten im Array cards mischt.
—--
*/
const cards = ['2 Pik','3 Pik','4 Pik','5 Pik','6 Pik', '7 Pik', '8 Pik', '9 Pik', '10 Pik', 'Bube Pik', 'Dame Pik', 'König Pik', 'Ass Pik', '2 Kreuz','3 Kreuz','4 Kreuz','5 PKreuzik','6 Kreuz', '7 Kreuz', '8 Kreuz', '9 Kreuz', '10 Kreuz', 'Bube Kreuz', 'Dame Kreuz', 'König Kreuz', 'Ass Kreuz', '2 Karo','3 Karo','4 Karo','5 Karo','6 Karo', '7 Karo', '8 Karo', '9 Karo', '10 Karo', 'Bube Karo', 'Dame Karo', 'König Karo', 'Ass Karo', '2 Herz','3 Herz','4 Herz','5 Herz','6 Herz', '7 Herz', '8 Herz', '9 Herz', '10 Herz', 'Bube Herz', 'Dame Herz', 'König Herz', 'Ass Herz']
console.log(" 1. ----------");
function getCard(array){
    const position = Math.floor(Math.random() * array.length);
    console.log(position)
    const solution = array[position];
    array.splice(position, 1);
    return solution;
};
console.log(getCard(cards));
console.log(cards);

console.log(" 1. Bonus ----------");

function shuffleCards(array){
    const position = Math.floor(Math.random() * array.length);
    const shuffledCards = [];
    for (let i = 0; i < array.length; i++){
        let card = array[i]; 
        shuffledCards.push(card);
    }
    return shuffledCards
}
//console.log(shuffleCards(cards));

/*
Aufgabe 2 (Passwort Generator)
Implementiere eine Funktion mit dem Namen createPassword welche ein zufällig erzeugtes Passwort zurückgibt.
Die Funktion gibt einen string zurück
Die Funktion erhält 4 Parameter
1. length, eine number, gibt die Länge des Passworts an
2. useSmallLetters, ein boolean, gibt an ob das Passwort kleine Buchstaben von a-z enthalten soll
3. useCapitalLetters, ein boolean, gibt an ob das Passwort große Buchstaben von A-Z enthalten soll
4. useSpecialCharacters, ein boolean, gibt an ob das Passwort Sonderzeichen wie @ ! $ % & * enthalten soll.
—--
*/

console.log(" 2.----------");

function createPassword(length, useSmallLetters, useCapitalLetters, useSpecialCharacters, useNumbers){

    const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
    const symbol = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
    const numbers = [`0`,`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
    const symbolArr = symbol.split("");
    const password = [];
    while (password.length < length ){
        if(useSmallLetters = true){
            const position = Math.floor(Math.random() * lowerCase.length);
            password.push(lowerCase[position]);
        }  
        if(useCapitalLetters = true){
            const position = Math.floor(Math.random() * upperCase.length);
            password.push(upperCase[position]);
        }
        if (useSpecialCharacters = true){
            const position = Math.floor(Math.random() * symbolArr.length);
            password.push(symbolArr[position]);
        } 
        if (useNumbers = true){
            const position = Math.floor(Math.random() * numbers.length);
            password.push(numbers[position]);
        }
    } 
    return password.join("");
};
console.log(createPassword(16, false, true, true, true))

// Functions
function upperCaseRandom (boolean){
    const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
    if (boolean = true){
        const position = Math.floor(Math.random() * upperCase.length);
        return upperCase[position];
    }  
};

function lowerCaseRandom (boolean){
    const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    if (boolean = true){
        const position = Math.floor(Math.random() * lowerCase.length);
        return lowerCase[position];
    }  
};
function sonderZeichnenRandom (boolean){
    const symbol = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
    const symbolArr = symbol.split("");
    if (boolean = true){
        const position = Math.floor(Math.random() * symbolArr.length);
        return symbolArr[position];
    }  
};


/*
Aufgabe 3 (Symmetrischer Unterschied)
Implementiere eine Funktion mit dem namen symmetricDifference(), die zwei Arrays als Parameter erhält und ein Array mit deren symmetrischer Differenz zurückgibt. Das zurückgegebene Array darf nur eindeutige Werte enthalten (keine Duplikate).
Beispiel:
symmetricDifference([1, 2], [ ]) sollte [1, 2] zurückgeben
symmetricDifference([1, 2], [1]) sollte [2] zurückgeben
symmetricDifference([1, 2], [1, 3]) sollte [2, 3] zurückgeben
symmetricDifference([1, 2, 3], [5, 2, 1, 4]) sollte [3, 4, 5] zurückgeben
symmetricDifference([1, 2, 3, 3], [5, 2, 1, 4]) sollte [3, 4, 5] zurückgeben
symmetricDifference([1, 2, 3], [5, 2, 1, 4, 5]) sollte [3, 4, 5] zurückgeben

Bonus (Mit mehr Parametern): https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
*/
console.log(" 3. ----------");
const arr1 = [1, 2, 3];
const arr2 = [1, 4];

function symmetricDifference(arr1, arr2){
    const arr1a = [];
    for ( let i = 0; i <arr1.length; i++){
        if (arr1[i]!==arr2[i]){
            arr1a.push(arr1[i]);   
        } 
    } 
    for ( let i = 0; i <arr2.length; i++){
        if (arr1[i]!==arr2[i]){
            arr1a.push(arr2[i]);   
        }
    } 
    const arrSort = arr1a.sort();
    const result = [];
    for ( let i = 0; i <arrSort.length; i++){
        if (arrSort[i]!==arrSort[i + 1]){
            result.push(arrSort[i]);   
        }
    } 
    return result;
};
console.log(symmetricDifference(arr1, arr2))