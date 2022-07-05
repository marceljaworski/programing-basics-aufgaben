//*Verändere die Farbtöne wie angegeben.
//1. rgb(247, 101, 101) => Rot um 80 verringern
const color1 = "rgb(247, 101, 101)";
const rot1 = color1.substring(4, 7);
const rot1Number = parseInt(rot1);
const rot1Verringer = rot1Number - 80;
console.log (`1. Rot um 80 verringern: rgb(${rot1Verringer}, 101, 101)`);

//2. rgb(21, 35, 112) => Blau um 100 und Grün um 75 erhöhen
const color2 = "rgb(21, 35, 112)";
const grun2 = color2.substring(8, 10);
const grun2Erhohet = +grun2 + 75;
const blau2 = color2.substring(12, 15);
const blau2Erhohet = +blau2 + 100;
console.log(`2. Blau um 100 und Grün um 75 erhöhen: rgb(21, ${grun2Erhohet}, ${blau2Erhohet})`);

//3. rgb(167, 249, 85) => Rot und Blau auf ein Viertel reduzieren
const color3 = "rgb(167, 249, 85)";
const rot3 = color3.substring(4,7);
const rot3Viertel = rot3 / 4;
const rot3Ergebnis = parseInt(rot3Viertel)
const blau3 = color3.substring(14, 16);
const blau3Viertel = blau3 / 4;
const blau3Ergebnis = parseInt(blau3Viertel)
console.log(`3. Rot und Blau auf ein Viertel reduzieren: rgb(${rot3Ergebnis}, 249, ${blau3Ergebnis})`)

//Gib nun die folgenden Farben in den gewünschten Formaten aus.
//1. rgb(127, 255, 100) => HEX
const rgbColor = 'rgb(127, 255, 100)' 
const rgbRot = rgbColor.substring(4, 7)
const rgbNumberRot = parseInt(rgbRot)
const hexRot = rgbNumberRot.toString(16)
const rgbGrun = rgbColor.substring(9, 12)
const rgbNumberGrun = parseInt(rgbGrun)
const hexGrun = rgbNumberGrun.toString(16)
const rgbBlue = rgbColor.substring(14, 17)
const rgbNumberBlue = parseInt(rgbBlue)
const hexBlue = rgbNumberBlue.toString(16)
console.log(`1. rgb(127, 255, 100) => HEX: #${hexRot}${hexGrun}${hexBlue}`)


//2. #E23F76 => RGB

const hexColor = "#E23F76";
const hexRot2 = hexColor.substring(1, 3);
const hexGrun2 = hexColor.substring(3, 5);
const hexBlue2 = hexColor.substring(5, 8);
const rgbNumberRot2 = parseInt(hexRot2, 16);
const rgbNumberGrun2 = parseInt(hexGrun2, 16);
const rgbNumberBlue2 = parseInt(hexBlue2, 16);
//console.log(hexRot2)
//console.log(hexGrun2)
//console.log(hexBlue2)
console.log(`2. #E23F76 => RGB: ${rgbNumberRot2}, ${rgbNumberGrun2}, ${rgbNumberBlue2}`)

//3. rgb(229, 13, 218) => HEX
const rgbColor1 = 'rgb(229, 13, 218)' 
const rgbRot1 = rgbColor1.substring(4, 7)
const rgbNumberRot1 = parseInt(rgbRot1)
const hexRot1 = rgbNumberRot1.toString(16)
const rgbGrun1 = rgbColor1.substring(09, 11)
const rgbNumberGrun1 = parseInt(rgbGrun1)
const hexGrun1 = rgbNumberGrun1.toString(16)
const hexGrunPadded = hexGrun1.padStart(2, "0")//PadStart
const rgbBlue1 = rgbColor1.substring(13, 16)
const rgbNumberBlue1 = parseInt(rgbBlue1)
const hexBlue1 = rgbNumberBlue1.toString(16)
console.log(`3. rgb(229, 13, 218) => HEX: #${hexRot1}${hexGrunPadded}${hexBlue1}`)

//4. #02D633 => RGB
const hexColor3 = "#02D633";
const hexRot3 = hexColor3.substring(1, 3);
const hexGrun3 = hexColor3.substring(3, 5);
const hexBlue3 = hexColor3.substring(5, 8);
const rgbNumberRot3 = parseInt(hexRot3, 16);
const rgbNumberGrun3 = parseInt(hexGrun3, 16);
const rgbNumberBlue3 = parseInt(hexBlue3, 16);
console.log(`4. #02D633 => RGB: ${rgbNumberRot3}, ${rgbNumberGrun3}, ${rgbNumberBlue3}`)

//Und jetzt machen wir beides gleichzeitig: Farbton verändern und in andere Formate ausgeben.
//1. rgb(71, 171, 247) => Rot um 100 erhöhen und in HEX ausgeben
colorRgb = "rgb(71, 171, 247)"
const rotRgb = colorRgb.substring(4,6);
const grunRgb = colorRgb.substring(8,11);
const blueRgb = colorRgb.substring(13,16);
const rotRgbNumber = parseInt(rotRgb);
const rotErhohen = rotRgbNumber + 100;
const grunRgbNumber = parseInt(grunRgb);
const blueRgbNumber = parseInt(blueRgb);
const rotHex = rotErhohen.toString(16);
const grunHex = grunRgbNumber.toString(16);
const blueHex = blueRgbNumber.toString(16);
console.log(`1. rgb(71, 171, 247) => Rot um 100 erhöhen und in HEX ausgeben #${rotHex}${grunHex}${blueHex}`)

//2. rgb(59, 31, 242) => Blau um 200 und Grün um 31 verringern und in HEX ausgeben
colorRgb2 = "rgb(59, 31, 242)"
const rotRgb2 = colorRgb2.substring(4,6);
const grunRgb2 = colorRgb2.substring(8,10);
const blueRgb2 = colorRgb2.substring(12,15);
const rotRgbNumber2 = parseInt(rotRgb2);
const grunRgbNumber2 = parseInt(grunRgb2);
const blueRgbNumber2 = parseInt(blueRgb2);
const blueVerringern =  blueRgbNumber2 - 200;
const grunVerringern =  grunRgbNumber2 - 31;
const grunPadded = grunVerringern.padStart(2, "0");
const rotHex2 = rotRgbNumber2.toString(16);
const blueHex2 = blueVerringern.toString(16);
const grunHex2 = grunPadded.toString(16);
console.log(grunPadded);
console.log(`2. rgb(59, 31, 242) => Blau um 200 und Grün um 31 verringern und in HEX ausgeben #${rotHex2}${grunHex2}${blueHex2}`)

//3. #6BFF95 => Rot auf 255 und Blau auf 0 setzen und in RGB ausgeben
const hexColor4 = "#6BFF95";
const hexRot4 = hexColor4.substring(1, 3);
const hexGrun4 = hexColor4.substring(3, 5);
const hexBlue4 = hexColor4.substring(5, 8);
const rgbNumberRot4 = parseInt(hexRot4, 16);
const rgbNumberGrun4 = parseInt(hexGrun4, 16);
const rgbNumberBlue4 = parseInt(hexBlue4, 16);
console.log(`3. #6BFF95 => Rot auf 255 und Blau auf 0 setzen und in RGB ausgeben${rgbNumberRot4}, ${rgbNumberGrun4}, ${rgbNumberBlue4}`)
//4. #234042 => Alle drei Kanäle um 50% erhöhen und in RGB ausgeben
//5. rgb(165, 21, 50) => Rot und Blau auf ein Viertel reduzieren und in HEX ausgeben
