let validNom;
let validPrenom;
let valideAdress;
let validEmail;
let validCity;
function afficherFormulaire(tab) {
  if (tab !== null || tab.length !== 0) {
    let titre = document.createElement("h2");
    titre.innerText = "Information du client";
    let form = document.createElement("form");
    /* form.setAttribute("method", "GET");
    form.setAttribute("action", "commande.html");*/
    form.innerHTML = `
    
    <div class="form-row">
      <div class="col-md-4 mb-3">
        <label for="firstName">Nom</label>
        <input type="text" id="firstName"  class="form-control" placeholder="Votre nom" required>
        <div class="valid-feedback">
          
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <label for="lastName">Prenom</label>
        <input type="text" class="form-control" id="lastName" placeholder="Votre prenom"required>
        <div>
          
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <label for="email">Adresse mail</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend3">@</span>
          </div>
          <input type="email" class="form-control " id="email" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
          <div class="invalid-feedback">
          
          </div>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="adress">Adresse</label>
        <input type="adress" class="form-control " id="adress" placeholder="Votre adresse" required>
        <div class="invalid-feedback">
          
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <label for="city">Ville</label>
        <input type="text" class="form-control" id="city" placeholder="Le nom de la ville" required>
        <div class="invalid-feedback">
          
        </div>
      </div>
      
    </div>
    
    <button class="btn btn-primary" type="submit">Passer la commande</button><div></div>
  `;
    document.querySelector(".container").appendChild(titre);
    document.querySelector(".container").appendChild(form);
  } else {
    console.log("le tableau n'est pas disponible");
  }
}
afficherFormulaire(tab);
//verification du nom du client
document.querySelector("#firstName").addEventListener("input", function (e) {
  let regex = new RegExp(/^[a-zA-Z]+$/);
  let nomInput = "nom";
  validNom = validationElement(e, regex, nomInput);
  console.log(validNom);
});

//verification du prenom du client
document.querySelector("#lastName").addEventListener("input", function (e) {
  let regex = new RegExp(/^[a-zA-Z]+(\s[a-zA-Z]+)?$/);
  let nomInput = "prenom";
  validPrenom = validationElement(e, regex, nomInput);
  console.log(validPrenom);
});
//verification du nom de la ville saisi par le client
document.querySelector("#city").addEventListener("input", function (e) {
  let regex = new RegExp(/^[a-zA-Z]+[\sa-zA-Z]+[a-zA-Z]$/);
  let nomInput = "ville";
  validCity = validationElement(e, regex, nomInput);
  console.log(validCity);
});
document.querySelector("#adress").addEventListener("input", function (e) {
  let regex = new RegExp(/^[0-9]{1,4}[,\s]{1}[-,\sa-zA-Z]{10,}$/);
  let nomInput = "adresse";
  valideAdress = validationElement(e, regex, nomInput);
  console.log(valideAdress);
});

//verification de l'adresse email du client
document.querySelector("#email").addEventListener("input", function (e) {
  let regex = new RegExp(/^[a-z]+[a-z0-9\-]+@[a-z]+[.][a-z]{2,}$/);
  let nomInput = " adresse email";
  validEmail = validationElement(e, regex, nomInput);
  console.log(validEmail);
});

//*****************fonction pour verifier les données saisies par le client*************** */
function validationElement(e, regex, nomInput) {
  let selectId = e.target.getAttribute("id");
  let test;
  selectId = "#" + selectId;
  if ((test = regex.test(e.target.value)) && e.target.value.length >= 3) {
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-invalid");
  } else {
    e.target.classList.remove("is-valid");
    e.target.classList.add("is-invalid");
  }
  if (test) {
    document
      .querySelector(selectId + "+div")
      .classList.remove("invalid-feedback");
    document.querySelector(selectId + "+div").classList.add("valid-feedback");
    document.querySelector(selectId + "+div").innerText =
      "Votre " + nomInput + " saisi est valide";
    return test;
  } else {
    document.querySelector(selectId + "+div").classList.add("invalid-feedback");
    document.querySelector(selectId + "+div").innerText =
      "Votre " + nomInput + " n'est pas valide ";
    test = false;
    return test;
  }
}
/****************************************************************************** */
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  if (validCity && validEmail && validNom && validPrenom && valideAdress) {
    document.querySelector(".btn+div").innerText = " ";
    window.setTimeout(function () {
      window.location.href = "commande.html";
    }, 300);
  } else {
    document.querySelector(".btn+div").style.color = "red";
    document.querySelector(".btn+div").innerText =
      "Impossible d'envoyer le formulaire";
    console.log(document.querySelector(".btn+div").innerText);
  }
});
