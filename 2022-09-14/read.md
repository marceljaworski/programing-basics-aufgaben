#  Zeitmaße Umwandeln
​
1. Erstelle Sie eine Funktion namens zeitConverter.
2. Die Function muss drei parameter erhalten, `fromType` einen String, `toType` einen String und `time` eine Zahl. 
3. Gültige `fromType` und `toType` Werte sind: millisecond, second, minute, hour
​
## Example:
​
```js
​
zeitConverter("millisecond", "minute", 120000) // => 2
zeitConverter("minute", "millisecond", 2) // => 120000
zeitConverter("hour", "millisecond", 1) // => 3600000
​
```
​
## Notes
​
- Benutz die Methode console.error wenn ein falscher Parameter verwendet wurde.
​
​
### Bonus
​
- Erweitern Sie Ihre Funktion, um auch Tage und Jahre umzuwandeln.