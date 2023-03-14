import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

/**
 * @description product schema
 */

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    required: true,
    type: String,
    default: "",
  },
  category: {
    required: true,
    type: String,
    default: "",
  },
  title: {
    required: true,
    type: String,
    default: "",
  },
  price: Number,
  quantity: Number,
  description: {
    required: true,
    type: String,
    default: "",
  },
  rating: Object,
});
productSchema.plugin(paginate);
const Product = mongoose.model("ProductTable", productSchema);

export default Product;
