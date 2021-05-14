let urlProduit = window.location.href;
let selectOption = document.querySelector("#couleur");
let option;

urlProduit = new URL(urlProduit);
//recuperation des paramètres
let id = urlProduit.searchParams.get("id");
let image = urlProduit.searchParams.get("image");
let color = urlProduit.searchParams.get("color");
let description = urlProduit.searchParams.get("description");
console.log(description);
let price = urlProduit.searchParams.get("price");

//la balise  contenant le produit
let imageProduit = document.querySelector(".card-img-top");
imageProduit.setAttribute("src", image);
//balise contenant la description du produit
let descriptionProduit = document.querySelector(".card-text");
descriptionProduit.innerText = `${description}`;

//expression reguliere pour recuperer les couleurs dans string color
let regex = /[a-z|A-Z]+/g;
//tab qui va stocker les couleurs
let tab;
//on recuperer les couleurs dans le tableau
tab = color.match(regex);
console.log(tab.length);
console.log(tab);
for (couleur of tab) {
  option = document.createElement("option");
  option.innerText = `${couleur}`;
  selectOption.appendChild(option);
}
/*
fetch("http://localhost:3000/api/teddies")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((value) => {
    for (let i = 0; i < value.length; i++) {
      if (value[i]._id == id) {
        var div = document.createElement("div");
        div.innerHTML = `<p>${value[i].name}</p><br/>
        <p><img src="${value[i].imageUrl}"/></p><p>${value[i].description}</p>`;
        document.body.appendChild(div);
        for (let k = 0; k < value[i].colors.length; k++) {
          option = document.createElement("option");
          option.innerText = value[i].colors[k];
          console.log(option);
          selectOption.append(option);
        }
      }
    }
  })
  .catch((error) => {
    console.log(error);
  });*/
