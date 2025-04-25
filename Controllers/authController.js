import express from 'express';
import  authSchema  from '../Models/authModel.js'; // Import the User model
import { validateSignup } from "../Utils/signupValidation.js";
import { validateLogin } from "../Utils/loginValidation.js";


export const signupController = async (req, res) => {
    console.log(req.body, "===>> req.body")     // Prints the data sent by the user .

    const { username, email, password } = req.body;  //Destructuring the data sent by the user to the server

    try {
        const error = await validateSignup(username, email, password);
    
        if (error) {
            return res.status(400).json({ status: false, message: error });
        }
    } 
    
    catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: "Server error" });
    }

    let doc = new authSchema({     //Creates a new user object with the given data.
        username: username,
        email: email,
        password: password,
    });
   
    let savedUser = await doc.save();  //Saves the user object to the database.

    return res.status(200).json({ status: true,  message: "User signed up successfully" });  
};



export const loginController = async (req, res) => {    //Sending data to the validation function
    console.log(req.body, "===>> req.body"); 

    const { email, password } = req.body; // Get email and password

    try {
        const error = await validateLogin( email, password);    //Sending data to the validation function
    
        if (error) {
            return res.status(400).json({ status: false, message: error });
        }
    } 
    
    catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: "Internal Server error" });
    }

    
        return res.status(200).json({ //Sending the success message to the user
            status: true,
            message: "Login successful"
        });
};
