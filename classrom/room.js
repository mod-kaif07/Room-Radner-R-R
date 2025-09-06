const express = require("express");
const app = express();
const session = require('express-session')
const port=3000;
app.use(session({ secret: 'keyboard cat'}))

app.get("/",(req,res)=>{
    res.send("This is Root ");
})
app.listen(port,()=>{
   console.log("Sevring is listenig CLassromm 3000 ")
})