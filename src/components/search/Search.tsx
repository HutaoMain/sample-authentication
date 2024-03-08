import React from "react";

type SearchType = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Search: React.FC<SearchType> = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Filter..."
      className="filter-input"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default Search;
