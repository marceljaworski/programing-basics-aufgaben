//*1. Erstelle eine Funktion, die jeden Anfangsbuchstaben der Wörter eines Strings in einen Großbuchstaben umwandelt. Anschließend soll die Funktion den String zurückgeben.
//";
// Hier ein paar Daten, mit denen Du deine Funktionen füttern kannst (du kannst die drei Texte jeweils für alle drei Funktionen verwenden):
const text1 = "authoritatively incentivize excellent alignments whereas sources rapidiously."; 
const text2 = "Rapidiously incubate enterprise architectures for covalent expertise. Completely deliver cross-media core competencies through extensive technologies.";
const text3 = "Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives. Interactively exploit client-centric e-business without convergence. Intrinsicly brand open-source infomediaries vis-a-vis economically sound expertise.";

console.log("1.--------------")
function capitalize(parameter){
    const words = parameter.split(" ");

    const capitalizedWords = [];

    for (let i = 0; i < words.length; i++){
        const capitalizedWord = words[i][0].toUpperCase() + words[i].substring(1);
        capitalizedWords.push(capitalizedWord);
    }
    const result = capitalizedWords.join(" ");
    return result;
}
console.log(capitalize(text1));

//console.log(exercise1(text1));
// 2. Entwickle eine Funktion, die einen gegebenen Text auf maximal 30 Wörter gekürzt zurückgibt. Ist der Text länger als 30 Wörter, soll in der Ausgabe ein "..." am Ende angefügt werden.
console.log("2.--------------")
function exercise2(parameter){
    const words = parameter.split(" ");
    const wordsLength = words.length;
    if (wordsLength > 30){
        const resume = words.slice(0, 30);
        console.log(resume.join(" ") + "...");
    }  
}
exercise2(text3);


// 3. Kombiniere beide Funktionen, sodass ein übergebener Text gekürzt und die Anfangsbuchstaben der Wörter in Großbuchstaben ausgegeben werden.
console.log("3.--------------")
function exercise3(parameter){
    const words = parameter.split(" ");
    const wordsLength = words.length;
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    if (wordsLength > 30){
        const resume = words.slice(0, 30);
        console.log(resume.join(" ") + "...");
        return
    }  
    const upperCase = words.join(" ");
    console.log(upperCase);
}
exercise3(text2);

//console.log("3. alternative 2--------------")
//function alternative2(parameter){
//return exercise1(exercise2(parameter));
//}
//console.log(alternative2(text2));


// 4. Prüfe in jeder Funktion, ob die übergebenen Werte tatsächlich Strings sind. Falls nicht, gib eine Fehlermeldung zurück (z.B. "Invalides Argument! Es muss ein String übergeben werden!").
console.log("4.--------------");
const arrayTest = [4, "hallo", 564];
function exercise4(parameter){
    if (typeof parameter !== "string"){
        console.log("Invalides Argument! Es muss ein String übergeben werden!") 
        return
    }
    const words = parameter.split(" ");
    const wordsLength = words.length;
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    if (wordsLength > 30){
        const resume = words.slice(0, 30);
        console.log(resume.join(" ") + "...");
        return
    }  
    const upperCase = words.join(" ");
    console.log(upperCase);
}
exercise4(arrayTest);


// 5. Sind deine Funktionen Pure Functions oder haben sie Side Effects? Begründe/Beweise deine Antwort.





