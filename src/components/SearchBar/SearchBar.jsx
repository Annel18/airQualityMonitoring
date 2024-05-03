import React, { useState } from "react"

export default function SearchBar({ onLocationChange }) {
  const [searchData, setSearchData] = useState('here')
  
  async function search(e) {
    e.preventDefault()
    const inputValue = e.target.elements.searchField.value
    setSearchData(inputValue)
    onLocationChange(inputValue) // Call the callback function to update location
  }

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
  )
}
