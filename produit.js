let urlProduit = window.location.href;
console.log(urlProduit);
//balise select qui va contenir les couleur
let selectOption = document.querySelector("#couleur");
let option;
//on crée une instance url
urlProduit = new URL(urlProduit);
//recuperation des paramètres
let id = urlProduit.searchParams.get("id");
let nom = urlProduit.searchParams.get("name");
let image = urlProduit.searchParams.get("image");
let color = urlProduit.searchParams.get("color");
let description = urlProduit.searchParams.get("description");
let price = urlProduit.searchParams.get("price") / 100;

//balise contenant le nom du produit
let nomProduit = document.querySelector(".nomProduit");
nomProduit.innerText = `${nom}`;

//balise contenant le prix du produit
let priceProduit = document.querySelector(".priceProduit");
priceProduit.innerHTML = `<strong>Prix : ${price} euros</strong>`;
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
let compteur;
//bouton pour ajouter des produits dans le panier
document.querySelector(".btn-panier").addEventListener("click", (e) => {
  e.target.innerText = "produit ajouté";
  e.stopPropagation;
  envoiProduit(nom, price, description, id);
  if (localStorage.getItem("compteur") === null) {
    compteur = 0;
    compteur++;
    localStorage.setItem("compteur", compteur);
    document.querySelector(".bulle").innerText = `${localStorage.getItem(
      "compteur"
    )}`;
  } else {
    compteur = parseInt(localStorage.getItem("compteur"), 10);
    compteur++;
    localStorage.setItem("compteur", compteur);
    document.querySelector(".bulle").innerText = `${localStorage.getItem(
      "compteur"
    )}`;
  }
});
document.querySelector(".bulle").innerText = `${localStorage.getItem(
  "compteur"
)}`;
document.querySelector(".btn-panier").addEventListener("blur", (e) => {
  e.target.innerText = "Ajouter au panier";
  e.stopPropagation;
});

//test localStorage
localStorage.setItem("test", "bonjour les amis ");
console.log(localStorage.getItem("test"));
let tabs = ["odilon", "geordel", "1224", "Geordel"];
localStorage.setItem("name", tabs);
const tabl = localStorage.getItem("name").match(regex);
localStorage.setItem("name1", JSON.stringify(tabs));
const tab1 = JSON.parse(localStorage.getItem("name1"));
console.log(tabl);
console.log("valeur de tab1 :" + tab1.length);
let s = "2";
console.log(typeof s);
s = parseInt(s, 10);
console.log(typeof s);
console.log(s);
console.log(localStorage.getItem("compteur"));
let el1 = {
  id: 122555,
  nom: "odilon",
  count: 2,
};
let el2 = {
  id: 12556,
  nom: "georges",
  count: 1,
};
let tab3 = [];
tab3.push(el1);
tab3.push(el2);
console.log(tab3);
localStorage.setItem("produit", JSON.stringify(tab3));
localStorage.setItem("id", JSON.stringify(el1));
let v = JSON.parse(localStorage.getItem("id"));
console.log(v.nom);
let tab4 = JSON.parse(localStorage.getItem("produit"));
console.log("le tableau de produit" + tab4);
let resul = 0;
for (let v of tab4) {
  console.log("id :" + v.id + " nom :" + v.nom + " count :" + v.count);
  resul += v.count;
}
console.log(resul);

//ajout des produits dans le panier
function envoiProduit(nom, price, description, id) {
  let tab = [];
  let prod = {
    id: nom,
    price: price,
    description: description,
  };
  if (localStorage.getItem("produitPanier") == null) {
    tab.push(prod);
    localStorage.setItem("produitPanier", JSON.stringify(tab));
  } else {
    tab = JSON.parse(localStorage.getItem("produitPanier"));
    for (produit of tab) {
      if (produit.id === prod.id) {
        console.log("le produit existe deja");
      } else {
        console.log("le produit n'existe pas");
      }
    }
  }
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
