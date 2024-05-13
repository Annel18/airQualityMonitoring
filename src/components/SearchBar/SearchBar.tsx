import React, { FormEvent } from "react"

interface Props {
  onLocationChange: (newLocation: string) => void
}

const SearchBar: React.FC<Props> = ({ onLocationChange }) => {
  const search = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputElement = (e.target as HTMLFormElement).elements.namedItem("searchField") as HTMLInputElement;
    const inputValue = inputElement?.value || ''
    onLocationChange(inputValue); // Call the callback function to update location
  };

  return (
    <div className="filter-bar">
      <form onSubmit={search} data-testid="searchForm">
        <input
          type="text"
          name="searchField"
          placeholder="Search by name..."
          className="search"
        />
      </form>
    </div>
  );
};

export default SearchBar