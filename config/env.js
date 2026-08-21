import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` }); //multiple envornment variables

export const {PORT=5500,
    NODE_ENV,
    db_uri,
    jwt_secret,
    jwt_expires_in
}= process.env;
