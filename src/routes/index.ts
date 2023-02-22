import { Router } from 'express';
import loginRoute from './Login.route';
import assignmentRoute from './Assignments.route';
import profileRoute from './Profile.route';

const router = Router();

router.use('/login', loginRoute);
router.use('/assignments', assignmentRoute);
router.use('/profile', profileRoute);

export default router;