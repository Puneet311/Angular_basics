const express=require('express');
const router=require('./routes/route');
const bodyparser=require("body-parser");
const cors=require('cors')
const app=express();

app.use(express.static(root_-__dirname+'/dist'));
app.use(cors())
app.use(bodyparser.json())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/index.html'));
})
app.use('/myapp',router);

const port=process.env.PORT ||3000;

app.listen(port);
console.log("server is listening to port 3000");