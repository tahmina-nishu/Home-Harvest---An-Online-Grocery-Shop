import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// --------------------user register / login / logout controller START --------------------
// Register User : /api/user/register
export const register = async (req, res)=>{
    try{
        const {name, email, password} = req.body;
        
        // name , email, ba pass konota missing thakle eta kaj krbe 
        if (
            !name?.trim() ||
            !email?.trim() ||
            !password?.trim()
        ){
            return res.json({
                success: false, 
                message: 'Missing Details'
            })
        }

        const normalizedEmail = email.toLowerCase().trim(); // eta dile email ta case sensitive hobena

        // Password validation
        // string start : /^
        // contain at least one digit : (?=.*\d)
        // contain at least one special character : (?=.*[!@#$%^&*])
        // contain at least 6 char length : .{6,}
        // string end : $/
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

        if (!passwordRegex.test(password)) {
            return res.json({
                success: false,
                message: "Password must be at least 6 characters long and contain at least one number and one special character"
            });
        }

        // individual user k find out korbe
        const existingUser = await User.findOne({
            email: normalizedEmail
        });

        // user jodi already exist kore tahole notun kore user create na kore exist kore j ei msg show krbe
        if (existingUser) {
            return res.json({
                success: false,
                message: 'User already exists'
            });
        }

        // jodi user exist na kore tahole new user create korbe. ejonno j pass ta dibe eta encrypt korte hbe & db te store krbe
        const hashedPassword = await bcrypt.hash(password, 10)

        // create the user data
        const user = await User.create({
            name,
            email: normalizedEmail,
            password: hashedPassword
        });

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
            return res.json({
                success: true, 
                user: {
                    email: user.email, 
                    name: user.name,
                }
            })
    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false, 
            message: error.message
        });
    }
}

// Login User : /api/user/login
export const login = async (req, res)=>{
    try {
        const {email, password} = req.body;

        if (
            !email?.trim() ||
            !password?.trim()
        ) {
            return res.json({
                success: false,
                message: "Email and password required"
            });
        }

        const normalizedEmail = email.toLowerCase().trim();

        const user = await User.findOne({
            email: normalizedEmail
        });
        

        if(!user){
            return res.json({
                success: false, 
                message: 'Invalid email or password'}
            );
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
            return res.json({
                success: false, 
                message: 'Invalid email or password'
            });

        // create a token to send response
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn:'90d'}) 

        res.cookie('token', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 90 * 24 * 60 * 60 * 1000, 
        })
            // send the response to frontend user
            return res.json({
                success: true, 
                user: {
                    email: user.email, 
                    name: user.name,
                }
            })
    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false, 
            message: error.message
        });
    }
}

// Check Auth : /api/user/is-auth
export const isAuth = async (req, res)=>{
    try {
        const userId = req.userId;

        // find the user from database and remove the password data
        const user = await User.findById(userId).select("-password");

        // user database e na thakle
        if (!user) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }

        return res.json({
            success: true,
            user
        });

    } catch (error) {
        console.log(error.message);

        return res.json({
            success: false,
            message: error.message
        });
    }
}

// Logout User : /api/user/logout
export const logout = async (req, res)=>{
    try {
        // clear the cookie
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', 
        })

        // cookie clear korar por logged out hoye jabe. erpor ekta response pathabe
        return res.json({
                success: true, 
                message: "Logged Out"
            })

    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false, 
            message: error.message
        });
    }
}
// --------------------user register / login / logout controller END --------------------