import User from "../models/User";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register User : /api/user/register
export const register = async (req, res)=>{
    try{
        const {name, email, password} = req.body;

        // name , email, ba pass konota missing thakle eta kaj krbe 
        if(!name || !email || !password){
            return res.json({success: false, message: 'Missing Details'})
        }

        // individual user k find out korbe
        const existingUser = await User.findOne({email})

        // user jodi already exist kore tahole notun kore user create na kore exist kore j ei msg show krbe
        if(existingUser)
            return res.json({success: false, message: 'User already exists'})

        // jodi user exist na kore tahole new user create korbe. ejonno j pass ta dibe eta encrypt korte hbe & db te store krbe
        const hashedPassword = await bcrypt.hash(password, 10)

        // create the user data
        const user = await User.create({name, email, password: hashedPassword})

        // create a token to send response
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn:'7d'}) 
        // _id ta db te auto create hoye jay jokhn ekta new user create hoy
        // r j token ta dibe eta 7 days por expired hoye jabe
        // token ta response e pathabe

        res.cookie('token', token, {
            httpOnly: true, // prevent javascript to access cookie
            secure: process.env.NODE_ENV === 'production', // use secure cookies in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF protection
            maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiration time mili second e 


            // send the response to frontend user
        })
            return res.json({success: true, user: {email: user.email, name: user.name,}})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}