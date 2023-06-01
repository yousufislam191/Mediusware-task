import React from "react";

const SearchBar = ({ searchItems }) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => searchItems(e.target.value)}
        placeholder="Search contacts..."
        className="rounded border-[#46139f] border-2 p-3 w-full mb-5"
      />
    </>
  );
};

export default SearchBar;
