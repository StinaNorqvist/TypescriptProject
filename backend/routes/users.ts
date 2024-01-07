import express from "express";
import { Client } from "pg";
const router = express.Router();
const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

// GET ALL USERS
router.get("/user", async (_request, response) => {
  try {
    const { rows } = await client.query("SELECT * FROM users);");
    response.send(rows);
    console.log("Request was successful");
  } catch (error) {
    response.status(500).send("Internal server error");
    console.log(error, "Failed to fetch products");
  }
});

export default router;
