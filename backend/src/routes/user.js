const middlewareFile = require("../middlewares/middleware");
const router = require("express").Router()
const userModel = require("../models/user")
const mongoose = require("mongoose")
router.get("/",(req, res)=>{
    res.send({
        message:"Hello from get!"
    })
})
router.get("/:id",async (req, res)=>{
    console.log(req.params.id)
    const user = await userModel.findOne({_id: new mongoose.Types.ObjectId(req.params.id)});
    return res.send(user)
})
router.post("/",(req, res)=>{
    console.log(req.body)
    const {name, age} = req.body
    const user = new userModel({
        name,
        age
    })
    user.save()
    res.send({
        message:`Received user ${name} with age ${age}.`
    })
})
router.patch("/",(req, res)=>{
    console.log(req.body)
    res.send({
        message:"Hello from Patch!"
    })
})
router.delete("/",middlewareFile.middleware_2, (req, res)=>{
    console.log(req.body)
    res.send({
        message:"Hello from Delete!"
    })
})

module.exports = router