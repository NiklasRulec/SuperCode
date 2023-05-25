// ! ++++++++++ API ++++++++++
// * eine API ist eine Schnitstelle zwischen Front und Backend
// * eine API kommuniziert in der Regel mit einem Server der widerum mit Daten antwortet

// - ++++++++++ JSON ++++++++++
// * JSON ( Javascript Object Notation) ist eine gängige Form um Daten zu speichern
// * Unterstützt verschiedene Datentypen wie zb. String, Zahlen, Boolean, Arrays, Objekte und null
// * Hierarchische Struktur : Objekte können andere Objekte oder Arrays enthalten und Arrays können widerum andere Objekte, Arrays oder einzelne Werte enthalten.
// * Gibt es in verschiedenen Sprachen
// * Weit verbreitet wird häufig für Datenaustausch benutzt
// * Google Chrome Plugin : "JSON Formatter"

// - So sieht ein JSON aus

// {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     "images": [
//       "https://i.dummyjson.com/data/products/1/1.jpg",
//       "https://i.dummyjson.com/data/products/1/2.jpg",
//       "https://i.dummyjson.com/data/products/1/3.jpg",
//       "https://i.dummyjson.com/data/products/1/4.jpg",
//       "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//     ]
//   }

// ! ++++++++++ Promise & fetch ++++++++++

fetch("./fakeData.json");

// $ 1 ein fetch ist eine Promise

// $ 2 eine Promise ist ein Objekt

// * A. eine Promise ist ein Versprechen, dass den eventuellen Abschluss representiert. Der kann erfolgreich oder nicht erfolgreich sein. Aber er gibt auf jeden Fall was zurück.

// * B. eine Promise hat drei Zustände
// * <pending> (wir haben noch keine Antwort erhalten)
// * <resolved> (wir haben eine Antwort erhalten, wir bekommen die Daten)
// * <rejected> (wir haben eine Antwort erhalten, wir haben einen Fehler erhalten)

// $ 3 fetch ist asynchron, heißt es läuft paralell und andere Funktionen müssen nicht warten bis der fetch fertig ist.

// $ 4 Eine Promise kann mit der Methode fetch() und catch() behandelt werden, um auf das Ergebnis oder Fehler zu reagieren.

// : --> "then()" - Methode wird aufgerufen, wenn die Promise erfolgreich war. Sie nimmt eine Funktion entgegen, die das Ergebnis des Promises verarbeiten.

// : --> "catch()" - Methode wird aufgerufen, wenn die Promise nicht erfolgreich war. Sie nimmt eine Funktion entgegen, die den Fehler des Promises beinhalted.

// ! ++++++++++ Lokale Daten fetchen ++++++++++

fetch("./fakeData.json")
  // - Wir können nicht auf die Daten (body) zugreifen, da wir json benötigen
  //   .then((response) => console.log(response));
  .then((response) => response.json())
  //   Die JSON Daten befinden sich nun in "data" und können genutzt werden (data ist frei definierbar)
  .then((data) => {
    console.log(data); // Hier sind die Daten vorhanden!!
  })
  .catch((error) => {
    console.log("Fehler beim laden.", error);
  });

// ! ++++++++++ API'S fetchen ++++++++++

// * Mit der Fetch Methode fragen wir Daten beim Server an, wenn wir es nicht anders definieren, machen wir automatisch eine get request
// * Wir nutzen die URL/den Endpoint der API, je nachdem wie die URL aussieht, bekommen wir unterschiedliche Daten ausgegeben.
// * Wie die URL aussehen muss, steht in der DOKUMENTATION (!)

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // console.log(data.products[0].title);

    const products = data.products;

    products.forEach((singleProduct) => {
      const name = singleProduct.title;
      const description = singleProduct.description;
      const price = singleProduct.price;
      const img = singleProduct.images[0];
      const id = singleProduct.id;

      // erstellt ein div
      let productItem = document.createElement("div");

      //   Title
      let titleOfProduct = document.createElement("h2");
      titleOfProduct.textContent = name;
      productItem.appendChild(titleOfProduct);

      // Beschreibung
      let descriptionOfProduct = document.createElement("p");
      descriptionOfProduct.textContent = description;
      productItem.appendChild(descriptionOfProduct);

      // Preis
      let priceOfProduct = document.createElement("h5");
      priceOfProduct.textContent = price + " €";
      productItem.appendChild(priceOfProduct);

      // IMG
      let image = document.createElement("img");
      image.setAttribute("src", img);
      image.setAttribute("alt", name);
      productItem.appendChild(image);

      // Schreibt das div in die class "products"
      document.querySelector(".products").appendChild(productItem);

      let moreInfo = document.createElement("button");
      moreInfo.textContent = "Mehr Info";

      moreInfo.addEventListener("click", () => {
        fetch("https://dummyjson.com/products/" + id)
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => {
            console.log("Fehler", err);
          });
      });
      productItem.appendChild(moreInfo);
    });
  })
  .catch((error) => {
    console.log("Fehler beim laden", error);
  });
