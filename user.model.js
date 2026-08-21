import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

const userschema=new mongoose.schema ( 
    { 
        name:{
            type: string ,
            required:[true,'user name is required'],
            trim: true,
            minlength:2,
            maxlength:50,
        },
        email:{
            type: string ,
            required:[true,'user email is required'],
            trim: true,
            lowercase:true,
            match:[/\S+@\S+\.\S+/,'enter a valid email'],
            
        },
        password:{
            type: string ,
            required:[true,'password is required'],
            minlength:6
        },
    
    },
{timestamps:true}


);
const user=mongoose.model('user',userschema);

export default user;