// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const products = require("../public/data/products");

app.use(cors());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const productId = req.params.id;
  const productDetails = products.find((product) => product.id == productId);

  if (productDetails) {
    res.json(productDetails);
  } else {
    res.status(404).json({ error: "Product not found ahora" });
  }
});

// app.get("/api/products/:sku", (req, res) => {
//   const sku = req.params.sku;
//   const product = products.find((p) =>
//     p.skus.some((skuObj) => skuObj.code === sku)
//   );

//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ error: "Product not found" });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
