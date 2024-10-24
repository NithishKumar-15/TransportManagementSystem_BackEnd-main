import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
    UserName: {
        required: true,
        type: String
    },
    Email: {
        required: true,
        type: String
    },
    Password: {
        required: true,
        type: String
    },
    Role: {
        required: true,
        type: String
    }
})

const LoginModel = new mongoose.model("Users", LoginSchema, process.env.DB_USERCOLLECTION);

export default LoginModel;