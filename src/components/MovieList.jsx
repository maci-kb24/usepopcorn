import PropTypes from "prop-types";
import Movie from "./Movie";

function MovieList({ movies }) {
    return (
      <div className="movie-list">
        {movies?.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    );
  }

  export default MovieList

  MovieList.propTypes = {
    movies: PropTypes.array,
  };