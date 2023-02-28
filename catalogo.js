var imggin = document.createElement('img');
imggin.src = "imagenes/gin.jpg";
imggin.style.width = "200px";
imggin.style.height = "300px";

var imgAperol = document.createElement('img');
imgAperol.src = "imagenes/Aperol.jpg";
imgAperol.style.width = "200px";
imgAperol.style.height = "300px";

var imgcynar = document.createElement('img');
imgcynar.src = "imagenes/cynar.jpg";
imgcynar.style.width = "200px";
imgcynar.style.height = "300px";

var imgfernet = document.createElement('img');
imgfernet.src = "imagenes/Fernet.jpg";
imgfernet.style.width = "200px";
imgfernet.style.height = "300px";

const todasLasBebidas = [
    {nombre: 'Gin', precio: "2500"},
    {nombre: 'Fernet', precio: "1900"},
    {nombre: 'Aperol', precio: "1700"},
    {nombre: 'Cynar', precio: "1500"},
    {nombre: 'Gancia', precio: "900"},
]

let busquedaDeBebida = document.getElementById("buscarbebida");
busquedaDeBebida.addEventListener("submit", realizarBusqueda);
function realizarBusqueda(e){
e.preventDefault();
let busqueda = e.target
const resultado = todasLasBebidas.find((bebida) => bebida.nombre.toLowerCase() === busqueda.children[0].value.toLowerCase());
let devolucion = document.createElement ("p");
devolucion.innerHTML = (JSON.stringify(resultado) || "no hay existencias")
document.body.append(devolucion);
if (resultado.nombre == "Gin") {
    document.body.appendChild(imggin)
} 
if (resultado.nombre == "Aperol") {
    document.body.appendChild(imgAperol)
} 
if (resultado.nombre == "Cynar") {
    document.body.appendChild(imgcynar)
} 
if (resultado.nombre == "Fernet") {
    document.body.appendChild(imgfernet)
} 
}

let borrarBusqueda = document.getElementById("limpiar")
borrarBusqueda.addEventListener("click", limpiarBusqueda)
function limpiarBusqueda (){
    existencias.remove()
}



function respuestaClick(){
    Swal.fire({
        icon: 'success',
        text: 'Se agregó el producto',
    })}
    function agregamosAlCarrito () {
        carrito.push(brebaje)
    }
    bebidaEnStock.addEventListener("click", respuestaClick)
    bebidaEnStock.addEventListener("click", agregamosAlCarrito)
    let verCarrito = document.getElementById("vercarrito")
    verCarrito.addEventListener("click", verCarritoDeCompras)
    function verCarritoDeCompras(){ 
    carrito.length === 0 && Swal.fire('No hay productos en el carrito');
    carrito.length != 0 && console.log(carrito)
}