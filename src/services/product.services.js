const Product = require("../models/product.model");

const createProductToDb = async (payload) => {
  const product = new Product(payload);
  await product.save();
  return product;
};

const getProductsFromDb = async () => {
  // Retrieve all products from the database
  const products = await Product.find(
    {},
    {
      name: 1,
      price: 1,
      _id: 0,
    }
  );
  return products;
};

module.exports = {
  createProductToDb,
  getProductsFromDb,
};
