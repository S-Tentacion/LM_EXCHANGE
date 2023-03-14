import * as dotenv from 'dotenv' 
import express from "express";
import Connection from "./database/db.js";
import defaultData from "./default.js";
import cors from "cors";
import Router from "./routes/index.js";
import bodyParser from "body-parser";

// init app
const app = express();

/**
 * @description. env config
 */

dotenv.config();

const port = 8000;

app.use(cors());

/**
 * @description. body parser middleware
 */

app.use(bodyParser.json({ extened: true }));
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * @description. routes
 */

app.use("/", Router);

app.listen(port, () => {
  console.log(`Server is working as expected ${port}`);
});

/**
 * @description. mongodb connection function
 */

Connection();

/**
 * @description. upload products to database
 */

defaultData();
