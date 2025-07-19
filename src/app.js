import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
const PORT=process.env.PORT||3000
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"))
app.use(cookieParser);

//routes import
import userRoute from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users",userRoute)



export{app,PORT}
