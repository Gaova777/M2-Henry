// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
// import './Favorites.css';

// import { removeMovieFavorite} from "../../actions"

// export class ConnectedList extends Component {

//   render() {
//     return (
//       <div>
//         <h2>Películas Favoritas</h2>
//         <ul>
//           {/* Aqui deberias poner tu lista de peliculas! */}
//           {this.props.movies?.map(m=>{
//             <div key={m.id}>
//               <Link to={`/movie/${m.id}`}>
//                 <li>{m.title}</li>
//               </Link>
//               <button onClick={()=>this.props.removeMovieFavorite(m.id)}>X</button>
//             </div>
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state)=> {
//   return {
//     movies: state.moviesFavourites
//   }
// }

// export default connect(mapStateToProps, {removeMovieFavorite})(ConnectedList);


import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavorite } from "../../actions";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    console.log(this.props.movies);
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies?.map((movie) => {
            return (
              <li key={movie.imdbID}>
                <p>Elemento</p>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>

                <button
                  onClick={() => this.props.removeMovieFavorite(movie.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapState(state) {
  return {
    movies: state.moviesFavourites,
  };
}

function mapDispatch(dispatch) {
  return {
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id)),
  };
}

export default connect(mapState, mapDispatch)(ConnectedList);
