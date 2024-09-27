import jwt from 'jsonwebtoken';
import { tokenSecret } from '../config.js';

export const authrequired = (req, res, next) => {
    const { token } = req.cookies;
    if(!token) return res.status(401).json({ message:'no token' });

    jwt.verify(token, tokenSecret,(err, user)=>{
        if(err) res.status(401).json({ message:'invalid token' });
        req.user = user;
        next();
    })

};