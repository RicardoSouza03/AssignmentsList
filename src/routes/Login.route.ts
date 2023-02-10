import { Router } from 'express';
import LoginController from '../controller/Login.controller';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/register', loginController.registerUser);
loginRouter.post('/', loginController.verifyLogin);

export default loginRouter;