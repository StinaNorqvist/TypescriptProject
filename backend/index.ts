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

// ROUTES
import productRouter from "./routes/products";
app.use("/api", productRouter);
import categoryRouter from "./routes/categories";
app.use("/api", categoryRouter);
import accessoriesRouter from "./routes/accessories";
app.use("/api", accessoriesRouter);
import userRouter from "./routes/users";
app.use("/api", userRouter);

app.use(cors());
app.use(express.static(path.join(path.resolve(), "public")));

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
