const middlewareFile = require("../middlewares/middleware");
const router = require("express").Router()
router.get("/",(req, res)=>{
    res.send({
        message:"Hello from get!"
    })
})
router.post("/",(req, res)=>{
    console.log(req.body)
    res.send({
        message:"Hello from post!"
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