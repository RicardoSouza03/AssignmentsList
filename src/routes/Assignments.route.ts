import { Router } from 'express';
import AssignmentController from '../controller/Assignments.controller';

const assignmentRoute = Router();

const assignmentController = new AssignmentController();

assignmentRoute.post('/', assignmentController.createAssignment);
assignmentRoute.get('/', assignmentController.getUserAssignments);
assignmentRoute.put('/:id', assignmentController.updateAssignment);

export default assignmentRoute;