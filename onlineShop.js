// # Mini Online-Shop
// ​
// **Diese Übung behandelt die JavaScript-Konzepte von Klassen und Instanzen**
// ​
// Ihre Aufgabe ist es, eine Produkt- und Warenkorbklasse zu erstellen, die einen Online-Shop repräsentiert.
// ​
// ---
// ## 1. Produkt
// ​
// Schreiben Sie eine Klasse `Product`, die 2 Eigenschaften haben sollte
// ​
// -   `name` als string
// -   `price` als number
// ​
// Der Konstruktor sollte 2 Parameter annehmen, die diese Eigenschaften initialisieren. Zum Beispiel
// ​
// ```js
// const trainingsanzug = new Product("Adidas Trainingsanzug", 150);
// const schuhe = new Product("Puma Laufschuhe", 80);
// const socken = new Product("Sockenset", 5);
// ```
// ​
// Die Klasse sollte auch 2 Methoden haben
// ​
// -   `toText()` - gibt einen String mit dem Produktnamen, dem Bruttopreis und der enthaltenen Mehrwertsteuer zurück.
// -   `containedVAT()` - gibt 19% des Produktpreises als Mehrwertsteuer MwSt. zurück
// ​
// ```js
// trainingsanzug.toText(); // Adidas Trainingsanzug 150,00 €. Enthält 28,50 € MwSt. (19%).
// tracksuit.containedVAT(); // 28,50 € MwSt.
// ```
class Product {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }
    toText() {
        return`${this.name} - ${this.price}$. Enthalt ${this.price * 0.19}$MwSt. (19%).`};
    constainedVAT(){
        return ` ${this.price* 0.19}$ MwSt. (19%).`;
    }
    
}

const trainingsanzug = new Product("Adidas Trainingsanzug", 150);
const schuhe = new Product("Puma Laufschuhe", 80);
const socken = new Product("Sockenset", 5);

console.log(trainingsanzug);
console.log(schuhe);
console.log(socken);
class Cart {
    constructor (){
        this.products = [];
    }
    addProduct(shoppedProduct) {
        if(!(shoppedProduct instanceof Product)){
            
            return "das Produkt nicht im Shop verfügbar ist"
        }
        this.products.push(shoppedProduct);
        return `Ihr Warenkorb enthalt jetzt ${this.products.length} Produkt(e)`;
    }
    getProductInfoCart(){
        this.products.forEach((product) => {
            return product.toText();
        });
    }
    getTotalItemsPrice(){
        const totalPrice = this.products.reduce((prev, curr)=>{
            return prev + curr.price;

        }, 0);
        return `Der Gesamtbetrag fur ${this.products.length} Artikel in Ihrem Warenkorb betragt ${totalPrice}$.`
        
    }
}
// ## 2. Warenkorb
// ​
// Schreiben Sie eine weitere Klasse `Cart`, die eine Eigenschaft haben sollte
// ​
// -   `products`, ein Array von Produkten
// ​
// Bei der Erstellung einer Instanz von Cart wird es keine Produkte geben, also ist das Array leer. Ihr Konstruktor wird keine Parameter entgegennehmen.
// ​
// Erstellen Sie zwei Methoden für die Cart-Klasse:
// ​
// -   `addProduct(shoppedProduct)`, die einen Parameter annimmt
//     -   Die Methode sollte zuerst testen, ob `shoppedProduct` eine Instanz der Klasse `Product` ist [mdn instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
//     -   wenn `shoppedProduct` eine Instanz von Product ist, wird es zum Array der Produkte hinzugefügt und ein String mit der Anzahl der Produkte im Warenkorb zurückgegeben.
//     -   wenn `shoppedProduct` keine Instanz von Product ist, wird ein String zurückgegeben, der angibt, dass das Produkt nicht im Shop verfügbar ist
// -   `getProductInfoCart()`, die keine Parameter benötigt
//     -   die Methode sollte über das Array der Produkte iterieren
//     -   für jedes in der Liste enthaltene Produkt die Methode `toText()` aufrufen und auf der Konsole ausgeben.
// -   `getTotalItemsPrice()`, die keine Parameter benötigt
//     -   Die Methode sollte über das Array der Produkte iterieren und den Gesamtpreis der Artikel, die sich derzeit im Einkaufswagen befinden, berechnen und ihn als String zurückgeben
// ​

// ## 3. Testen Sie Ihren Warenkorb mit Produkten
// ​
// Hinweis: Sie müssen eventuell `console.log()` verwenden, um zu sehen, was zurückgegeben wurde.
// ​
// Erstellen Sie zunächst eine Instanz von Cart und legen Sie Ihre Produkte in den Einkaufswagen. Zum Beispiel:
// ​
// ```js
// const cart = new Warenkorb();
// cart.addProduct("Kartoffel"); // Diese ist in unserem Shop nicht verfügbar!
// cart.addProduct(trainingsanzug); // Ihr Warenkorb enthält jetzt 1 Produkt
// cart.addProduct(schuhe); // Ihr Warenkorb enthält jetzt 2 Produkte
// cart.addProduct(socken); // Ihr Warenkorb enthält jetzt 3 Produkte
// ```
// ​
// Rufen Sie dann die Methoden `getProductInfoCart()` und `getTotalItemsPrice()` des Warenkorbs auf. Zum Beispiel:
// ​
// ```js
// cart.getProductInfoCart();
// // Adidas Trainingsanzug 150,00 €. Enthält 24.00 € MwSt. (19%).
// // Puma Laufschuhe 80,00 €. Enthält 12,80 € MwSt. (19%).
// ​
// cart.getTotalItemsPrice();
// // Der Gesamtbetrag für 2 Artikel in Ihrem Warenkorb beträgt 230,00 €.
// ```
// -   `toText()` - gibt einen String mit dem Produktnamen, dem Bruttopreis und der enthaltenen Mehrwertsteuer zurück.
// -   `containedVAT()` - gibt 19% des Produktpreises als Mehrwertsteuer MwSt. zurück
// ​
// ```js
// trainingsanzug.toText(); // Adidas Trainingsanzug 150,00 €. Enthält 28,50 € MwSt. (19%).
// tracksuit.containedVAT(); // 28,50 € MwSt.
// ```
// ​
// ## 2. Warenkorb
// ​
// Schreiben Sie eine weitere Klasse `Cart`, die eine Eigenschaft haben sollte
// ​
// -   `products`, ein Array von Produkten
// ​
// Bei der Erstellung einer Instanz von Cart wird es keine Produkte geben, also ist das Array leer. Ihr Konstruktor wird keine Parameter entgegennehmen.
// ​
// Erstellen Sie zwei Methoden für die Cart-Klasse:
// ​
// -   `addProduct(shoppedProduct)`, die einen Parameter annimmt
//     -   Die Methode sollte zuerst testen, ob `shoppedProduct` eine Instanz der Klasse `Product` ist [mdn instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
//     -   wenn `shoppedProduct` eine Instanz von Product ist, wird es zum Array der Produkte hinzugefügt und ein String mit der Anzahl der Produkte im Warenkorb zurückgegeben.
//     -   wenn `shoppedProduct` keine Instanz von Product ist, wird ein String zurückgegeben, der angibt, dass das Produkt nicht im Shop verfügbar ist
// -   `getProductInfoCart()`, die keine Parameter benötigt
//     -   die Methode sollte über das Array der Produkte iterieren
//     -   für jedes in der Liste enthaltene Produkt die Methode `toText()` aufrufen und auf der Konsole ausgeben.
// -   `getTotalItemsPrice()`, die keine Parameter benötigt
//     -   Die Methode sollte über das Array der Produkte iterieren und den Gesamtpreis der Artikel, die sich derzeit im Einkaufswagen befinden, berechnen und ihn als String zurückgeben
// ​
// ## 3. Testen Sie Ihren Warenkorb mit Produkten
// ​
// Hinweis: Sie müssen eventuell `console.log()` verwenden, um zu sehen, was zurückgegeben wurde.
// ​
// Erstellen Sie zunächst eine Instanz von Cart und legen Sie Ihre Produkte in den Einkaufswagen. Zum Beispiel:
// ​
// ```js
// const cart = new Warenkorb();
// cart.addProduct("Kartoffel"); // Diese ist in unserem Shop nicht verfügbar!
// cart.addProduct(trainingsanzug); // Ihr Warenkorb enthält jetzt 1 Produkt
// cart.addProduct(schuhe); // Ihr Warenkorb enthält jetzt 2 Produkte
// cart.addProduct(socken); // Ihr Warenkorb enthält jetzt 3 Produkte
// ```
// ​
// Rufen Sie dann die Methoden `getProductInfoCart()` und `getTotalItemsPrice()` des Warenkorbs auf. Zum Beispiel:
// ​
// ```js
// cart.getProductInfoCart();
// // Adidas Trainingsanzug 150,00 €. Enthält 24.00 € MwSt. (19%).
// // Puma Laufschuhe 80,00 €. Enthält 12,80 € MwSt. (19%).
// 
// ​cart.getTotalItemsPrice();
// Der Gesamtbetrag für 2 Artikel in Ihrem Warenkorb beträgt 230,00 €.
// ```
