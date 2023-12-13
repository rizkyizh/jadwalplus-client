import React from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './styles/search.css';

const Search = ({ searchKeyword, onSearch, searchNotFound }) => {
  return (
    <form className={`search-container ${searchNotFound ? 'search-not-found' : ''}`}>
      <button type="submit" aria-label="search-btn">
        <FaSearch className="search-icon" />
      </button>
      <input
        type="text"
        placeholder="cari berdasarkan nama"
        className="search-input"
        value={searchKeyword}
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  );
};

Search.propTypes = {
  searchKeyword: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchNotFound: PropTypes.bool.isRequired,
};

export default Search;
