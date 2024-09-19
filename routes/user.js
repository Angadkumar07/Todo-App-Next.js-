import express from "express";
import {getAllUsers,getUserById,createNewUser} from "../controllers/user.js"

const router=express.Router();

router.get("/users",getAllUsers);
router.get("/useById/:id",getUserById);
router.post("/newUser",createNewUser);

export default router;
