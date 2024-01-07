import express from "express";
import { Client } from "pg";
const router = express.Router();
const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

// GET ALL USERS
router.get("/users", async (_request, response) => {
  try {
    const { rows } = await client.query("SELECT * FROM users");
    response.send(rows);
    console.log("Request was successful");
  } catch (error) {
    response.status(500).send("Internal server error");
    console.log(error, "Failed to fetch users");
  }
});

// POST A NEW USER
router.post("/users", async (req, res) => {
  console.log(req.body, "REQ BODY");
  const username = req.body.username;
  const useremail = req.body.useremail;
  const userpassword = req.body.userpassword;
  const useraddress = req.body.useraddress;
  const userzipcode = req.body.userzipcode;
  const usercity = req.body.usercity;

  const sql = `INSERT INTO users (username, useremail, userpassword, useraddress, userzipcode, usercity) VALUES ($1, $2, $3, $4, $5, $6)`;

  const values = [
    username,
    useremail,
    userpassword,
    useraddress,
    userzipcode,
    usercity,
  ];

  try {
    const { rows } = await client.query(sql, values);
    res.status(201).json({ message: "New user signed up" });
  } catch (error) {
    console.error("Error signing up new user:", error);
    res.status(500).json({ error: "Internal Server Error" });
    console.error("error", error);
  }
});

// LOGIN REQUEST TO SEE IF PASSWORD AND EMAIL IS CORRECT
router.post("/login", async (req, res) => {
  const useremail = req.body.useremail;
  const userpassword = req.body.userpassword;

  const sql = `SELECT * FROM users WHERE LOWER(useremail) = LOWER($1)`;

  try {
    await client.query(sql, [useremail], async (error, results) => {
      if (error) {
        throw error;
      }
      console.log("Login, check password");

      if (userpassword === results.rows[0].userpassword) {
        console.log("Correct password");
        res.send(results.rows[0]);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
