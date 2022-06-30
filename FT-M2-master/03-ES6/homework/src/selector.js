var traverseDomAndCollectElements = function(matchFunc, startEl=document.body) { //acá hacemos lo mismo que en (1)
  var resultSet = [];

  // (1) if (typeof startEl === "undefined") {
  //   startEl = document.body; donde le colocamos por default de una vez en donde se escriben los argumentos
  // }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  
  if(matchFunc(startEl)) resultSet.push(startEl); //entonces si no nos pasan elemento, podemos usar el que viene por default, por lo que me dará como resultado un booleano

  for (let i = 0; i < startEl.children.length; i++) {
    var result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);

    resultSet = [...resultSet, ...result]

    //entonces lo que se hace acá es buscar los hijitos del body en caso de que el match sea difeernte al body o el startEL, ya que el .children me tira un arreglo de todos los hijos que hay despues del body, y despues de realizar la recursividad donde me retorna un arreglo, puede ser vacío, ya que la funcion traverseDOM.. me retorna el arreglo, al entrar en la funcion cuando se encuentra con el if, matchea con el hijo y si es true me lo pushea en result
    
  }
  
  // TU CÓDIGO AQUÍ
  return resultSet; //acá me retornará el arreglo al que le voy colocando los que me coinciden, 
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

//selector = ".clase"|| "#id" || "div" || "div.myClass" el argumento selectorpuede tomar cualquier argumento de la clase

var selectorTypeMatcher = function(selector) {//'.myClass'
  // tu código aquí
  if(selector[0]=== '#') return 'id';
  if(selector[0]=== ".") return 'class';
  for (let i = 0; i < selector.length; i++) {
    if(selector[i]==='.')return 'tag.class'
  }  

  //si ninguna de esas es, entonces la ultima opcion sería  el 'tag'

  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro (un elemento html: un body, div, etc.)y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {//'.myClass'
  var selectorType = selectorTypeMatcher(selector);// en esta variable lo que se va a guardar es el tipo de clase: 'id','class','tag.class','tag' '#id', como se hizo anteriormente.
  var matchFunction; // es una funcion que me comparará el elemento con el selector, entonces hay que añadirle caracteres al elemento para que se parezca al selector
  if (selectorType === "id") { //(selector =#myId)lo que se hará es...-> 
    //div#myId----{se le agrega}-> .id === myId (me devuelve eso) y se va a comparar con el selector--> myId===#myId
    // si bien le hace falta un "#" por lo tanto

    matchFunction = function(el){
      return "#"+el.id ===selector; //me devolvera true o false
    }
  } else if (selectorType === "class") {//selector==.myClass
    //div.myClass otra Clase -----.classList ===[myClass, otraclase], como nos va a devolver muchas clases, entonces hay que ir comparando una por una hasta poder encontrar la que es igual al selector
    //si busco por clase
    matchFunction = function(el){
      for (let i = 0; i < el.classList.length; i++) {
        if('.'+el.classList[i]=== selector) //le añadimos el punto para que coincida con el selector=='.'myClass
        return true;       
      }
      return false;
    }

    
  } else if (selectorType === "tag.class") {//selector===div.myClass ----> 
    //algo que se podría hacer el aplicar un split() que me reemplaza lo que yo le disponga por lo tanto haríamos

    //div.myClass.split('.')-->["div","myClass"]
    matchFunction = function(el){
     let [t,c]= selector.split('.')// un arreglo con dos posiciones y podemos aplicar destructuring  donde t= TAG c = CLASS

     //vamos a usar recursividad, entonces, si llamamos la funcion principal matchFunctionMaker, este nos va a devolver una funcion para cada valor del array que destructuramos, por lo tanto matchFunctionMaker(t), nos hará la parte de 'tag' y matchFunctionMaker(c) nos hará la parte de '.class' por lo tanto nos retorna funcion, pero si le añadimos a esa funcion retornada el elemento es decir a matchfunction(el) de la forma matchFunctionMaker(t)(el) nos retornará el valor esperado si será true o false
     
     return matchFunctionMaker(t)(el) && matchFunctionMaker('.' + c)(el) //por lo que nos va a retornar true &&true en caso de que sean ambos true
    }
    
  } else if (selectorType === "tag") {//selector == "div"
    //--lo que se hará div.myClass----.tagName === 'DIV' me devuelve en mayuscula
    matchFunction = function(el){
      return el.tagName ===selector.toUpperCase() //pasamos a mayuscula el selector
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements; //
  var selectorMatchFunc = matchFunctionMaker(selector);//funcion que me recibe el elemento matchfunctionmaker
  elements = traverseDomAndCollectElements(selectorMatchFunc);//le paso la funcion qu eme hace la comparación
  return elements;
};// $()

//selector = ".clase"|| "#id" || "div" || "div.myClass" el argumento selectorpuede tomar cualquier argumento de la clase

//$(".myClass") = querySelector es similar


//intentaremos dividir y conquistar