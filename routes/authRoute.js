import express from "express";
import {registerController, loginController, testController, forgetPasswordController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// route object
const router = express.Router()

// routing
// Register || method POST
router.post('/register', registerController)

// LOGIN || POST
router.post('/login', loginController)

// Forget password
router.post('/forget-password', forgetPasswordController)

// test route
router.get('/test', requireSignIn, isAdmin, testController)

// protected routes (User)
router.get('/user-auth', requireSignIn, (req,res) => {
    res.status(200).send({ok:true});
})

// protected routes (Admin)
router.get('/admin-auth', requireSignIn, isAdmin, (req,res) => {
    res.status(200).send({ok:true});
})

export default router