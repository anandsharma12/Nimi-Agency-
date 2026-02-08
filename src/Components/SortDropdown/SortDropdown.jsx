import "./SortDropdown.css";

const SORT_OPTIONS = [
  { key: "recommend", label: "We recommend" },
  { key: "new", label: "Newest arrivals" },
  { key: "priceLow", label: "Price: Low to High" },
  { key: "priceHigh", label: "Price: High to Low" },
  { key: "nameAZ", label: "Name: A to Z" },
  { key: "nameZA", label: "Name: Z to A" }
];

const SortDropdown = ({ sortType, setSortType, close }) => {
  return (
    <div className="sort-dropdown">
      {SORT_OPTIONS.map(option => (
        <div
          key={option.key}
          onClick={() => {
            setSortType(option.key);
            close();
          }}
        >
          {sortType === option.key && "✓ "}
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default SortDropdown;
