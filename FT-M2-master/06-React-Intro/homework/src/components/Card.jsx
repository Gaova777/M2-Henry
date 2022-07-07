import React from 'react';

/* export default function Card(props) {
  // acá va tu código
  return (<div>
    <button>X</button>
    <h4>{props.name}</h4>
    <p>Min</p>
    <p>{props.min}</p>
    <p>Max</p>
    <p>{props.max}</p>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='img not found'/>
  </div>)
}; 
esta es una manera de hacerlo sin destructuring


con DESTRUCTURING SERÍA
*/

export default function Card({name, min, max, img, onClose}) {
  // acá va tu código
  return (<div>
    <button onClick={onClose}>X</button> {/* acá podemos usar el evenListener click usando onClick */}
    <h4>{name}</h4>
    <p>Min</p>
    <p>{min}</p>
    <p>Max</p>
    <p>{max}</p>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='img not found'/>
  </div>)
};