import express from 'express';
import habits from './routes/habits.js';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/habits", habits);

connectDb().then(() => {
  app.listen(port, () => {
  console.log(`Servidor levantado en puerto http://localhost:${port}`);
  });
})
