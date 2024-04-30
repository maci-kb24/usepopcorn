import PropTypes from "prop-types";

function Movie({ movie }) {
    return (
      <div key={movie.imdbID} className="movie-card">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <div className="movie-info">
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>🗓</span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  export default Movie

  Movie.propTypes = {
    movie: PropTypes.object.isRequired,
  };