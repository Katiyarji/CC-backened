
import connectDB from './src/db/db.js'
import {app,PORT} from './src/app.js'
import dotenv from 'dotenv'
dotenv.config();


connectDB().
then(
    app.listen( PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})).
catch("error",(error)=>{
  console.log("MONGODB connection failed !!");
  
})



