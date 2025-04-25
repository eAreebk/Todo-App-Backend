import mongoose from "mongoose";


//Try to connect MongoDB, if success show connected or will through error
export const connectDB = async () => {
    try {
        const con = await mongoose.connect('mongodb+srv://eareebk79:c0.ak.97@cluster0.l541u.mongodb.net/');
        //const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${con.connection.host}`),
        {
          //  serverSelectionTimeoutMS: 5000, // Timeout AFTER 5s
           // socketTimeoutMS: 45000, // Close sockets after 45s of inactivity


        }
    } catch (error) {
        console.log(error);
    }
};