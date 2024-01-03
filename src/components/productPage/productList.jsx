import { Link } from "react-router-dom";
function ProductList({ filteredProducts, productPrices }) {
  return (
    <div className="product-list">
      {filteredProducts.map((product) => {
        return (
          <div key={product.id} className="product-card">
            <h2>{product.brand}</h2>
            <div className="product-card-image-wrapper">
            <img src={product.image} alt={product.name} />
            </div>
            <Link to={`/product/${product.id}`}>
              <img src="/add.svg" alt="add button" className="add-button" />
            </Link>
            <h3 className="product-card-price">${productPrices[product.id]}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
