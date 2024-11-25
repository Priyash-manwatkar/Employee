const mongoose=require("mongoose");
const EmployeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    passowrd:String
})
const EmployeeModel2=mongoose.model("employee",EmployeeSchema)
module.exports=EmployeeModel2;