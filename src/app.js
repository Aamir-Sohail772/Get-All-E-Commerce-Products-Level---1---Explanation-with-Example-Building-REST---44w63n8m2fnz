const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// GET endpoint for sending all the products to the client
app.get("/api/v1/products", (req, res) => {
  // Check if there are products in the array
  if (products.length === 0) {
    // If no products are found, return a 404 response
    return res.status(404).json({ message: "Product not found" });
  }

  // If products are found, return a 200 response with the products
  res.status(200).json({
    status: "success",
    message: "Product fetched successfully",
    data: {
      products: products,
    },
  });
});

module.exports = app;





















// const fs = require("fs");
// const express = require("express");
// const app = express();

// // Importing products from products.json file
// const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// // Middlewares
// app.use(express.json());

// // Write GET endpoint for sending all the products to client here
// // Endpoint - /api/v1/products

// module.exports = app;
