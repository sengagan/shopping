const express = require("express")
const userController = require("../Controller/UserController")
const userRouter = express.Router()

userRouter.post("/registration",userController.userRegistration)
userRouter.post("/login",userController.userLogin)

module.exports = userRouter