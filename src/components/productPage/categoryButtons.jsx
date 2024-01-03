function CategoryButtons({ filterProductsByCategory }) {
  return (
    <div className="category-buttons">
      <button onClick={() => filterProductsByCategory("All")}>All</button>
      <button onClick={() => filterProductsByCategory("Beer")}>
        <img src="/Beer.svg" alt="Beer Icon" />
        Beers
      </button>
      <button onClick={() => filterProductsByCategory("Wine")}>
        <img src="/Wine-glass.svg" alt="Wine Icon" />
        Wines
      </button>
    </div>
  );
}

export default CategoryButtons;
