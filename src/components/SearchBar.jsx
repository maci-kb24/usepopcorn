import PropTypes from 'prop-types'

function SearchBar({ onSearch, onSetQuery }) {
  
    return (
      <div className="search-bar">
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={onSearch}
          onChange={(e) => onSetQuery(e.target.value)}
        />
      </div>
    );
  }

  export default SearchBar

  SearchBar.propTypes = {
    onSearch: PropTypes.string,
    onSetQuery: PropTypes.func,
  }