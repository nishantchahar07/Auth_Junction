import express from 'express';
import { connectDB } from '../db/connectDB.js';
import "dotenv/config"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());





app.get("/" , (req, res) => {
    res.send("jai mahismati!!!")
})
app.use("/api/auth" , AuthRoutes);


connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})