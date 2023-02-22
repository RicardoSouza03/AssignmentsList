import { AssignmentsService } from '../service';
import { Request, Response } from 'express';

export default class AssignmentController {
  public createAssignment = async (req: Request, res: Response): Promise<Response> => {
    const token = req.headers.authorization;
    const newAssignment = req.body;

    const createdAssignment = await AssignmentsService.createAssignment(newAssignment, token);
    return res.status(201).json(createdAssignment);
  }

  public getUserAssignments = async (req: Request, res: Response): Promise<Response> => {
    const token = req.headers.authorization;
    const assignments = await AssignmentsService.getUserAssignments(token);

    return res.status(200).json(assignments);
  }
}