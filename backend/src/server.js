import express from 'express';
import { connectDB } from '../db/connectDB.js';
import AuthRoutes from './routes/auth.route.js';
import "dotenv/config"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth" , AuthRoutes);


connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})