import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (<div>
    {props.cities.map(c =>
      <Card
          max={c.main.temp_max}//acá usamos los componentes a nuestra medida O son los props de cards
          min={c.main.temp_min}
          name={c.name}
          img={c.weather[0].icon}
          onClose={() => alert(c.name)}
      />)}
  </div>)
};