import express from "express";
import {PORT} from './config/env.js'
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subRouter from "./routes/sub.routes.js";
import connecttodb from "./DB/mongodb.js";
import errormiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";


const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));//process data from html forms 
app.use(cookieParser());//reads cookies from incoming requests so app can store user data in cookies and retrieve it later for authentication and authorization purposes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subs',subRouter);



app.get('/', (req,res) => {
    res.send('welcome to the sub tracker api');
});
app.use(errormiddleware);
app.listen(PORT,async() => {
    console.log(`sub tracker api is running on http://localhost:${PORT} `);
    await connecttodb();
})
 export default app;