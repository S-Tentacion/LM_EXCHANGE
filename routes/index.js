import express from "express";
import {
  getAllProducts,
  getProduct,
} from "../controller/product-controller.js";
import {
  getUserDetails,
  updateUserDetails,
  userLogin,
  userSignUp,
  initialization,
} from "../controller/user-controller.js";

const router = express.Router();

router.get("/", initialization);
router.get("/products", getAllProducts);
router.get("/product/:id", getProduct);
router.get("/getuserdetails", getUserDetails);
router.post("/auth/signup", userSignUp);
router.post("/auth/login", userLogin);
router.patch("/updateUserDetails", updateUserDetails);

export default router;
