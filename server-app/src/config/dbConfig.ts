// import mongoose from "mongoose";

const mongoose = require('mongoose');
const uri = "mongodb+srv://user1:pass@cluster0.r9beg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

 

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(uri);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;