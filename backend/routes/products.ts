import express from "express";
import { Client } from "pg";
const router = express.Router();
const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

// GET ALL PRODUCTS
router.get("/products", async (_request, response) => {
  try {
    const { rows } = await client.query(
      "SELECT productId, productName, productPrice, productImage, productSize, conditions.condition AS productCondition, categories.category AS productCategory FROM products INNER JOIN conditions ON ProductCondition = conditionId INNER JOIN categories ON productCategory = categoryId;"
    );
    response.send(rows);
    console.log("Request was successful");
  } catch (error) {
    response.status(500).send("Internal server error");
    console.log(error, "Failed to fetch products");
  }
});

// GET PRODUCTS FROM ONE CATEGORY
router.get("/products/:category", async (request, response) => {
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

// POST NEW PET
// app.post("/api", async (request, response) => {
//   try {
//     const { name, age, species } = request.body;
//     const { rows } = await client.query(
//       "INSERT INTO pets (name, age, species) VALUES ($1, $2, $3)",
//       [name, age, species]
//     );
//     response.send(rows);
//   } catch (error) {
//     response.status(500).send("Internal server error");
//     console.error(error, "Failed to post a pet");
//   }
// });

// DELETE PET
// app.delete("/api", async (request, response) => {
//   try {
//     const { id } = request.body;
//     const { rows } = await client.query("DELETE FROM pets WHERE id = $1", [id]);
//     response.send(rows);
//   } catch (error) {
//     response.status(500).send("Internal server error");
//     console.log(error, "Failed to delete a pet");
//   }
// });

export default router;
