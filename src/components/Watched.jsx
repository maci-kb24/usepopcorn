import PropTypes from "prop-types";

function Watched({ movie }) {
    return (
      <div key={movie.imdbID} className="watched-card">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <div className="watched-info">
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span style={{paddingRight: "2.5rem"}}>🌟{movie.imdbRating}</span>
              <span style={{paddingRight: "2.5rem"}}>🌟{movie.userRating}</span>
              <span style={{paddingRight: "2.5rem"}}>🕟{movie.runtime} min</span>
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