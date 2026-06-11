import express from 'express';
import { register } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', register) // register path e gele register controller k call korbe

export default userRouter