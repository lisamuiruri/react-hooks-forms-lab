import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  // Manage search and category in component state
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <Filter
        searchText={search}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
