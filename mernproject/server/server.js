// Create Server
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use=(express.json())

// Connect DB
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://shehabmontaser32:6ZsZv0sayopscvoW@cluster0.s0fsrht.mongodb.net/mernproject")

// Impor User model
 const UserModel = require('./models/Users')

 // Get Request
app.get("/users", async (req,res)=> {
    const users = await UserModel.find();
    res.json(users)
})

// Create User
app.post("/createUser", async (req,res)=> {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json(req.body)
})



app.listen("3001", () => {
    console.log("server Works!")
}
)