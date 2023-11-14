const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    userName:{
       type: String,
        required:true
    },
    password:{
       type: String,
        required:true
    },

})

const Login = mongoose.modal("login",LoginSchema);
module.exports = Login