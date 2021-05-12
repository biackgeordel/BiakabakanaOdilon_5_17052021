var urlProduit = window.location.href;
var selectOption = document.querySelector("#couleur");
var option;
console.log(selectOption);
console.log(urlProduit);
urlProduit = new URL(urlProduit);
var id = urlProduit.searchParams.get("id");
var image = urlProduit.searchParams.get("image");
console.log(image);

console.log(id); /*
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
let imageTest = document.createElement("img");
imageTest.setAttribute("src", image);
document.body.append(imageTest);
