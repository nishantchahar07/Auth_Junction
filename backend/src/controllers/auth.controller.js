import { user } from "../models/User.model";
import user from "../models/User.model.js";
import bcryptjs from "bcryptjs";

export async function signup(req , res){
    try{
        const {email , password , name } =  req.body;
        if(!email || !password || !name){
            return res.status(400).json({message : "All fields are required"});
        }

        const userAlreadyExists =  await user.findOne({ email });
        if(userAlreadyExists){
            return res.status(400).json({message : "User already exists"});
        }

        const hashedpassword  = await bcryptjs.hash(password , 10);
        const newUser =  await user.create({
            email,
            password : hashedpassword,
            name 
        });

        return res.status(201).json({
            message : "user created ",
            user
        })

    }
    catch(error){
        console.error("error : " , error.message);
        return res.status(400).send
    }
};
export function login(req, res){
   res.send("login endpoint hit successfully");
};
export function logout(){
    res.send("logout endpoint hit successfully");
};
