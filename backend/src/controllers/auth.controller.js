import { generateTokenAndSetCookies } from "../../utils/generateTokenAndSetCookies.js";
import { generateVerificationToken } from "../../utils/generateVerificationCode.js";
import { User } from "../models/User.model.js";
import bcryptjs from "bcryptjs";

export async function signup(req , res){
    try{
        const {email , password , name } =  req.body;
        if(!email || !password || !name){
            return res.status(400).json({message : "All fields are required"});
        }

        const userAlreadyExists =  await User.findOne({ email });
        if(userAlreadyExists){
            return res.status(400).json({message : "User already exists"});
        }

        const hashedpassword  = await bcryptjs.hash(password , 10);
          const verificationToken = generateVerificationToken();
        const user =  await User.create({
            email,
            password : hashedpassword,
            name ,
            verificationToken,
            verificationTokenExpiresAt : Date.now() + 24 * 60 * 60 * 1000 // 24 hours
        });

        await user.save();

        generateTokenAndSetCookies(res, user._id);

        return res.status(201).json({
            success : true,
            message : "User created successfully",
            user : {
                ...user._doc,
                password: undefined, // Exclude password from response
              
            }
        
        })

    }
    catch(error){
        console.error("error : " , error.message);
        return res.status(400).send
    }
};
export function login(req, res){
    
};
export function logout(){
    res.send("logout endpoint hit successfully");
};
