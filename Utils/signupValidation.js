import authSchema from "../Models/authModel.js";

// Simple async function to validate signup data


export async function validateSignup(username, email, password) {

    if (!username || !email || !password) {
        return "Missing fields";
    }

    if (password.length < 6) {
        return "Password must be at least 6 characters";
    }

    if (!email.includes("@")) {
        return "Missing '@' in the email";
    }

    const userExists = await authSchema.findOne({ username });
    const emailExists = await authSchema.findOne({ email });

    if (userExists) {
        return "Username already exists";
    }

    if (emailExists) {
        return "Email already exists";
    }

    return console.log('Signup Controller is okay'); // No errors
}
