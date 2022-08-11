
// Erstelle das folgende Objekt:
const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    printinfo: function(){
        return `${student.firstName} ${student.lastName} is a student in class ${student.class}`;
    },
 };
// Erstelle eine Methode, die das Folgende ausgibt:
// "John smith is a student in class 12"

console.log(student.printinfo)

// Erstelle ein person object. Füge den Vor- und Nachnamen, das Alter, den Beruf, die Stadt usw. der Person hinzu. Erstelle eine Methode, um Daten aus dem Objekt zu drucken, z.B. “John Smith is a 41 year old engineer living in France”.
// Bonus
// Schreibe eine Methode, um die Länge des person objects zu ermitteln.

const profi = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    profession: "Engineer",
    land: "France",
    printinfo: function(){
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.profession} living in ${this.land}`;
    },
    // getLength: function(){
    //     return 
    // }
    
};
console.log(profi.printinfo());
console.log(Object.keys(profi).length)

// const getLengthOfObject = (obj) => { 
//     let lengthOfObject = Object.keys(obj).length; 
//     console.log(lengthOfObject);
//   }