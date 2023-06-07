const { getProductsFromDb, createProductToDb } = require("../services/product.services");

const createProduct = async (req, res) => {
  try {
    const { name, price, description, createdAt } = req.body || {};

    // Validate required fields
    if (!name || !price || !description) {
      return res.status(400).json({ message: "Name, price and description are required fields." });
    }

    // create product payload
    const payload = {
      name,
      price,
      description,
      createdAt,
    };

    const book = await createProductToDb(payload);
    res.status(201).send({
      message: "Product Created Successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create the product." });
  }
};

const getProducts = async (req, res) => {
  try {
    // Retrieve all products
    const products = await getProductsFromDb();
    res.status(200).send({
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve products." });
  }
};

module.exports = {
  createProduct,
  getProducts,
};
