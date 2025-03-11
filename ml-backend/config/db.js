import mongoose, { mongo } from 'mongoose';
import colors from 'colors';

// Connect to MongoDB
const MONGO_URI = 'mongodb://localhost:27017/sultanDB';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.bold);
        process.exit(1);
    }
};

export default connectDB;