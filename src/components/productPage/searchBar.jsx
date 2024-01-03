function SearchBar({ searchTerm, handleSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search burger, pizza, drink or ect..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <span className="search-icon">
        <img src="/search-icon.svg" alt="Search Icon" />
      </span>
    </div>
  );
}

export default SearchBar;
