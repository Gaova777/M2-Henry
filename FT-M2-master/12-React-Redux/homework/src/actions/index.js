const API_KEY= 'af162172';

// export function addMovieFavorite(payload) {
//     return { type: "ADD_MOVIE_FAVORITE", payload };
//   }
  
//   export function getMovies(titulo) {
//     return function(dispatch) {
//       return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
//         .then(response => response.json())//pasamos los datos a .json
//         .then(json => {
//           dispatch({ type: "GET_MOVIES", payload: json });
//         });
//     };
//   }

//   export function removeMovieFavorite(id){
//     return {
//         type: 'REMOVE_MOVIE_FAVORITE',
//         payload: id
//     }
//   };

//   export function getMovieDetail(idMovie){
//     return function(dispatch){
//         fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${idMovie}`)//acá en el idMovie, despues en el reducer vamos a llamar la determinada pelicula con este idMovie
//         .then(respuesta => respuesta.json())
//         .then(data => {
//             dispatch({type: 'GET_MOVIE_DETAIL', payload: data})
//         })
//     }
//   };

// http://www.omdbapi.com/?apikey=$1977a73f&i=${id}`
export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function removeMovieFavorite(payload) {
  // tt454578
  return { type: "REMOVE_MOVIE_FAVORITE", payload };
  // {type:"REMOVE_MOVIE_FAVORITE", payload:"tt454578" }
}

///////-----ASYNC-------
export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`)
      .then((response) => response.json())
      .then((movie) => {
        dispatch({ type: "GET_MOVIES", payload: movie });
      });
  };
}

//getMovieDetail --> ASYNC

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((r) => r.json())
      .then((movie) => {
        dispatch({ type: "GET_DETAIL", payload: movie });
      });
  };
}

// despacho action
// llega al reducer
// cambia el state
// impacta en la vista (si estoy conectado al state)

