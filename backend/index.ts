import cors from "cors";
import dotenv from "dotenv";
import { Client } from "pg";
import express from "express";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

// GET ALL PRODUCTS
app.get("/products", async (_request, response) => {
  try {
    const { rows } = await client.query(
      "SELECT p.productId, p.productName, p.productPrice, p.productImage, p.productSize, c.condition AS productCondition, cat.category AS productCategory FROM products p INNER JOIN conditions c ON p.ProductCondition = c.conditionId INNER JOIN categories cat ON p.productCategory = cat.categoryId"
    );
    response.send(rows);
    console.log(response, "RESPONSE");
  } catch (error) {
    response.status(500).send("Internal server error");
    console.log(error, "Failed to fetch products");
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

app.use(cors());
app.use(express.static(path.join(path.resolve(), "public")));

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
