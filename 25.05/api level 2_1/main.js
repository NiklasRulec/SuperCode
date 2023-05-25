fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (i = 0; i < data.length; i++) {
      console.log(data[i]);
      const imgSrc = data[i].download_url;
      console.log(imgSrc);
      const imgAuthor = data[i].author;
      console.log(imgAuthor);

      // figure
      let figure = document.createElement("figure");

      //img
      let figureIMG = document.createElement("img");
      figureIMG.setAttribute("src", imgSrc);
      figureIMG.setAttribute("alt", imgAuthor);
      figure.appendChild(figureIMG);

      // author
      let figureAuthor = document.createElement("figcaption");
      figureAuthor.textContent = imgAuthor;
      figure.appendChild(figureAuthor);

      // figure in class "gallery"
      document.querySelector(".gallery").appendChild(figure);
    }
  });
