import { Router } from 'express';
import loginRoute from './Login.route';
import assignmentRoute from './Assignments.route';

const router = Router();

router.use('/login', loginRoute);
router.use('/assignments', assignmentRoute);

export default router;