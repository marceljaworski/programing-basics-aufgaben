//*1. Erstelle eine Funktion, die jeden Anfangsbuchstaben der Wörter eines Strings in einen Großbuchstaben umwandelt. Anschließend soll die Funktion den String zurückgeben.
//";
// Hier ein paar Daten, mit denen Du deine Funktionen füttern kannst (du kannst die drei Texte jeweils für alle drei Funktionen verwenden):
const text1 = "authoritatively incentivize excellent alignments whereas sources rapidiously."; 
const text2 = "Rapidiously incubate enterprise architectures for covalent expertise. Completely deliver cross-media core competencies through extensive technologies.";
const text3 = "Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives. Interactively exploit client-centric e-business without convergence. Intrinsicly brand open-source infomediaries vis-a-vis economically sound expertise.";
const arrayTest = [4, "hallo!", 564];
console.log("1.--------------")
function capitalize(text){
    const words = text.split(" ");

    const capitalizedWords = [];

    for (let i = 0; i < words.length; i++){
        const capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].substring(1);
        capitalizedWords.push(capitalizedWord);
    }
    const result = capitalizedWords.join(" ");
    return result;
}
console.log(capitalize(text1));

// 2. Entwickle eine Funktion, die einen gegebenen Text auf maximal 30 Wörter gekürzt zurückgibt. Ist der Text länger als 30 Wörter, soll in der Ausgabe ein "..." am Ende angefügt werden.
console.log("2.--------------");
function resumeText(text){
    if (typeof text !== "string"){
        return "Invalides Argument! Es muss ein String übergeben werden!"; 
    }
    const words = text.split(" ");
    if (words.length > 30){
        const resume = words.slice(0, 30);
        return resume.join(" ") + "...";
    }  
}
console.log(resumeText(text3))

// 3. Kombiniere beide Funktionen, sodass ein übergebener Text gekürzt und die Anfangsbuchstaben der Wörter in Großbuchstaben ausgegeben werden.
console.log("3.--------------");

console.log("test------------");
console.log(capitalize(resumeText(text3)));


// 4. Prüfe in jeder Funktion, ob die übergebenen Werte tatsächlich Strings sind. Falls nicht, gib eine Fehlermeldung zurück (z.B. "Invalides Argument! Es muss ein String übergeben werden!").



// 5. Sind deine Funktionen Pure Functions oder haben sie Side Effects? Begründe/Beweise deine Antwort.





