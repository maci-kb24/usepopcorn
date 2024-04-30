import PropTypes from "prop-types";

function Watched({ movie }) {
    return (
      <div key={movie.imdbID} className="watched-card">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <div className="watched-info">
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

  export default Watched

  Watched.propTypes = {
    movie: PropTypes.object.isRequired,
  };