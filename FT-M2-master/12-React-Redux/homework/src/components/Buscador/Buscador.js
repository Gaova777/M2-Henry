// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
// import './Buscador.css';
// import {addMovieFavorite, getMovies} from '../../actions';


// export class Buscador extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: ""
//     };
//   }
//   handleChange(event) {
//     this.setState({ title: event.target.value });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     //despachar una acción
//     this.props.getMovies(this.state.title)//cuando le undimos submit en buscar, el objetivo es buscar la pelicula,por lo que va a las propiedades y saca getMovies para activar lo que escribamos en el submit 
//   }

//   render() {
//     const { title } = this.state;
//     return (
//       <div>
//         <h2>Buscador</h2>
//         <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
//           <div>
//             <label className="label" htmlFor="title">Película: </label>
//             <input
//               type="text"
//               id="title"
//               autoComplete="off"
//               value={title}
//               onChange={(e) => this.handleChange(e)}
//             />
//           </div>
//           <button type="submit">BUSCAR</button>
//         </form>
//         <ul>
//          {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
//          {this.props.movies?.map(m => {
//           <div key={m.imdbID}>
//             <Link to={`/movie/${m.imdbID}`}>
//               <li>{m.Title}</li>
//             </Link>
//             <button onClick={()=>this.props.addMovieFavorite({title: m.Title, id: m.imdbID})}>
//               Fav
//             </button>
//           </div>
//          })}
//         </ul>
//       </div>
//     );
//   }
// }


// function mapStateToProps(state) {
//   return {
//     movies: state.moviesLoaded
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
//     getMovies: title => dispatch(getMovies(title))
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Buscador);


import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";
import { getMovies, addMovieFavorite } from "../../actions";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movies?.map((movie) => {
            return (
              <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                <p>{movie.Year}</p>
                <button
                  onClick={() =>
                    this.props.addMovieFavorite({
                      title: movie.Title,
                      id: movie.imdbID,
                    })
                  }
                >
                  Fav
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// connect(mapState, mapDispatch)(Buscador)

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
//     getMovies: (title) => dispatch(getMovies(title)),
//   };
// }

export default connect(mapStateToProps, { getMovies, addMovieFavorite })(
  Buscador
);
