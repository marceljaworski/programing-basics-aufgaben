// Dein eigenes Math Objekt.
// Erstelle ein neues Objekt und lege es in einer Variable mit dem namen MyMath ab.
// Das Objekt soll die Methoden ceil, floor, pow, sqrt und abs des Math Objekts besitzen.
// Die Methoden sollen sich genau so verhalten wie die echten Math Methoden.
// Beispiel:
// MyMath.ceil(2.4) // Gibt 3 zurück
// MyMath.floor(2.4) -> // Gibt 2 zurück
// MyMath.pow(2,3) ->// Gibt 8 zurück
// MyMath.sqrt(16) -> // Gibt 4 zurück
// MyMath.abs(-1) -> // Gibt 1 zurück
// MyMath.abs(1) -> // Gibt 1 zurück

const MyMath = {
    pow: function (x, y) {
        let sum = x;
        sum *=  x
        return sum;

    }
}
console.log(MyMath.pow(2,3))