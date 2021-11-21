const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const bp = require('body-parser')
const middlewareFile = require("./src/middlewares/middleware")
const user = require("./src/routes/user")
app.use(bp.json())
app.use(bp.urlencoded({
    extended:true
}))

app.use("/user", middlewareFile.middleware, user)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})