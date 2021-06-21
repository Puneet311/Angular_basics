const express=require('express');
const router=require('./routes/route');
const bodyparser=require("body-parser");
const cors=require('cors')
const path=require('path');
const app=express();


app.use(cors())
app.use(bodyparser.json())

app.use(express.static(path.join(__dirname,'public/dist')));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/dist/index.html"));
    console.log("we are here")
  
})

app.use('/myapp',router);



const PORT=process.env.PORT || 3000;

app.listen(PORT);
console.log("server is listening to port 3000");