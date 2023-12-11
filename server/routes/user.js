import { loginUser, logoutUser, signinUser } from "../controllers/userControllers.js";

import express from "express"

const router = express.Router();

router.post("/signup", signinUser)

router.post("/login", loginUser)

router.post("/logout", logoutUser)


export default router
