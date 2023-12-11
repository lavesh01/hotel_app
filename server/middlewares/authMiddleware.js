import jwt from 'jsonwebtoken';

export const jwtAuthenticate = (req, res, next) => {        
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Authentication failed: No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: 'Authentication failed: Invalid token' });
        }

        req.user = decoded; 
        next();
    });
};
