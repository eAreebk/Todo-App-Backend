import authSchema from "../Models/authModel.js";

// Simple async function to validate signup data

export async function validateLogin(email, password) {
    if (!email || !password) {
        return "Email and Password both are required";
    }

    if (password.length < 6) {
        return "Entered Password is less than 6 characters";
    }

    if (!email.includes("@")) {   //if the email does NOT include '@
        return `Missing '@' in the gmail`;
    }

    const userEmail = await authSchema.findOne({ email });

    console.log(userEmail);
	

    if (userEmail){
        if (userEmail.password !== password) {
            return "Invalid Password";
        }
    } else{
        return  "Invalid Email"
    }

    return console.log('Login Controller is okay'); // No errors
}

