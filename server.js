const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile("index.html");
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});
