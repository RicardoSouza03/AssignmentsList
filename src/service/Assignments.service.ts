import Assignment from '../database/models/Assignment';
import IAssignment, { IAssignmentCreated } from '../interfaces/IAssignment';

export default class AssignmentsService {
  public static async createAssignment(assignment: Omit<IAssignment, 'id'> ): Promise<IAssignmentCreated> {
    const createdAssignment = await Assignment.create(assignment);
    return createdAssignment;
  }
}