// var titulo = document.getElementById("titulo")

// console.log(titulo)

var tituloQS = document.querySelector("#titulo")
// console.log(tituloQS)
// class, id o tag-->h1, div, p


var parrafo = document.getElementsByClassName("parrafo")
var parrafoQS = document.querySelectorAll(".parrafo")
// console.log(parrafoQS)


var boton = document.querySelector("#btn")

boton.addEventListener("click", mandaleFruta)


function mandaleFruta(evento) {
    var lista = document.getElementById("frutas");
    var nuevaFruta = document.createElement("li");

    var input = document.querySelector("#input")


    nuevaFruta.innerText = input.value

    lista.appendChild(nuevaFruta)



    input.value = ""
}


