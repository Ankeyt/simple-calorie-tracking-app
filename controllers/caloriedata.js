const Calorie=require('../model/calorievalue')

exports.getdata=async(req,res)=>{
const {id}=req.params

    const alldata= await Calorie
    .find({userid:id})
    .sort({calorievalue:-1})

    //console.log("alldata",alldata)
    return res.json({alldata})
}