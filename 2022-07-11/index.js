//Switch

const tag = "Sonntag";

switch (tag) {
    case "Montag":
        console.log("Montag");
        break;
    case "Dienstag":
        console.log("Dienstag");
        break;  
    case "Mittwoch":
        console.log("Mittwoch");
        break;  
    case "Donnerstag":
        console.log("Donnerstag");
        break;
    case "Freitag":
        console.log("Freitag");
        break;  
    case "Samstag":
        console.log("Samstag");
        break;  
    default:
        console.log("Sonntag");         
}   

//** For Schleifen
// Start   ;  check  ; danach
for(let i =0; i <= 10; i++){

    console.log(i);

}

//* Break and continue
for (let j = 0; j <= 100; j++){
    console.log("break beispiel:", j);
    if (i===5) break;
}

for (let k = 0; k <= 10; k++){
    console.log("break beispiel:", k);
    if (k===5) continue;
    
}