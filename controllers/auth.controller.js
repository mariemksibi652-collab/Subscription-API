import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req,res,next) => {
    const session=await mongoose.startSession();
    session.startTransaction();//atomic updates
    //req body ----> is an object that contains the data sent by the client in the request body. It is typically used to send data from the client to the server, such as form submissions or JSON payloads.(post request)
    try{
        const {name,email,password}=req.body;

        const existingUser=await user.findOne({email});
        if(existingUser){
            const error=new Error('user already exists');
            error.statusCode=409;
            throw error;
        }
        const salt =await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const newUser=await user.create([{name,email,password:hashedPassword}],{session});

        const token=jwt
    
        
}catch(error){
    await session.abortTransaction();
    session.endSession();
    next(error);
}
}
export const signin= async (req,res,next) => {}
export const signout= async (req,res,next) => {}