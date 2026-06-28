const app=require("./src/app");//here the app file u created using express.js is exported here
const connectDB=require("./src/db/db");//imports connectDB func
connectDB()//calls


app.listen(2000,() =>{
console.log("server is running on port 2000");
})
