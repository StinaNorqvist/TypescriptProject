import express from "express";
import { Client } from "pg";
const router = express.Router();
const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

// GET ALL ACCESORIES
router.get("/accessories", async (_request, response) => {
  try {
    const { rows } = await client.query(
      "SELECT productId, productName, productPrice, productImage, productSize, condition AS productCondition, category AS productCategory FROM products INNER JOIN conditions ON ProductCondition = conditionId INNER JOIN categories ON productCategory = categoryId WHERE category IN ('Shoes', 'Headwear', 'Earrings', 'Necklaces', 'Rings', 'Bags');"
    );
    response.send(rows);
    console.log("Request was successful");
  } catch (error) {
    response.status(500).send("Internal server error");
    console.log(error, "Failed to fetch products");
  }
});

// GET ACCESSORIES FROM ONE CATEGORY
router.get("/accessories/:category", async (request, response) => {
  try {
    const category = request.params.category;
    console.log(category, "CATEGORY");
    const { rows } = await client.query(
      "SELECT productId, productName, productPrice, productImage, productSize, conditions.condition AS productCondition, categories.category AS productCategory FROM products INNER JOIN conditions ON ProductCondition = conditionId INNER JOIN categories ON productCategory = categoryId WHERE category = $1",
      [category]
    );
    response.send(rows);
    console.log("Request was successful");
  } catch (error) {
    response.status(500).send("Internal server error");
    console.log(error, "Failed to fetch from category");
  }
});

export default router;
