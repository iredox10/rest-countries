import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Search() {
  return (
    <div className="w-full shadow-lg p-3 my-3 mx-3 flex items-center gap-2">
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full p-3 outline-none"
      />
    </div>
  );
}
