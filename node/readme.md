Gib doch mal mit console.log(process) die Variable process aus und schaue, was sich darin alles verbirgt. Hier stehen uns einige nützliche Informationen zur Verfügung (siehe auch https://nodejs.org/api/globals.html). Anschließend bearbeite die folgenden Aufgaben:
## Umgebung
------------------------
1. Entwickle eine Funktion, welche die aktuell genutzte Node-Version ausgibt.
2. Schreibe eine Funktion, die das Betriebssystem (und die Architektur) ausgibt.
3. Finde mit einer Funktion heraus, in welchem Pfad das Skript gerade ausgeführt wird.
4. Steuere den Aufruf der drei Funktionen über Argumente:
    - nutze Begriffe wie "node", "os" oder "directory", um die drei Funktionen zu identifizieren
    - schreibe zuerst so, dass nur eine Funktion pro Skriptaufruf ausgeführt wird
    - erweitere deinen Code so, dass du beliebig viele Begriffe übergeben kannst und diese dann die passenden Funktionen aufrufen
    - füge ein Argument "all" hinzu, welcher alle Funktionen ausführt
    - erweitere das Skript nach Belieben mit weiteren Funktionen und Argumenten
## Zeit
------------------------
1. Lege eine Funktion an, die die aktuelle Uhrzeit ausgibt
2. Erstelle eine Funktion, die das aktuelle Datum ausgibt
3. Steuere das Ausgabeformat über ein Argument (YYYY-MM-DD, hh:mm, DD.MM.YY)
## Countdown
------------------------
1. Entwickle eine Funktion, die einen Countdown ausgibt, der von 30 Sekunden herunterzählt. Jede Sekunde soll die verbleibende Zeit ausgegeben werden
2. Steuere den Countdown über ein Argument
3. Anstatt der Sekunden, lasse auch Minuten oder sogar Stunden zu. Überlege Dir, wie Du Sekunden von Minuten und Stunden unterscheiden kannst