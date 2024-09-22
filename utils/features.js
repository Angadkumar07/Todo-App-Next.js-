import jwt from "jsonwebtoken";

export const setCookie=(User,res,message,statusCode=201)=>{
    const token=jwt.sign({_id:User._id},process.env.JWT_SECRET)
    res.status(statusCode).cookie('Token',token,{
        httpOnly:true,
      }).json({
        sucsess:true,
        message
      })
}
