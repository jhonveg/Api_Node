import jwt from 'jsonwebtoken';
import { tokenSecret } from '../config.js';

export function createaccessToken (payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            tokenSecret,
            {expiresIn: "12 hours"},
            (err, token)=>{
                if(err) reject(err);
                resolve(token);
            }
        )
    })
}