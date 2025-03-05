import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DatabaseConnectionError } from '../errors/database.connection.error';
dotenv.config();

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI!);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err: any) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        throw new DatabaseConnectionError(); // Throw the custom error
    }
};
