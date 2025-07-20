import mongoose from 'mongoose';
import 'dotenv/config';

export const  connectDB =  async () => {
    try{
       const conn =  await mongoose.connect(process.env.MONGO_URI);

       console.log(`mongodb connected at ${conn.connection.host}`);

    }
    catch(error){
        console.error("Error connection to MongoDB : ", error.message);
        process.exit(1);
    }
}

