import jwt from 'jsonwebtoken';
import 'doteenv/config';

export const generateTokenAndSetCookies = (res, userId) => {

 const token = jwt.sign({userId} , provcess.env.JWT_SECRET, {
    expiresIn : '7d' // valid for 7 day 

 })
}
