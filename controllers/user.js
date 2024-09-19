import User from "../models/user.js";

export const getAllUsers=async(req,res)=>{
    try {
        const users=await User.find({});
        res.status(200).json({
        succses:true,
        users,
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Error fetching users"
        })
    }
}
export const getUserById=async(req,res)=>{
    try {
      const {id}=req.params;
      const user=await User.findById(id);
      res.status(200).json({
        success:true,
        user
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error fetching user",
      })
    }
  }
export const createNewUser=async(req,res)=>{
    try {
      const {name,email,password}=req.body;
      await User.create({
      name,
      email,
      password
    })
    res.status(201).json({
      sucsess:true,
      message:"User Created Succsesfully"
    })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error creating user"
        })
    }
  }
