# Pokemon Lite
​
Versuche, eine vereinfachte Version von Pokemon zu erstellen!
​
## Funktionsweise:
​
-   Du solltest eine Pokemon Klasse haben. Jedes Pokemon hat einen Namen (string), Gesundheit (number), Magie (number) und eine Reihe von Fähigkeiten (die Fähigkeiten können in einem Array oder Objekt gespeichert werden).
-   Du solltest eine AttackSkill Klasse haben, um neue Angriffe zu erstellen. Angriffe verbrauchen die Magie des Pokemons, um anderen Pokemon Schaden zuzufügen. Jedes einzelne Pokemon hat eine bestimmte Anzahl von Angriffen. Der Konstruktor der AttackSkill Klasse sollte drei Argumente enthalten: den Namen der Attacke (string), die Höhe des Schadens (number), den die Attacke verursacht, und die Menge der Magie (number), die die Attacke benötigt. Zum Beispiel erstellen wir hier einen "lightning"-Angriffs-Skill, der 40 Schaden verursacht und 30 Magie benötigt:
​
```javascript
let lightning = new AttackSkill("lightning", 40, 30);
```
​
Diese Zahlen müssen nicht korrekt sein oder den echten Pokemon-Zahlen entsprechen - du kannst sie einfach erfinden.
​
-   Ein Pokemon hat keine Fähigkeiten, wenn es erstellt wird. Es muss die Methode learnAttackSkill verwenden, um eine neue Fähigkeit zu erlernen. Die Methode learnAttackSkill sollte ein Attackenobjekt als Argument erhalten und es dann intern zum Array "skills" des Pokemons hinzufügen. Hier ist ein Beispiel, wie man zuerst eine Fähigkeit erstellt und sie dann einem Pokemon hinzufügt:
​
```javascript
let lightning = new AttackSkill("lightning", 40, 30);
pikachu.learnAttackSkill(lightning);
```
​
-   Dein Pokemon sollte eine Methode namens showStatus haben, die seinen Status auf der Konsole protokolliert (wie viel Gesundheit und Magie übrig ist).
-   Dein Pokemon sollte eine Methode namens attack haben, die eine der Angriffsfähigkeiten des Pokemons auswählt, um ein anderes Pokemon anzugreifen. Dies ist seine wichtigste Methode! Berücksichtige alle Möglichkeiten, die diese Methode bietet. (z.B. was ist, wenn das Pokemon nicht genug Magie hat, um die Angriffsfähigkeit einzusetzen?) Die Angriffsmethode sollte eine der Attacken des Pokemons aufrufen und auf das andere Pokemon anwenden. Wenn du also zum Beispiel die Attacke "lightning" aufrufst (die wir oben erstellt haben), sollte sie dem anderen Pokemon 40 Schaden zufügen und dem Pokemon, das den Angriff ausgeführt hat, 30 Magie entziehen. Die Attack-Methode sollte zusätzlich in console.log ausgeben, ob der Angriff erfolgreich war (mit anderen Worten, ob das angreifende Pokemon genug Magie hatte, um den Angriff tatsächlich auszuführen), und das Ergebnis des Angriffs. Die Angriffsmethode sollte zwei Argumente erhalten: den Namen des AttackSkill, der verwendet werden soll, und das Pokemon-Objekt, das angegriffen werden muss. Zum Beispiel wird hier ein Angriff von Pikachu auf Bulbasaur aufgerufen:
​
```javascript
pikachu.attack("lightning", bulbasaur);
```
​
-   Schließlich erstellen Sie eine Methode namens getMagic, um Ihrem Pokemon etwas Magie zurückzugeben (Sie können genau wählen, wie viel Magie zurückgegeben werden soll).
​
Zum Beispiel, die folgende Sequenz:
​
```javascript
// Jedes Pokemon sollte mit einer bestimmten Menge an Gesundheit und Magie starten. Zum Beispiel, hier Pikachu beginnt mit 120 Gesundheit und 80 Magie
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
​
// Jede Fähigkeit sollte eine bestimmte Menge Schaden verursachen und eine bestimmte Menge Magie von dem Pokemon verbrauchen, das die Fähigkeit benutzt hat.
let lightning = new AttackSkill("lightning", 40, 30);
let poison = new AttackSkill ("poison", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poison);
​
// Das erste Argument von `attack` sollte der Index (oder Schlüssel) des Angriffs sein
pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poison", pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack("lightning", bulbasaur);
pikachu.attack("lightning", bulbasaur);
pikachu.getMagic();
pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poison", pikachu);
​
// sollte folgendes auf der Konsole ausgeben:
​
// Pikachu hat die Fähigkeit 'lightning' erfolgreich eingesetzt!
// Bulbasaurus hat 40 Schaden erhalten
-------------------
// bulbasaur hat die Fertigkeit 'poison' erfolgreich eingesetzt!
// Pikachu hat 20 Schaden erhalten
-------------------
// Pikachu-Status
// Gesundheit: 100
// Magie: 50
-------------------
// bulbasaur status
// Gesundheit: 55
// Magie: 85
-------------------
// Pikachu hat die Fähigkeit 'lightning' erfolgreich eingesetzt!
// Bulbasaur erhielt 40 Schaden
-------------------
// nicht genug Magie, kann keinen Angriff starten!
-------------------
// Pikachu hat 20 Magie zurückbekommen
-------------------
// Pikachu hat die Fähigkeit 'lightning' erfolgreich eingesetzt!
// Bulbasaur hat 40 Schaden erhalten
-------------------
// Bulbasaurus ist tot!
-------------------
// Bulbasaurus ist bereits tot!
​
```
​
## Bonus: Füge weitere Pokemon und Angriffstypen hinzu.