import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";

export const requireSignIn = async (req,res,next) => {
    try {
        const decode = jwt.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user=decode;
        next();

    } catch (error) {
        console.log(error)
    }
}

export const isAdmin = async (req,res,next) =>{
    try {
        const user = userModel.findById(req.user._id)
        if(user.role !== 0){
            return res.status(401).send({
                success:false,
                message :"UnAuthorized Access"
            })
        }
        else{
            next()
        }
    } catch (error) {
        console.log(error)
        
    }
}