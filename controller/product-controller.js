import Product from "../model/product.js";

/**
 * @description get all products
 */

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.paginate(
      {},
      { page: req.query.page, limit: req.query.limit }
    );
    res.status(200).json({ products: products.docs });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

/**
 * @description get single products
 */

export const getProduct = async (req, res) => {
  try {
    // search the product using id
    const product = await Product.find({ id: req.params.id });
    res.status(200).json({ products: product });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
