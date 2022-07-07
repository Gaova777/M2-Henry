import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js'; //el objeto Cairns es usado mediante destructuring, donde se lo trae de data, pero el objeto data que esta importando, solo se trae lo que tenga "export default"

//acá podemos observar que para usar cada uno de los componentes, los importamos y los usamos como se muestra abajo


function App() {
  return (
    <div className="App">
      {/* <div>
        <Card
          max={Cairns.main.temp_max}//acá usamos los componentes a nuestra medida O son los props de cards
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div> */}
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
