// una arrow function tiene como sintaxys:
// //y puedo evitar las llaves
// let f1 = ()=>'f1' //es igual que 
// let a = f1();
// console.log(a)
// function f1b(){
//     console.log('f1')
// }f1b();

// en ecmascript 6, ejecutar una funcion tiene sus posibilidades, por ejemplo:

// {()=>console.log('f1')};

//-----------------funciones con parametros------------------

// let b = (a)=>a+4;/* se se recibirá un unico parametro, no es necesario colocar los paretesis */:
// let b = a => a+4;
// c=b(3);
// console.log(c);

// function f5(a,b)

// let f6 = (a,b) =>{console.log(a,b); return a+b};
// console.log(f6(3,3))

 /*
ARROW FUNCTIONS

let nombre de la funcion = (parametros)=>{cuerpo de la funcion como cualquiera}


Si coloco las llaves donde va la operacion de la funcion, debo colocar un return, ya que se desaparece el return implicito
// */

// //si no quiero colocarle nombre e invocarla en el momento:
// {()=> console.log('hola')};

// //si quiero pasarle un unico parametro, puedo no usar los ()
// let a = a => a;
// //todas estas son la misma
// let a = (a)=> a;
// let a = (a)=>{return a};
// let a = a =>{return a};

// //si no recibo parametros, si o si debo colocar los()
// let b = ()=>2;
// let b = ()=>{return 2};

// //si tengo mas de un parametro, si o si debo colocar ()
// let c = (a, b)=> a+b;
// let c=(a,b)={return a+b}; 

// //podemos hacerlo así:
// let array = [3,24,6,6]
// let new_array= array.map(e=>e+1);//[3,25,7,7]
// //let new_array = array.map(function(e){return e+1})

// //tambien con un foreach

// array.forEach(e=>console.log(e));


// var bob = {
//     name: "Bob",
//     friends: ['juan','pedro','martina'],
//     printFriends(){
//         for(let i = 0; i<this.friends.length; i++){
//             console.log(this.name+ " knows "+ this.friends[i])

//         }//acá sucede un problema jodido, que el this, me lo va a tomar de forma global, por lo tanto no me va a sacar lo que esta dentro de friends[].

        //this.friends.forEach(f => console.log(this.name + " knows "+ f));
//         //en cambio acá el arrow function me evita ese problema, llamando directamente el parametro, es decir que se va abindear al momento en que se define 
//     }
// }
// ARROWS EN METODOS CONSTRUCTORAS
// function Persona(nombre, apellido){
//     this.nombre = nombre || "Fede"
//     this.apellido = apellido || "Panella"
// }

// Persona.prototype.getNombre = function(){
//     return this.nombre + " " + this.apellido;
// }//siempre usar las funciones de toda la vida, para siempre en las clases 

// Persona.prototype.getNombre = () => {
//     return this.nombre + " " + this.apellido;
// }//acá no podemos utilizar una arrow function debido a que el this no va a buscar en el contexto de la clase, sino en el objeto global



// var fede = new Persona();
// console.log(fede.getNombre())

// class Persona{
//     constructor(nombre = 'Franco', apellido = 'Etcheverry'){
//         this.nombre = nombre,
//         this.apellido = apellido
//     }
//     getNombre(){
//         return this.nombre + " " + this.apellido;
//     }
// }//una forma de class, con sugar sintactic

// //Herencia

// class Empleado extends Persona{
//     constructor (nombre, apellido, empleo, sueldo){
//         super(nombre, apellido);
//         this.empleo = empleo;
//         this.sueldo = sueldo;
//     }

//     getEmpleo(){
//         return this.empleo + "($" + this.sueldo + ")";
//     }
// }

// var person = new Persona("Fede", "Panella");
// var fran = new Persona(); //me corre con los valores que tiene por default
// var emp = new Empleado("Fede", "Panella", "Instructor", 1000000)

// // si en vez de colocar en la variable nombre y apellido, algun valor de éstas, y colocamos null, nos arrojará null en nombre y apellido, pero si colocamos undefined, nos arrojará los valores por defecto
// // console.log(person)
// // console.log(fran)
// console.log(emp.getNombre())


//----------------OBJECTS LITEARLS

// var obj = {}

// function crea(nombre, apellido, prop, value){
//     var obj = {
//         nombre, // acá no es necesario igualar la propiedad a algo es decir que quede--> nombre: nombre, ... apellido: apellido..... no, si tienen el mismo nombre la variable de entrada y la de la propiedad del objeto solo se coloca una coma ","
//         apellido,

//         // estas son propiedades DINAMICAS
//         [prop]: value
//     }
//     return obj
// }

// var myOb = crea("Fede", "Panella","altura", 1.995)
// var otro = crea ( "Fede", "Panllea", "edad", 27)
// console.log(otro)


//ejemplitos

// var nombre = "Fede"
// var obj = {
//     nombre,
//     saluda(){
//         return "Hola"
//     }
// }
// console.log(obj.saluda()) 


//-------------------------TEMPLATE STRINGS------------

// var plural = "ustedes"

// var str= "hola como estan"+ " "+plural+ "."+ "\n Me alegro mucho"

// var tstr= `hola como estan ${plural}.
// Me alegro mucho`
// console.log(tstr)

//---------------DESTRUCTURING


// var arr = [1,2,3];
// var [a,b,c] = arr; //en cada posicion de las variables se guarda el valor de la posicion del array

// console.log(b);


var obj = {
    nombre: "Fran",
    apellido: "Echevverry",
    edad: "nome acuerduski"
}

// // var { apellido, nombre}= obj;
// // console.log(apellido)/// tambien console.log(obj.nombre)...console.log(obj.apellido)
// // console.log(nombre)

// var{apellido: surname, nombre: name}=obj;//me trae por ejemplo lo que esta en apellido y le digo que me lo guarde en una variable llamada surname 
// console.log(surname)
// console.log(name);

// function g({nombre}){
//     console.log(nombre);
// }

// g(obj) //se hace destructuring llamando la propiedad y se coloca dentro de los parametros del argumento, y cuando se llama la funcion, se le dice de queee objeto va dicha propiedad

// var[a,b,c]=[]
// console.log(a)


//------------------DEFAULT, REST Y SPREAD------------

//Default
// function f(x, y=12){
//     //y is 12 if not passed ( or passed as undefined)
//     return x + y
// }

//Rest
// function f(cantidad, ...palabras){
//     console.log(cantidad)
//     console.log(palabras)
// }

// f(4, ' como','va','el','M2')

// var arr = [1,2,3]

// function f(x,y,z){
//     console.log(x+y+z)
// }
// f(...arr)//cuando escribo los tres puntitos y pongo el arreglo, es equivalente borrarle las llaves o corchetes

// //SPREAD
// var obj = {a:1}
// var copia = {...obj}
// copia.b = 2

// var arr1= [1,2,3,4]//intentaremos hacer [1,2,3,4,5,6,7,8]
// var copiaArr1 = [...arr1]
// var arr2=[7,8,9]
// var arr3 = [...arr1,...arr2]

// console.log(arr3)
// console.log(arr1)
// console.log(copiaArr1)