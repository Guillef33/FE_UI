import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/productPage/searchBar";
import NavigationBottom from "../components/productPage/navigationBottom";
import CategoryButtons from "../components/productPage/categoryButtons";
import { stockPrice } from "../../public/data/stock-price";
import ProductList from "../components/productPage/productList";

function ProductsPage() {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [price, setPrice] = useState(null);
  const [productPrices, setProductPrices] = useState({});

  const mapPrices = (products) => {
    const updatedPrices = {};
    products.forEach((product) => {
      product.skus.forEach((sku) => {
        const defaultSkuCode = product.skus[0].code;
        if (stockPrice[defaultSkuCode]) {
          let formatPrice = (stockPrice[defaultSkuCode].price / 100).toFixed(2);
          updatedPrices[product.id] = formatPrice;
        } else {
          console.log(`Price not found for SKU code ${sku.code}`);
        }
      });
    });
    setProductPrices(updatedPrices);
  };

  useEffect(() => {
    mapPrices(products);
  }, [products, stockPrice]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Failed to fetch products:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "All" || product.category === selectedCategory
    )
    .filter((product) =>
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <section>
      <nav className="product-nav-container">
        <img src="/menu-icon.svg" alt="menu icon" />
        <img src="profile-pic.svg" alt="menu icon" />
      </nav>
      <div className="product-page-container">
        <h2 className="product-page-username">Hi Mr. Michael</h2>
        <h3 className="product-page-welcome">Welcome Back!</h3>
        <SearchBar
          handleSearchChange={handleSearchChange}
          searchTerm={searchTerm}
        />
        <CategoryButtons filterProductsByCategory={filterProductsByCategory} />
        <ProductList
          filteredProducts={filteredProducts}
          productPrices={productPrices}
        />
      </div>
      <NavigationBottom />
    </section>
  );
}

export default ProductsPage;
