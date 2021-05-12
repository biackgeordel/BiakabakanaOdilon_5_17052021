const url = "http://localhost:3000/api/teddies";
let div = document.createElement("div");
let img = document.createElement("img");

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((value) => {
    console.log(value);
    img.setAttribute("src", value[0].imageUrl);
    div.appendChild(img);
    document.body.appendChild(div);
  });
