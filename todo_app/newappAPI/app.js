const express=require('express');
const router=require('./routes/route');
const bodyparser=require("body-parser");
const cors=require('cors')
const app=express();

app.use(cors())
app.use(bodyparser.json())

app.use('/myapp',router);

app.listen(3000);
console.log("server is listening to port 3000");