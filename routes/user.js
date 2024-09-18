import express from "express";
const router=express.Router();
import User from "../models/user.js";
  router.get("/users",async(req,res)=>{
    const users=await User.find({});
    res.status(200).json({
        succses:true,
        users,
    })
})

router.get("/useById/:id",async(req,res)=>{
  try {
    const {id}=req.params;
    const user=await User.findById(id);
    res.status(200).json({
      success:true,
      user
    })
  } catch (error) {
    console.log(error)
  }
})


router.post("/newUser",async(req,res)=>{
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
})
export default router;
