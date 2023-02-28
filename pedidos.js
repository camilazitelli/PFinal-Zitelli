let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);
function validarFormulario(e){
e.preventDefault();
let formulario = e.target
sessionStorage.setItem('nombre', formulario.children[0].value); 
sessionStorage.setItem('apellido', formulario.children[1].value);
sessionStorage.setItem('telefono', formulario.children[2].value); 
sessionStorage.setItem('bebida pedida', formulario.children[3].value); 
const nombre = sessionStorage.getItem('nombre');
const apellido = sessionStorage.getItem('apellido');
const telefono = sessionStorage.getItem('telefono');
const bebidaPedida = sessionStorage.getItem('bebida pedida');
Swal.fire('Gracias por tu pedido ' + nombre + " " + apellido + "." + " " + "Para coordinar la entrega de " + bebidaPedida + " nos comunicaremos al " + telefono + ".")
}

let borrarBusqueda = document.getElementById("limpiarbusqueda")
borrarBusqueda.addEventListener("click", limpiarBusqueda)
function limpiarBusqueda (){
    miFormulario.value.remove()
}
