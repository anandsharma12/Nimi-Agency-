import { useState } from "react";
import { products as productsData } from "../../data/products";
import SortDropdown from "../../Components/SortDropdown/SortDropdown";
import StoreItemCard from "../../Components/StoreItemCard/StoreItemCard";
import BottomNav from "../../Components/BottomNav/BottomNav";
import "./Products.css";

const Products = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("recommend");

  const sortedProducts = [...productsData].sort((a, b) => {
    switch (sortType) {
      case "priceLow":
        return a.price - b.price;
      case "priceHigh":
        return b.price - a.price;
      case "nameAZ":
        return a.username.localeCompare(b.username);
      case "nameZA":
        return b.username.localeCompare(a.username);
      default:
        return 0;
    }
  });

  return (
    <section className="products-page">
      {/* SORT */}
      <div className="p-sort-wrapper">
        <button
          className="sort-btn"
          onClick={() => setSortOpen(prev => !prev)}
        >
          SORT BY ▾
        </button>

        {sortOpen && (
          <SortDropdown
            sortType={sortType}
            setSortType={setSortType}
            close={() => setSortOpen(false)}
          />
        )}
      </div>

      <h2 className="section-title">Featured Products</h2>

      {/* GRID */}
      <div className="products-grid">
        {sortedProducts.map(product => (
          <StoreItemCard key={product.id} product={product} />
        ))}
      </div>

      <BottomNav />
    </section>
  );
};

export default Products;
