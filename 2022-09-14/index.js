// # Herausforderungszeit
// ​
// ## Zählen Sie die Anzahl der Duplikate
// ​
// 1.  Schreiben Sie eine Funktion `duplikate`, die die Anzahl unterschiedlicher alphabetischer Zeichen und numerischer Ziffern ohne Berücksichtigung der Groß-/Kleinschreibung zurückgibt, die mehr als einmal in der Eingabezeichenfolge vorkommen. Es kann davon ausgegangen werden, dass die Eingabezeichenfolge nur Buchstaben (sowohl Groß- als auch Kleinbuchstaben) und numerische Ziffern enthält.
// ​
// ## Beispiel
// ​
// ```js
// duplikate("abcde"); // → 0
// duplikate("aabbcde"); // → 2: a, b
// duplikate("aabBcde"); // → 2: a, (b,B)
// duplikate("aA11"); // → 2: a, 1
// duplikate("aabbccdd"); // → 4: a, b, c, d
// duplikate("aabbb"); // → 2: a, b
// ```


function duplicateCount(text) {
    const caseInsensitive = text.toLowerCase().split("");
    const result = caseInsensitive.reduce((acc, el) => {
    if (acc[el] === undefined) acc[el] = 0;
    acc[el] += 1;
    // console.log(acc);
    return acc;
    }, {});
    const values = Object.entries(result);
    console.log(values);
    return values.filter((el) => el > 2).length;
}

// console.log(duplicateCount("aaabbcdef"));
// console.log(duplicateCount("aabbbccdd")); 

// #  Zeitmaße Umwandeln
// ​
// 1. Erstelle Sie eine Funktion namens zeitConverter.
// 2. Die Function muss drei parameter erhalten, `fromType` einen String, `toType` einen String und `time` eine Zahl. 
// 3. Gültige `fromType` und `toType` Werte sind: millisecond, second, minute, hour
// ​
// ## Example:
// ​
// ```js
// ​
// zeitConverter("millisecond", "minute", 120000) // => 2
// zeitConverter("minute", "millisecond", 2) // => 120000
// zeitConverter("hour", "millisecond", 1) // => 3600000
// ​
// ```
// ​
// ## Notes
// ​
// - Benutz die Methode console.error wenn ein falscher Parameter verwendet wurde.
// ​
// ​
// ### Bonus
// ​
// - Erweitern Sie Ihre Funktion, um auch Tage und Jahre umzuwandeln.

// function zeitConverter(fromType, toType, num){
//     const s = 1000;
//     const min = 60 * s;
//     const stunde = 60 * min;
//     const tag = 24 * stunde;
//     const jahr = 365 * tag;
//     if(fromType === undefined || toType === undefined || num === undefined){
//         console.error("Die Parameter wurde nicht ausgegeben")
//         return;
//     }
//     if (fromType == "minuten" && toType == "milisecunden"){
//         return num * min + " Milisecunden"
//     }
//     if (fromType == "milisecunden" && toType == "minuten"){
//         return num / min + " Minuten"
//     }
//     if (fromType == "minuten" && toType == "secunden"){
//         return num * 60 + " Secunden"
//     }
//     if (fromType == "secunden" && toType == "minuten"){
//         return num / 60 + " Minuten"
//     }
//     if (fromType == "minuten" && toType == "stunden"){
//         return num / 60 + " Stunden"
//     }
//     if (fromType == "stunden" && toType == "minuten"){
//         return num * 60 + " Minuten"
//     }
//     if (fromType == "stunden" && toType == "milisecunden"){
//         return num * stunde  + " Milisecunden"
//     }
//     if (fromType == "milisecunden" && toType == "stunden"){
//         return num / stunde  + " Stunden"
//     } 
// } 

function zeitConverter(fromType, toType, time){
    const ms = 1;
    const s = 1000;//m*60
    const m = 60 * s;// m=1;
    const h = 60 * m;//h=60*m
    const d = 24 * h;
    const y = 365 * d;

    if(fromType === undefined || toType === undefined || time === undefined){
        console.error("Die Parameter wurde nicht ausgegeben")
        return;
    }

    function toMilisecond(fromType, time){
        if(fromType == "milisecond"){
            return time;
        }
        if(fromType == "second"){
            return time * s;
        }
        if(fromType == "minute"){
            return time * m;
        }
        if(fromType == "hour"){
            return time * h;
        }
        if(fromType == "day"){
            return  time * d;
        }
        if(fromType == "year"){
            return time * y;
        }   
    }
    if (toType == "milisecond"){
        return toType + ": " + toMilisecond(fromType, time);
    }
    if (toType == "second"){
        return toType + ": " + toMilisecond(fromType, time) / s;
    }
    if (toType == "minute"){
        return toType + ": " + toMilisecond(fromType, time) / m;
    }
    if (toType == "hour"){
        return toType + ": " + toMilisecond(fromType, time) / h;
    }
    if (toType == "day"){
        return toType + ": " + toMilisecond(fromType, time) / d;
    }
    if (toType == "year"){
        return toType + ": " + toMilisecond(fromType, time) / y;  
    }
}
// console.log(zeitConverter(`milisecond`,`minute`, 60000))
// console.log(zeitConverter(`minute`, `milisecond`, 2))
// console.log(zeitConverter(`hour`, `milisecond`, 1))
// console.log(zeitConverter(`milisecond`, `hour`, 3600000))
// console.log(zeitConverter(`minute`, `second`, 1))
// console.log(zeitConverter(`second`, `minute`, 60))
// console.log(zeitConverter(`minute`, `hour`, 120))
// console.log(zeitConverter(`hour`, `minute`, 2))
// console.log(zeitConverter(`day`, `milisecond`, 1))
// console.log(zeitConverter(`day`, `second`, 1))
// console.log(zeitConverter(`day`, `minute`, 1))
// console.log(zeitConverter(`day`, `day`, 1))
console.log(zeitConverter(`year`, `milisecond`, 1));
console.log(zeitConverter(`milisecond`, `year`, 1));