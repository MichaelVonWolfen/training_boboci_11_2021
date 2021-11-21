const middleware = (req, res, next)=>{
    console.log("Hello from middleware!")
    // return res.sendStatus(400)
    next()
}
const middleware_2 = (req, res, next)=>{
    console.log("Hello from middleware 2!")
    return res.sendStatus(400)
    next()
}
module.exports = {
    middleware, middleware_2
}