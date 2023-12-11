import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signinUser = async ( req, res, next) => {
    try {
        const { username, password } = req.body;

        const userExists = await User.findByUsername(username);
    
        if (userExists) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const newUser = new User(username, password);
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });

    }catch (err) {
        console.log(err)
        next(err)
    }
}

export const loginUser = async ( req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await User.findByUsername(username);
        
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        const userInfo = { username: user.username}

        res.status(200).cookie('token',token).json({ token , userInfo });
    }catch (err) {
        console.log(err)
        next(err);
    }
}

export const logoutUser = async ( req, res, next) => {
    try {
        res.status(200).cookie('token', '').json({ message: 'User logged out' });
    }catch (err) {
        console.log(err)
        next(err);
    }
}