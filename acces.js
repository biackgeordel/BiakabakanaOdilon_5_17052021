const url = "http://localhost:3000/api/teddies";
let bloc = document.createElement("div");
bloc.classList.add("container");
let sectionArticle = document.querySelector("#sectionArticle");

console.log(bloc);

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((value) => {
    console.log(value);
    for (element of value) {
      let article = document.createElement("article");
      let lien = document.createElement("a");
      lien.setAttribute(
        "href",
        `./produit.html?name=${element.name}&id=${element._id}&color=${element.colors}&price=${element.price}&image=${element.imageUrl}`
      );
      lien.innerHTML = `<img src="${element.imageUrl}"/><span>${element.name}</span>`;
      article.appendChild(lien);
      bloc.appendChild(article);
    }
  })
  .catch((error) => {
    console.log("impossible de se connecter");
  });
sectionArticle.appendChild(bloc);
