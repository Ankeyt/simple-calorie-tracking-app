const Calorie=require('../model/calorievalue')


exports.addcalorie=async (req,res)=>{
const {time,foodname,calorievalue,userid}=req.body 
//console.log(req.body)
const addfood=await Calorie.create({
    time:time,
    foodname:foodname,
    calorievalue:calorievalue,
    userid:userid
})
console.log("added",addfood)
return res.json({addfood})


}