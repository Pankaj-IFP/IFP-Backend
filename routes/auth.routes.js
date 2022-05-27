import { Router } from "express";


const authController = require('../controllers/auth.controller.js');
const authRouter = Router();

authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);
authRouter.post('/change_password/:id', authController.change_password);


export default authRouter;

