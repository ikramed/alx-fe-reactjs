
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <input
        type="text"
        placeholder="Search GitHub users..."
        className="w-full border rounded px-3 py-2 shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
