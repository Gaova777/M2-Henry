// console.log("Estoy en script 2");
//podemos llamar una funcion que esté en script1 debido a que el contexto de ejecución es el mismo, es la misma area de trabajo
// saludar()

// function chau(){
//     console.log('chao')
// }

// var arr = ['Ana', 'Albeiro', 'Brenda','Diego', 'Monica']
// mostraNumero(3)//la funcion que me sirve en un lado me sirve para el otro no importa lo que contenga la variable en juego

// let nombre = 'Juan'

//(3)----------------------------------------------------
/* 
var names = ['Argentina','Colombia','Panama','Brazil','Mexico','Chile']

console.log(weekDay.name(2));//acá sucede que me retorna los valores de names de script 1, ya que se efectua un clousure, de la cual usa los valores que se quedaron guardados */

//(4) y (5)----------------------COMMON JS-----------------

//para acceder a lo que exportamos, sería:

// var weekDays = require('./script1.js');

// /* weekDays={
//     name: function name (number){return names[number]}
//     number: function number(name){return names.indexOf(name)};

// } */
// console.log(weekDays.name(3))//desgraciadamente no se puede visualizar mas que en un entorno backend


//(6)----------------------ES6-------------------


// import {number, name as otracosa} from './script1.js';

// console.log(otracosa(2))

 
import traeteeldefaultcapo from './script1'

traeteeldefaultcapo()