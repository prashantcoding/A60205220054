let  express = require("express");
var app = express();
const TrainRoutes=require('./Routes/TrainRoutes')
var port = 5000;
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use('/Train',TrainRoutes);
app.listen(port,()=>{
    console.log("app is running")
});