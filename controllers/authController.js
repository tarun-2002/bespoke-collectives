import userModel from "../models/userModel.js";
import {comparePassword, hashPassword} from "../helpers/authHelper.js"
import JWT from "jsonwebtoken"

export const registerController = async(req,res) =>{
    try{
        const{name,email,password,phone} = req.body
        if(!name){
            return res.send({message:"Name is Required"})
        }
        if(!email){
            return res.send({message:"Email is Required"})
        }
        if(!password){
            return res.send({message:"Password is Required"})
        }
        if(!phone){
            return res.send({message:"Phone No. is Required"})
        }

// checkuser
        const existingUser= await userModel.findOne({email})
        // existinguser
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'Already Registered, Please LogInstance.',
            })
        }
const hashedPassword = await hashPassword(password)

const user= await new userModel({name,email,phone,password:hashedPassword}).save()

res.status(201).send({
    success:true,
    message:"User Registered Successfully",
    user
})
    }

    catch (error){
        console.log(error)
        res.statue(500).send({
            success:false,
            message :'ERROR IN REGISTRATION',
            error
        })
    }
};


// login controller
export const loginController = async(req,res) =>{

    try{
        const{email,password} = req.body
        if(!email || !password ){
            return res.status(404).send({
                success:false,
                message:"Invalid Email or Password"})
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registered"})

        }
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invald Password"
            })
        }
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "300d" ,
            });
            res.status (200). send({
            success: true,
            message: "Login Successfully",
            user:
            {
            name: user.name,
            email: user.email,
            phone: user. phone,
            },
            token
        })
    }
    
    catch(error){
        res.statue(500).send({
            success:false,
            message :'ERROR IN LOGIN',
            error
        })
    }
}

// Test
export const testController = (req,res) =>{
    res.send("Protected Routes");
}
