import Role from "../models/Role.js"
import User from "../models/user.js"
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import { createSuccess } from "../utils/success.js";
import jwt from 'jsonwebtoken'

export const register= async (req,res,next)=>{
    const role= await Role.find({role:'User'});
    const salt= await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt)
    const newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        userName:req.body.userName,
        email:req.body.email,
        password:hashPassword,
        roles:role
    });
    await newUser.save();
    return next(createSuccess(200,"Registration Success"))
}

export const login= async (req,res,next)=>{
    try {
        const user= await User.findOne({email:req.body.email})
        .populate("roles","role");
        const {roles}=user
        if(!user){
            return res.status(404).send("user not found")
        }
        const isPasswordCorrect= await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect){
            return res.status(400).send("Password is incorrect")
        }
        const token=jwt.sign(
            {id:user._id,isAdmin:user.isAdmin,role:roles},
            process.env.JWT_SECRET
        )
        res.cookie("access", token,{httpOnly:true})
        .status(200)
        .json({
            status:200,
            message:"login Success",
            data:user
        })

        // return next(createSuccess(200,"Login Success"))

    } catch (error) {
        return res.status(500).send("Internal Server Error")
    }
}