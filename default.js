import { products } from "./constants/data.js";
import Product from "./model/product.js";

/**
 * @description. upload  products to mongodb
 */

const defaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("data is uploaded successfully");
  } catch (err) {
    console.log(`data is not uploaded please try again`, err.message);
  }
};

export default defaultData;
