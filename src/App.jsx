import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = "48eb5390";

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
}

function Header({ children }) {
  return <header className="header">{children}</header>;
}

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
      <div className="search-bar">
        <div>
          <h1>Movie Database</h1>
        </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
  );
}


export default function App() {
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchMovies() {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch(
  //         `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
  //       );

  //       if (!res.ok) {
  //         throw new Error("Failed to fetch movies");
  //       }

  //       const data = await res.json();

  //       if (data.Response === "False") {
  //         throw new Error("Movie not found");
  //       }

  //       setMovies(data.Search);
  //       console.log(data.Search);
  //       setIsLoading(false);
  //     } catch (err) {
  //       console.error(err);
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchMovies();
  // }, []);

  return (
    <>
      <Header>
        <SearchBar />
      </Header>
      <Main>
          {isLoading && <Loader />}
          {isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
      </Main>
    </>
  );
}



function Main({ children }) {
  return <main className="main">{children}</main>;
}

function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

function Movie({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

Navbar.propTypes = {
  children: PropTypes.node,
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

Main.propTypes = {
  children: PropTypes.node,
};