import express from 'express'
import mongoose from 'mongoose'

import {authRouter} from './Routers/authRouter.js'  //Importing the authRoutes file
import {todoRouter} from './Routers/todoRouter.js'  //Importing the todoRoutes file 

import { connectDB } from './Utils/ConnectDB.js'



const app = express()    //Giving all powers of express to the app variable
const port = 3000       // Port on whcih server will run...

connectDB();           //Importing the connectDB function from ConnectDB.js file and calling it to connect to the database

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Welcome to the TODO APP!')
})

//Middleware 
app.use('/auth', authRouter) 
app.use('/todo', todoRouter)   ;  //Directing todo request to todoroutes (Ctrl + Click)


app.listen(port, () => {                                    
  console.log(`CL: Runnning Server on port ${port}`)     //confirm the server is running and on which port.  
})
