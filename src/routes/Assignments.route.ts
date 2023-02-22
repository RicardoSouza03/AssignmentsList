import { Router } from 'express';
import AssignmentController from '../controller/Assignments.controller';

const assignmentRoute = Router();

const assignmentController = new AssignmentController();

assignmentRoute.post('/', assignmentController.createAssignment);

export default assignmentRoute;