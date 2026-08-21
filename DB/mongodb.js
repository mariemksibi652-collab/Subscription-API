import mongoose from 'mongoose';
import {db_uri,NODE_ENV} from '../config/env.js';

if (!db_uri) {
    throw new  Error('please define the mongodb_uri envirnoment variable inside .env.development.local');
    
}
const connecttodb = async () => {
    try{
        await mongoose.connect(db_uri);
        console.log(`connected to db in ${NODE_ENV} mode`);

    } 
    catch(error){
        console.error('error connecting to database:',error);
        process.getMaxListeners(1); 
    }
} 

export default connecttodb;
