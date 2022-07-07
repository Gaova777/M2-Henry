import React from 'react';

export default function SaludoFuncional(props) {
  const saludo = props.lang === 'es' ? 'Hola' : 'Hello'
  /* 
  es lo mismo que decir:
  if(props.lang==='es'){

    saludo='hola
  }else{
    saludos='hello'
  }
  
  */
  
  return (
    <h1>{saludo}! {props.nombre}</h1>
  )
};
