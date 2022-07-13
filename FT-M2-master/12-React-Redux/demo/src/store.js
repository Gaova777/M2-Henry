import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  rootReducer,
  /* esta linea nos servirá para usar las lectures de redux en mi navegado o herramientas de mi navegadorr */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),//el thunkMiddleware nos sirve para realizar operaciones asincronicas, y para llamarla primero la importamos, con redux-thunk, en pseudo (1) explicamos bien.
);

export default store;

/* 
Pseudo (1):

entonces lo que venimos haciendo es despachar actions, donde va el tipo de accion y la información extra, y lo llevamos al reducer, para que cambie nuestro estado

despachamos ---> {type...}--->reducer ---> cambia mi estado 

en este caso es un poco diferente, ya que más que una action hacemos una operación diferente en esta aplicacion Demo, como es buscar una info al servidor, una vez que realiza el get, despacha la respuesta, pero este proceso se hace de forma asincrona


despacho ---> busca info de servidor ---> espera respuesta ----> despacha(respuesta)


*/



/* 
no importa que operacion hagamos o que servicio hagamos en nuestra app para cuando solicitemos las herramientas de nustro navegador, esta estructura siempre será la misma solo cambiará el nombre del reducer
const store = createStore(
  Otronombre,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),/* esta linea nos servirá para usar las lectures de redux en mi navegado o herramientas de mi navegadorr */
 // applyMiddleware(thunkMiddleware),//el thunkMiddleware nos sirve para realizar operaciones asincronicas, y para llamarla primero la importamos, con redux-thunk, en pseudo (1) explicamos bien.
//);
