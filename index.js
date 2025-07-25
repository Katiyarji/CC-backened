import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import connectDB from './src/db/db.js'
import dotenv from 'dotenv'
import userRoute from "./src/routes/user.routes.js"
dotenv.config({
  path: './.env'
});

connectDB();
const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"))
app.use(cookieParser);


app.use("/api/v1/users", userRoute)
app.get("/", (req, res) => {
  res.send("hello world")
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})


