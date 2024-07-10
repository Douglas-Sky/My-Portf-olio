import { Router } from "express";
import { signup } from "../controllers/controller.js";


const userRouter= Router()

// Define routes
userRouter.post('/users/signup',signup)

export default userRouter