const mongoose=require('mongoose')

const CalorieSchema=new mongoose.Schema({
    time:{
        type: String,
        required: true,
        
    },
    foodname:{
        type: String,
        required: true,
    },
    calorievalue:{
        type: Number,
        required: true,
        
    },
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports=mongoose.model("Calorie",CalorieSchema)