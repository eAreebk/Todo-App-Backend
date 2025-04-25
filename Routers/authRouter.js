import express from 'express';
import {signupController, loginController} from '../Controllers/authController.js';  

const authRouter = express.Router();   //Giving all powers of express router to router variable


authRouter.post('/signup', signupController);
authRouter.post('/login', loginController);



export  {authRouter};   //Exporting the Authrouter to be used in other files