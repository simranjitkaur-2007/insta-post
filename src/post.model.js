const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    image:String,
    caption:String,

})// we created structure of the document
const postModel=mongoose.model("post",postSchema)//connectsschema to mongodb 
 module.exports=postModel;