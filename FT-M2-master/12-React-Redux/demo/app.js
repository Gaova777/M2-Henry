import React from 'react';
import { render } from 'react-dom';
import Counter from './src/components/Counter.jsx';
import Post from './src/components/Post.jsx';
import  { Provider } from 'react-redux';
import store from './src/store.js';

render(
    <Provider store={store}> {/* hacemos una prop llamada store y aplicamos el archivo llamado store, este Provider lo llamamos de react-redux como aparece en las importaciones, haciendo este encapsulamiento, cualquier app que este adentro, podrá despachar acciones, podrá usar el archivo store para lo que se necesite*/}
      <div>{/* siempre grabarse que en el div, lo que va adentro, es lo que me va a renderizar, en este caso serán dos componentes counter y Post */}
        <Counter />
        <Post />
      </div>
    </Provider>,
  document.getElementById('app')/* acá conectamos el html y el div que tenemos para relacionarlo con el app */
);
