const { createProduct, getProducts } = require("../controllers/product.controllers");

const express = require("express");
const { TokenIssue } = require("../controllers/token.controllers");
const authenticate = require("../middleware/authenticate");
const router = express.Router();

router.get("/tokenIssue", TokenIssue);

router.post("/products", authenticate, createProduct);

router.get("/products", authenticate, getProducts);

module.exports = router;
