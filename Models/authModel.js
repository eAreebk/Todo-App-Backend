import mongoose from 'mongoose';

const authSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please Add First Name'],
            minlength: 3,
            maxlength: 20,
            trim: true,      // removes spaces from the beginning and end of the password.
        },
        email: {
            type: String,
            required: [true, 'Please Add Email'],
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, 'Please Add Password'],
            minlength: 6,
            trim: true,
        },
    },

    {
        timestamps: true,     // Automatically adds createdAt and updatedAt fields to the document.
    }
);

export default mongoose.model('authSchema', authSchema);