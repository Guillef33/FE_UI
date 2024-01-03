import React, { useState } from "react";
import Products from "./pages/Products";
import Product from "./pages/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [sku, setSku] = useState("");
  const [productInfo, setProductInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSku(event.target.value);
  };

  const handleFetchProductInfo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/product/${sku}`);
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

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
