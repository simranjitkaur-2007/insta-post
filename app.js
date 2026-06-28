const express = require('express');
/*require('express') imports the Express.js library.express is framework
express is a function that helps you create a web server in Node.js.*/

const multer=require('multer');
const uploadFile=require("./src/services/storage.service")
const app=express();//calling func
app.use(express.json());//to read user data

//but we r reading data in form data format from postman hence we'll use multer
const upload=multer({storage:multer.memoryStorage()})

app.post('/create-photo', upload.single("image"), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const result = await uploadFile(req.file.buffer)
    console.log(result);
})
/*app.post() → Creates a POST API

'/create-post' → API endpoint

(req, res) → Request and Response objects

req.body → Data sent from client*/

module.exports=app;//create an app server and u can addd any file
//this was basic setup of an express.js in node.js
