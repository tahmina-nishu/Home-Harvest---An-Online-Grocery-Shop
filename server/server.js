import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// import configs
import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";

// import routes
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';

const app = express();
const port = process.env.PORT || 4000;

// Allow multiple origins
const allowedOrigins = ['http://localhost:5173'] // ekhane 1 tar beshi link o add kora jabe jeta te backend run hobe

// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));

// ROUTES
app.get('/', (req, res)=> res.send("API is working"));

app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)

// SERVER START
const startServer = async () => {
    try {
        await connectDB();
        await connectCloudinary();

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });

    } catch (error) {
        console.log(error.message);
    }
};

startServer();