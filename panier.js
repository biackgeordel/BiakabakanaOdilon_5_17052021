//la fonction recupProduit permet de recuperer les produits stockés dans le localStorage
console.log(localStorage.getItem("produitPanier"));
function recupProduit() {
  if (localStorage.getItem("produitPanier") === null) {
    return null;
  } else {
    return JSON.parse(localStorage.getItem("produitPanier"));
  }
}
//on crée un tableau tab  pour stocker les produits
let tab = recupProduit();

//afficherPanier() permet d'afficher les produits dans un tableau dans la page panier.html
function afficherPanier(tab) {
  let bodyTable = document.querySelector(".body-tab");
  let footTable = document.querySelector(".foot-tab");
  let resultat = 0;
  let c;
  if (tab === null || tab.length === 0) {
    document.querySelector(".container").innerHTML =
      "<h2>Votre panier est vide</h2>";
  } else {
    bodyTable.innerHTML = "";
    for (let i = 0; i < tab.length; i++) {
      tab[i].quantite === 1 ? (c = "X") : (c = "-");

      resultat += tab[i].quantite * tab[i].price;
      bodyTable.innerHTML += `
      <tr>
        <td>
           <img  class=" img-tab" src="${tab[i].image}"/>
           <br/>${tab[i].nom}
        </td>
        <td class="nom">
            ${tab[i].couleur}
        </td>
        <td>
        <div class="container-btn">
        <button class=produit-${i}${i}>+</button>
        <button class=produit-${i}>${c}</button>
        <input class="val" 
        type="text"value="${tab[i].quantite}" id="${tab[i].id}"/>
               
      </div>
        </td>
        <td>${tab[i].price}€</td>
        <td>${tab[i].quantite * tab[i].price}€</td>
      </tr>`;
    }
    footTable.innerHTML = ` <tr>
    <th scope="row">Total de la commande:
    <th>
    <td  class="resultat" colspan=3>${resultat} €</td>
    </tr>`;
  }
}

//permet de modifier la quantité en fonction de l'event change
document.querySelector(".body-tab").addEventListener("change", (e) => {
  console.log(
    "la quantite" + e.target.value + "est id:" + e.target.getAttribute("id")
  );
  let id = e.target.getAttribute("id");
  if (!isNaN(id) || id < 0) {
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].id === id) {
        tab[i].quantite = e.target.value;
      }
    }
    afficherPanier(tab);
    localStorage.setItem("produitPanier", JSON.stringify(tab));
    incrementerCompteur();
  } else {
    afficherPanier(tab);
  }
});
//permet de modifier la quantité en fonction de l'event click
document.querySelector(".body-tab").addEventListener("click", function (e) {
  e.stopPropagation();
  try {
    let mini;
    let idProduit;
    let operation;
    let test = e.target.getAttribute("class");
    test = "." + test;
    operation = document.querySelector(test);
    if (operation.textContent === "+") {
      idProduit = document
        .querySelector(test + "+button+input")
        .getAttribute("id");

      console.log(idProduit);
      mini = parseInt(document.querySelector(test + "+button+input").value, 10);
      mini++;
      document
        .querySelector(test + "+button+input")
        .setAttribute("value", mini);
      console.log(tab); //tab des produits
      for (let i = 0; i < tab.length; i++) {
        if (tab[i].id === idProduit) tab[i].quantite = mini;
        afficherPanier(tab);
      }
    } else if (operation.textContent === "-") {
      idProduit = document.querySelector(test + "+input").getAttribute("id");
      mini = parseInt(document.querySelector(test + "+input").value, 10);

      if (mini !== 1) {
        mini--;
        document.querySelector(test + "+input").setAttribute("value", mini);
        for (let i = 0; i < tab.length; i++) {
          if (tab[i].id === idProduit) tab[i].quantite = mini;
          afficherPanier(tab);
        }
      }
    } else if (operation.textContent === "X") {
      console.log("supprimer le produit");
      idProduit = document.querySelector(test + "+input").getAttribute("id");

      for (let i = 0; i < tab.length; i++) {
        if (tab[i].id === idProduit && tab[i].quantite === 1) {
          tab.splice(i, 1);
          afficherPanier(tab);
        }
      }
    }
    console.log("taille" + tab.length);
    localStorage.setItem("produitPanier", JSON.stringify(tab)); //nouveau tab dans le localStorage
    incrementerCompteur();
  } catch (error) {
    console.log(error);
  }
});
window.addEventListener("load", function (e) {
  console.log(e.target);
  afficherPanier(tab);
});
//test avant modules
function incrementerCompteur() {
  let compteur = 0;
  let tab;
  if (localStorage.getItem("produitPanier") !== null) {
    tab = JSON.parse(localStorage.getItem("produitPanier"));
    for (let i = 0; i < tab.length; i++) {
      compteur += parseInt(tab[i].quantite, 10);
    }
    console.log("valeur compteur" + compteur);
    localStorage.setItem("compteur", compteur);
    document.querySelector(".bulle").innerText = `${localStorage.getItem(
      "compteur"
    )}`;
  }
}
