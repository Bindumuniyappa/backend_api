const express=require('express')
const details=require('./Details')
const cors=require('cors')
 const app=express();
app.use(cors({origin:"*"}))

app.get("/",(req,res)=>{
    res.json(details)
})


app.listen(3002,()=>{
console.log("server is running on port 3002")
})