const Pool=require('pg').Pool;

const pool= new Pool({
    user:"postgres",
    password:"shanti@31",
    database:"test",
    host:"localhost",
    port:5432
});

//module.exports=pool

model={}

model.getData=async ()=>{
let data =await pool.query("SELECT * FROM person");
if(data){
    return data;
}else{
   return null;
}
}

model.addUser=async (obj)=>{

    let {first_name,last_name,contact,gender,email,date_of_birth}=obj;
    let inserted= await pool.query('INSERT INTO person(first_name,last_name,contact,gender,email,date_of_birth) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',[first_name,last_name,contact,gender,email,date_of_birth])
    if(inserted){
        return inserted;
    }else{
        return null;
    }                                
                                    
}

model.deleteUser=async (id)=>{
    let item=await pool.query('DELETE FROM person WHERE id=$1',[id]);
    if(item){
        return item;
    }else{
        return null;
    }
}

model.updateUser=async(id,colname,value)=>{     
 let item=await pool.query(`UPDATE person SET ${colname}=$1 WHERE id=$2`,[value,id]);
 if(item){
     return item;
 }else{
     return null;
 }
}

module.exports=model
