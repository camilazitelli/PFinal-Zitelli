const carrito = []
console.log(carrito)
let divBrebaje = document.getElementById("brebaje");
let bebidaDisponible = fetch("/bebidas.json")
.then((res) => res.json())
.then((data) => {
    for (let bebidaAlcoholica of data) {
        let bebidaEnStock = document.createElement("div");
        bebidaEnStock.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${bebidaAlcoholica.imagen}" class="card-img-top" style="width: 250px">
        <div class="card-body">
            <h5 class="card-title">${bebidaAlcoholica.bebida}</h5>
            <p class="card-text">${bebidaAlcoholica.presentacion}</p>
            <p class="card-text">${bebidaAlcoholica.precio}</p>
        </div>
        </div>
        `;
    divBrebaje.appendChild(bebidaEnStock);
    }})