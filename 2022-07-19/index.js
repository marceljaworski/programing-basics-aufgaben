/*
Hier die Zusatzaufgaben zum Üben:
1. Schreibe eine Funktion, die aus allen übergebenen Strings den längsten String zurückgibt.
2. Schreibe eine Funktion, die alle Vorkommen eines Wortes in einem Text prüft.
3. Schreibe eine Funktion, die alle Wörter in einem Text rückwärts geschrieben zurückgibt. Die Position der Worte soll sich dabei aber nicht ändern.
Beispiel: "the quick brown fox jumps over the lazy dog" => "eht kciuq nworb xof spmuj revo eht yzal god"

*/
console.log(' 1. ---------')
function langsteString(array){
    var maxStr = array[0].length;
    var ans = array[0];
    for (i=1; i<array.length; i++){
        var maxi = array[i].length;
        if(maxi > maxStr){
            ans = array[i];
            maxStr = maxi;
        }
    }
    return ans;
}

console.log(langsteString([ "Schreibe eine Funktion, die aus allen übergebenen Strings den längsten String zurückgibt","the", "the quick brown fox jumps over the lazy dog"]));


console.log(' 2. ---------')
function wordInText(word, text){
    const words = text.split(" ");
    let count = 0;
    for(i=0;i<words.length;i++){
        if(word == words[i]){
            count ++
        }
    }
    return count;
}
console.log(wordInText("the", "the quick brown fox jumps over the lazy dog"));

console.log(' 3. ---------')
function wordReverse (text){
    const word = text.split(" ");
    const words = [];
    for(i = 0; i < word.length; i++){
        const reverse = word[i].split("").reverse().join("");
        words.push(reverse);
    }
    return words.join(" ");
}
console.log(wordReverse("the quick brown fox jumps over the lazy dog"));