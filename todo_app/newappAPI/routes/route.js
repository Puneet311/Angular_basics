const express = require('express');
const model = require('../model/connection');
const router = express.Router();


router.get('/home', async(req, res) => {
  let data=await model.getData();
  //console.log(data.rows);
  res.json(data.rows);
});


router.post('/addUser',async (req, res) => {
  let obj=req.body
  let insert=await model.addUser(obj);
  res.json({"meassage":"user added successfully"});
});

router.delete('/delete/:id',async(req,res)=>{
  let id=req.params.id;
  let item = await model.deleteUser(id);
  if(item.rowCount==1){
    
  res.json({"message":'user with id:'+id+'is deleted'});
  }else{
    res.json({"message":"no user is deleted"})
  }
})

router.put('/modify/:id',async(req,res)=>{
  let id=req.params.id;
  let colname=req.body.name; 
  let value=req.body.value;
  // console.log(colname,value);
  // console.log("req",req.body);
  let item = await model.updateUser(id,colname,value);
  res.json({message:"user updated successfully"});
})
 
module.exports = router;
