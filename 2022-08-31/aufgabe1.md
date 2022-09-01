# Aufgabe 1
​
[Englische Version](https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj)
​
Erstellen Sie eine Funktion, die true zurückgibt, wenn das erste Array im zweiten verschachtelt werden kann.
​
arr1 kann innerhalb von arr2 verschachtelt werden, wenn:
​
-   arr1's kleinste Zahl größer ist als arr2's kleinste Zahl.
-   arr1's größte Zahl kleiner ist als arr2's größte Zahl.
​
## Beispiele:
​
```js
​
canNest([1, 2, 3, 4], [0, 6]) ➞ true
​
canNest([3, 1], [4, 0]) ➞ true
​
canNest([9, 9, 8], [8, 9]) ➞ false
​
canNest([1, 2, 3, 4], [2, 3]) ➞ false
​
```

# Aufgabe 2
​
[Englische Version](https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ)
​
Deine Aufgabe ist es, eine Kreis Klasse zu erstellen. Die konstruierten Kreise müssen zwei Methoden haben: getArea() (PI*r^2) und getPerimeter() (2*PI*r), die sowohl die jeweilige Fläche als auch den Umfang angeben.
​
## Examples
​
```js
let circy = new Circle(11);
circy.getArea(); // Should return 380.132711084365
​
let circy = new Circle(4.44);
circy.getPerimeter(); // Should return 27.897342763877365
```
Ausblenden




# Aufgabe 3
​
[Englische Version](https://edabit.com/challenge/ENWFBL4jbTgLbSqwS)
​
Erstellen Sie eine Funktion `makePlusFunction`, die eine "Basiszahl" als Argument annimmt. Diese Funktion sollte eine neue Funktion zurückgeben, die ein neues Argument annimmt und die Summe aus der "Basiszahl" und dem neuen Argument zurückgibt.
​
In den folgenden Beispielen wird das erwartete Verhalten klarer dargestellt.
​
## Beispiele
​
```js
const plusFive = makePlusFunction(5);
plusFive(2); // returns 7
plusFive(-8); // returns 3
​
const plusTen = makePlusFunction(10);
plusTen(0); // returns 10
plusTen(188); // returns 198
```
# Aufgabe 4
​
Wenn Sie ein gestreiftes Muster ausmalen, können Sie jedes Quadrat nacheinander färben, was bedeutet, dass Sie Zeit damit verbringen, die Farbstifte zu wechseln.
​
Erstelle eine Funktion, die bei einem Array von Farben zurückgibt, wie lange es dauert, das gesamte Muster zu färben. Beachten Sie die folgenden Zeiten:
​
Es dauert 1 Sekunde, um zwischen den Stiften zu wechseln.
Es dauert 2 Sekunden, um ein Quadrat zu färben.
​
​
## Beispiele
​
```js
​
colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]) // return 14
​
// Es gibt 5 Farben, also dauert es 10 Sekunden, jede Farbe zu färben (2 x 5 = 10).
// Man muss die Stifte 4 Mal wechseln und braucht dafür 4 Sekunden (1 x 4 = 4).
// 10 + 4 = 14
​
colorPatternTimes(["Blue"]) // return 2
​
colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) // return 11
​
colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) // return 13
​
```
​
## Info
Wechsle die Farbstifte nur, wenn die nächste Farbe eine andere ist als die vorherige.
Deine funktion sollte eine Zahl (Anzahl Sekunden) returnen.