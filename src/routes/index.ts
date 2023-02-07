import { Router } from 'express';
import loginRoute from './Login.route';

const router = Router();

router.use('/login', loginRoute);

export default router;