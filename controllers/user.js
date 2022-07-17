const Calorie=require('../model/calorievalue')
const User=require('../model/user')
var jwt = require('jsonwebtoken');
const { find } = require('../model/user');

exports.createuser=async (req,res)=>{
try {
   const  {name,email,admin}=req.body
   //console.log(req.body)
   const obj={
    name:name,
    email:email,
    admin:admin
   }
   const token=jwt.sign(obj, 'Iamcreatingasimplecalorietrackingapp');
console.log("control",token)
const check=await User.findOne({email:email})

if(check)
{
   return res.json({ msg: "User Already there!!" });
}
else{
   const createuser=await User.create({
      name:name,
      email:email,
      admin:admin
   })
   
console.log("user",createuser)
return res.json({msg:"usercreated",
token,
createuser})
}



} catch (error) {
   console.log(error) 
}
}

exports.getuser=async (req,res)=>{
try {
   //console.log(req.user)
   if(req.user.admin)
   {
      const data=await Calorie.find().populate("userid")

      return res.json({msg:"You are admin",
   data})
   }
   else{
      return res.json({msg:"Try again BRO!"})
   }
} catch (error) {
   console.log(error)
}
}