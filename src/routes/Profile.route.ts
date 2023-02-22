import { Router } from 'express';
import ProfileController from '../controller/Profile.controller';

const profileRoute = Router();

const profileController = new ProfileController();

profileRoute.get('/', profileController.getUserInfo);
profileRoute.patch('/', profileController.updateUserName);

export default profileRoute;