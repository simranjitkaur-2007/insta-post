const mongoose = require("mongoose");//import mongoose as i t connect mongoDB and node.js

async function connectDB() {
    await mongoose.connect("mongodb://localhost:27017/hello")
   console.log("connected to DB")
}
connectDB()
module.exports = connectDB;//exports to connectDb fun and can be used in server.js.
