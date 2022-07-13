import React, { Component } from 'react';
import store from '../store.js';
import * as actionsCreators from '../actions';
import { bindActionCreators } from 'redux'; // esto es lo mismo que ---> import { INCREMENT, DECREMENT, RESET, GET_POST, RECEIVE_POST}  from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index.js';
import axios from 'axios';


const Counter = ({ counter, increment, decrement, reset, fetchPost}) => (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>
          +
        </button>
        {' '}
        <button onClick={decrement}>
          -
        </button>
        {' '}
        <button onClick={reset}>
          Reset
        </button>
        <button onClick={() => fetchPost(counter)}>
          Fetch
        </button>
      </p>
    )

const mapStateToProps = (state) => ({
  counter: state.count,//acá accedemos al state de redux, donde me traigo todo el objetito, y escojo la parte que se llama count (reducer, index (1))
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);// para este caso al usar el bindActionCreators, lo que hacemos es despachar todas las acciones que estan dentro de actionCreators, tal cual como lo hicimos en la importación
  /* return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
    fetchPost: (num) => dispatch(fetchPost(num))
  } // entonces acá lo que realizamos, es lo mismo que en mapStateToProps, usando el dispatch, ya que el dispatch es la capacidad de enviar acciones*/
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);//esta linea es clave, ya que en el app, no le doy las props de mi componente, sino que con el connect se las indico directamente, como si las llevara de una vez, después de llamarlo., el connect necesita dos cosas, el mapStateToProps, y las propiedades y el (Counter) es el componente principal el que exporto, además de que dentro de este llamado, puedo traerme las actions de su respectivo archivo index, action cuando las solicito, y así me encadeno al index, reducer, que es donde realizamos las actions una vez llamadas.


//la linea 45 es igual a tener

//export default connect(mapStateToProps, {increment, decrement, reset, fetchPost})(Counter)


//si solo quiero despachar acciones y nada de mapStateToProps, sería:


//export default connect(null, {increment, decrement, reset, fetchPost})(Counter