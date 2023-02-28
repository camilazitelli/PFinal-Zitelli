let menor = document.getElementById("menor")
menor.onclick = () => {let cuerpo = document.getElementById("general");
    cuerpo.innerHTML= "<h1>Lo sentimos, no puede continuar.</h1>"
}

let mayor = document.getElementById("mayor");
function hacerNavBarVisible (){
    let visibilidadNav = document.querySelector("#noseve");
    visibilidadNav.style.visibility = "visible";
}
function removerBoton (){
let parrafo = document.getElementById("validandoedad");
parrafo.remove();
} 
mayor.addEventListener("click", hacerNavBarVisible);
mayor.addEventListener("click", removerBoton);



