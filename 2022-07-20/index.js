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
    const solution = array[position];
    if (array.length == 0){
        return "Der Stapel ist leer"; 
    }else if (array.length > 0) {
        array.splice(position, 1);
        return solution;
    }
};

console.log(getCard(cards))
function shuffleCards(array){
    const cardsCopy = [...cards];
    const shuffledCards = [];
    while(cardsCopy.length >= 1){
        const randomPosition = Math.floor(Math.random()* cardsCopy.length);
        const randomCard = cardsCopy[randomPosition];
        shuffledCards.push(randomCard);
        cardsCopy.splice(randomPosition, 1);
    }
    cards = [...shuffledCards]
}
// // for (let i=0; i<53; i++){
//     console.log(getCard(cards));
// };return array

// function shuffleCards(array){
//     for(let i = array.lenght - 1 ; i > 0; i--){
//         const positionAleatoria = Math.floor(Math.random() * (i+1));
//         let origin = array[i]
//         array[i]= array[positionAleatoria];
//         array[positionAleatoria] = origin;
//     }
// }

console.log(shuffleCards(cards));
// let indiceAleatorio = Math.floor(Math.random() * (i + 1));
// 		let temporal = arreglo[i];
// 		arreglo[i] = arreglo[indiceAleatorio];
// 		arreglo[indiceAleatorio] = temporal;

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
    const symbol = ['!', '@',  '#', '$', '%', '^','&', '*',  '(', ')', '_', '+','~', '\\', '`', '|', '}', '{','[', ']',  ':', ';', '?', '>','<', ',',  '.', '/', '-', '='];
    const numbers = [`0`,`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
    const password = [];
    while (password.length < length ){
        if(useSmallLetters){
            const position = Math.floor(Math.random() * lowerCase.length);
            password.push(lowerCase[position]);
        }  
        if(useCapitalLetters){
            const position = Math.floor(Math.random() * upperCase.length);
            password.push(upperCase[position]);
        }
        if (useSpecialCharacters){
            const position = Math.floor(Math.random() * symbol.length);
            password.push(symbol[position]);
        } 
        if (useNumbers){
            const position = Math.floor(Math.random() * numbers.length);
            password.push(numbers[position]);
        }
    } 
    return password.join("");
};
console.log(createPassword(5, true, false, true, true))
    
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
const arr1 = [1, 2, 3, 3];
const arr2 = [5, 2, 1, 4];
function symmetricDifference(arrX, arrY){
    const x = arrX.filter(x => !arrY.includes(x));
    const y = arrY.filter(x => !arrX.includes(x));
    const difference = x.concat(y); 
    return difference;    
}

console.log(symmetricDifference(arr1, arr2));