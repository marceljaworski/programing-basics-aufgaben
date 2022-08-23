# forEach() und map()

**1.** Schreiben Sie eine Funktion namens `doubleValues`, die ein Array akzeptiert und ein neues Array zurückgibt, in dem alle Werte verdoppelt sind.

Beispiele:
```
doubleWerte([1,2,3]) // [2,4,6]
doubleWerte([5,1,2,3,10]) // [10,2,4,6,20]
```

**2.** Schreiben Sie eine Funktion namens `onlyEvenValues`, die ein Array annimmt und ein neues Array zurückgibt, das nur die geraden Werte des Arrays enthält, das der Funktion übergeben wurde.

Beispiele:
```
nurGeradeWerte([1,2,3]) // [2]
nurGeradeWerte([5,1,2,3,10]) // [2,10]
```

**3.** Schreiben Sie eine Funktion namens `showFirstAndLast`, die ein Array von Zeichenketten akzeptiert und ein neues Array mit nur dem ersten und letzten Zeichen jeder Zeichenkette zurückgibt

Beispiele:

```js
showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
```

**4.** Schreiben Sie eine Funktion namens "vowelCount", die eine Zeichenkette annimmt und ein Objekt zurückgibt, dessen Schlüssel die Vokale und dessen Werte die Anzahl der Vorkommen des Vokals in der Zeichenkette sind. Diese Funktion sollte Groß- und Kleinschreibung nicht berücksichtigen, so dass sowohl Klein- als auch Großbuchstaben gezählt werden.

Beispiele:

```js
vowelCount('Elie') // {e:2, i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
```
