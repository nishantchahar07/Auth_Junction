import express from 'express';
import { connectDB } from '../db/connectDB.js';

const app = express();
const PORT = process.env.PORT || 3000;





app.get("/" , (req, res) => {
    res.send("jai mahismati!!!")
})
app.use("/api/auth" , AuthRoutes);


connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})