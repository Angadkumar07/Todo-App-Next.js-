import { mongoose } from "mongoose";

  //database schema
  const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
  })

  //user model
  const User=mongoose.model('user',UserSchema);
  export default User;