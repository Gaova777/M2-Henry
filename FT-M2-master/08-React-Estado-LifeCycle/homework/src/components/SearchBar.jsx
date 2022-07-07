import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const[city,setCity]=useState('');
  return (
    <form onSubmit={(e) => { //el onSubmit es equivalente a onClick
      e.preventDefault();//evento que se usa en forms para evitar que el comportamiento por default de <forms> que es borrar cada que se actualice, evitar que haga eso
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}/* que en un principio es vacío */
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar"/>
    </form>
  );
}
