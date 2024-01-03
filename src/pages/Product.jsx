import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Topbar from "../components/productPage/topbar";
import { stockPrice } from "../../public/data/stock-price";

function Product() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFetchProductInfo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/product/${id}`);
      const data = await response.json();

      if (response.ok) {
        setProductInfo(data);
        setError(null);
      } else {
        setProductInfo(null);
        setError(data.error || "Error fetching product information");
      }
    } catch (error) {
      setProductInfo(null);
      setError("Error fetching product information");
    }
  };

  const handleUpdateStockAndPrice = (productId, skuCode) => {
    if (stockPrice.hasOwnProperty(skuCode)) {
      let formatPrice = (stockPrice[skuCode].price / 100).toFixed(2);
      setStock(stockPrice[skuCode].stock);
      setPrice(formatPrice);
    } else {
      console.log("Stock and price not found for the product");
    }
  };

  useEffect(() => {
    handleFetchProductInfo();
  }, []);

  useEffect(() => {
    if (productInfo && productInfo.skus.length > 0) {
      const defaultSkuCode = productInfo.skus[0].code;
      handleUpdateStockAndPrice(productInfo.id, defaultSkuCode);

      const intervalId = setInterval(() => {
        handleUpdateStockAndPrice(productInfo.id, defaultSkuCode);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [productInfo]);

  return (
    <>
      <Topbar />
      <div>
        {productInfo && (
          <div key={productInfo.id} className="product-page-card">
            <img src={productInfo.image} alt={productInfo.name} />
            <div className="product-page-brand">
              <div className="product-page-brand-title">
                <h2>{productInfo.brand}</h2>
                <h3>${price}</h3>
              </div>
              <div className="product-page-brand-details">
                <p className="product-page-brand-details-paragraph">
                  Origin: {productInfo.origin}
                </p>
                <p className="product-page-brand-details-paragraph">|</p>
                <p className="product-page-brand-details-paragraph">
                  Stock: {stock}
                </p>
              </div>
            </div>

            <div className="product-brand-information-container">
              <h3 className="product-page-brand-h3">Description</h3>
              <p
                className={`product-brand-information ${
                  isExpanded ? "expanded" : ""
                }`}
              >
                {productInfo.information}
              </p>
              <span>
                {!isExpanded && (
                  <button className="read-more-button" onClick={handleToggle}>
                    Read more.
                  </button>
                )}
              </span>
            </div>

            <div className="product-page-sizes">
              <h3 className="product-page-brand-h3">Sizes:</h3>
              <div className="product-page-size-wrapper">
                {productInfo.skus.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => handleUpdateStockAndPrice(id, item.code)}
                  >
                    {item.code}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-page-bottom">
              <img src="/add-to-bag.svg" alt="Add to bag icon" />
              <button className="product-add-to-cart">Add to cart</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
