require("dotenv").config()
const express = require("express")
const fileupload = require("express-fileupload")
const userRouter = require("./Routes/UserRouter")
const productRouter = require("./Routes/ProductRouter")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(fileupload())

app.use("/api",userRouter)
app.use("/Product-api",productRouter)

const port = process.env.PORT
app.listen(port,()=>{
    console.log("server start at port ",port );
})