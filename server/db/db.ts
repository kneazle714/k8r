import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// create a function that will connect to a MongoDB database
const connectDB = async (): Promise<void> => {
  try {
    // Create variable that will be used to establish a connection to the database
    // The MONGO_URL is defined in our .env file

    //for testing purpose only
    const URI = process.env.MONGO_URL as string;
    const conn = await mongoose.connect(URI);
    // console.log(clc.redBright.bgWhite('MongoDB connected'));
    console.log('Connected to MongoDB');
    // Console log the local host if the connection is successful
    // console.log(`MongoDB Connected: ${ conn.connection.host }`.cyan.underline);
    // The error handler
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;