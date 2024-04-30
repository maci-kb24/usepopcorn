
import PropTypes from "prop-types";
import Watched from "./Watched";
function WatchedList({ movies }) {
    return (
      <>
      <h2>Watched</h2>
      <div className="watched-list">
        
        {movies?.map((movie) => (
          <Watched key={movie.imdbID} movie={movie} />
        ))}
      </div>
      </>
     
    );
  }

  export default WatchedList

  WatchedList.propTypes = {
    movies: PropTypes.array,
  };