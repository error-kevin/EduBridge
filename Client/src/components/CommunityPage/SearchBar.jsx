import React from "react";
import { FaSearch } from "react-icons/fa";
import "../../styles/SearchBar.css";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search posts by keyword..."
        className="search-input"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
