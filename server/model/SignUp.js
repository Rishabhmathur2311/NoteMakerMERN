import mongoose from "mongoose";

const SignUpSchema=new mongoose.Schema({
    email:{
        type: String,
    },

    password: {
        type: String
    },

    name:{
        type: String
    }
}, {
    timestamps: true
})

const SignUp=mongoose.model('SignUp', SignUpSchema);

export default SignUp;