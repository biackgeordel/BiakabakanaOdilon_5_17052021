let tab;
let divProduit;
let resultat = 0;

if (localStorage.getItem("produitPanier") === null) {
  document.querySelector(".container").innerHTML =
    "<h2>Votre panier est vide</h2>";
} else {
  tab = JSON.parse(localStorage.getItem("produitPanier"));
  for (let produit of tab) {
    resultat += produit.quantite * produit.price;
    divProduit = document.createElement("div");
    divProduit.innerHTML = `<div>

    <img src=${produit.image}  alt="photo de la peluche ${produit.nom}"/></div>
    <div><p>${produit.nom}</p><p>${produit.description}</p></div>
    <div><strong>prix:${produit.price}</strong><strong> quantité:${
      produit.quantite
    }</strong></div>
    <div><strong>Prix total:${produit.quantite * produit.price}</strong></div>
    </div>`;

    document.querySelector(".container").appendChild(divProduit);
  }
  console.log(resultat);
}
