// console.log("Estoy en script 1");

/* function saludar(){
    console.log('holii')

} */
// chau()// si bien notamos que no funciona debido a que en index que es el área de trabajo encontramos un orden, y script1 la funcion chau() es de script2, por eso nos sale undefined

/* var arr = [1,2,3,4,5]

function mostraNumero(i){
    console.log(arr[i]);
}
mostraNumero(1)

let nombre = 'Fede'/ *///esto es un error, ya que trabajamos en el mismo contexto y por lo tanto me tira el codigo tener un let con la misma variable en los difeerntes scripts

// (3)---------------------------------------------------


/* const weekDay = function(){
    var names= ["Domingo", "Lunes",'Martes','Miercoles','Jueves','Viernes','Sabado']
    //window.algo="algo";

    return{
        name: function name(number){return names[number];},
        number: function number(name){return names.indexOf(name);}
    };
}();

console.log(weekDay.name(3)); */

//(4)--------------------------COMMON JS------------------

/* var names = ["Domingo", "Lunes",'Martes','Miercoles','Jueves','Viernes','Sabado'];

exports.name = function name (number){return names[number]};
exports.number = function number(name){return names.indexOf(name)}; */

/* exports me va a crear algo como un objeto de la sigueinte manera:

name: function name (number){return names[number]}
number: function number(name){return names.indexOf(name)};

//exports = function algo(){...} acá el export aunque lo iguale a una funcion, éste no va a cambiar, y se enfocará sólo en el objetito creado.


entonces me crea como una cajita a la que despues puedo acceder como se presenta en script2

*/

// -----------------------------ModulE EXPORTS---

/* var names = ["Domingo", "Lunes",'Martes','Miercoles','Jueves','Viernes','Sabado'];


module.exports.name =function name (number){return names[number]};
module.exports.number = function number(name){return names.indexOf(name)};
// module.exports = function algo (){...}


//ejemplo: 
var obj = {}
obj.name = function name (number){return names[number]};
obj.number = function number(name){return names.indexOf(name)}; */
// obj = function algo(){...} en cambio éste module.exports, podemos cambiar el objetito el module.exports e igualarlo a una fucnion, es decir podemos cambiarlo de algunamanera



//(6)----------------ES6---------------------------

/* var names = ["Domingo", "Lunes",'Martes','Miercoles','Jueves','Viernes','Sabado'];

export function name (number){return names[number];};
export function number(name){return names.indexOf(name);};

// es otra forma de llevar a cabo el proceso de exportacion, es más facil y me recuerda a pytho :') PERROOOO al html, donde estan los script 1 y 2 hay que colocarles el type='module' */




// export var fede = "Fede"

export default function myDefault(){
    console.log("Soy el default")
}