const express=require('express')
const App=express()
const Mongoose=require('mongoose')
const userRoute=require('./routes/userRoute')


App.use(express.json())

App.use(userRoute)



Mongoose.connect("mongodb+srv://ankit:87654321@cluster0.rmpmo.mongodb.net/calorie_tracking?retryWrites=true&w=majority",()=>{
    console.log('MongoDB connected')
})

App.listen(3000,()=>{
console.log("Server running on port 3000")
})