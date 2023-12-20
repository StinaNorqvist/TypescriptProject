import express from "express";
import { Client } from "pg";
const router = express.Router();
const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

// GET ALL CATEGORIES
router.get("/categories", async (_request, response) => {
  try {
    const { rows } = await client.query("SELECT * FROM categories");
    response.send(rows);
    console.log("Request was successful");
  } catch (error) {
    response.status(500).send("Internal server error");
    console.log(error, "Failed to fetch categories");
  }
});

export default router;
