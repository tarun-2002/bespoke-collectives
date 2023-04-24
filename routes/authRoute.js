import express from "express"
import {registerController} from "../controllers/authController.js"
import { loginController } from "../controllers/authController.js"
import {testController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js"

const router = express.Router()

// routing register

router.post('/register',registerController)
router.post('/login',loginController)

// LOGIN

// Test Route

router.get("/test",requireSignIn,isAdmin,testController);


export default router