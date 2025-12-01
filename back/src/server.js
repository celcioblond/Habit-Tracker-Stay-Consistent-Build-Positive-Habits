import express from 'express';
import habits from './routes/habits.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/habits", habits);

app.listen(port, () => {
  console.log(`Servidor levantado en puerto http://localhost:${port}`);
});