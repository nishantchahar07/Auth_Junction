import jwt from 'jsonwebtoken';


export const generateTokenAndSetCookies = (res, userId) => {

 const token = jwt.sign({userId} , process.env.JWT_SECRET, {
    expiresIn : '7d' // valid for 7 day 

 });


res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: 'Strict', // Helps prevent CSRF attacks
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
   }

);

return token ;
}
