let cont = JSON.parse(localStorage.getItem("commandeContact"));
let prod=(localStorage.getItem("produit"));
let tab=[];
prod=prod.match(/[a-z0-9]+/g);
for(let k of prod ){
  tab.push(k);
}
console.log(prod);
let command={
  contact:{
    "firstName":`${cont.firstName}`,
    "lastName":`${cont.lastName}`,
    "address":`${cont.address}`,
    "city":`${cont.city}`,
    "email":`${cont.email}`,
  },
  products:tab
};
console.log("valeur"+JSON.stringify(command));
const test={
  contact:{
"firstName":"biakabzkana",
"lastName":"odilon geordel",
"address":"inconnue",
"city":"inconnue",
"email":"test",
},
products:tab
};

console.log( JSON.stringify(test));
fetch("http://localhost:3000/api/teddies/order",{
  method:"POST",
  headers:{
    'Accept':"application/json",
    'Content-Type':"application/json"
  },

  body:JSON.stringify(command)
    


}).then((response)=>{
  if(response.ok)
  console.log(response);
  return response.json();
  
}).then((value)=>{
  afficherCommande(value);
  console.log(value);
}).catch((error)=>{
  console.log(error);
});
function afficherCommande(info){
  let jumbotron=document.createElement("div");
  let div=document.createElement("div");

  document.querySelector(".container-command").appendChild(jumbotron);
  document.querySelector(".container-command").appendChild(div);

  jumbotron.innerHTML=`<div">
       <h2>Information sur la commade</h2>
  </div> `;


  div.innerHTML=`
  <p class="alert alert-success" role="alert">N° de la commande: ${info.orderId}</p>
  <div class="alert alert-info info-text" role="alert">
      <p>Nom: ${info.contact.firstName}</p>
      <p>Prenom: ${info.contact.lastName}</p>
      <p>Adresse mail: ${info.contact.email}</p>
      <p>Adresse: ${info.contact.address}</p>
      <p>Ville: ${info.contact.city}</p>
  </div>

  `;



}
 
