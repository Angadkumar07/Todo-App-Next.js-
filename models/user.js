import { mongoose } from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backendApi",
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

  //database schema
  const Schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
  })

  //user model
  const User=mongoose.model('user',Schema);
  export default User;