import { JwtPayload } from 'jsonwebtoken';
import Assignment from '../database/models/Assignment';
import IAssignment from '../interfaces/IAssignment';
import { verifyToken } from '../utils/jwtToken';
import AssignmentValidator from '../utils/validations/Assignment.validations';

export default class AssignmentsService {
  private static validations = new AssignmentValidator();

  private static getIdFromToken(token: string | undefined): number {
    const userPayload = verifyToken(token as string);
    const { data: { id } } = userPayload as JwtPayload;
    return id;
  }

  public static async createAssignment(
    assignment: Omit<IAssignment, 'id'>,
    token: string | undefined
  ): Promise<IAssignment>
  {
    this.validations.validateDescription(assignment.description); 
    const id = this.getIdFromToken(token);

    const createdAssignment = await Assignment.create({ ...assignment, userId: id });
    this.validations.validateInternalError(createdAssignment);

    return createdAssignment;
  }

  public static async getUserAssignments(token: string | undefined): Promise<IAssignment[]> {
    const id = this.getIdFromToken(token);
    const userAssignments = await Assignment.findAll({ where: { userId: id }});

    return userAssignments;
  }

  public static async getAssignmentById(assignmentId: number): Promise<IAssignment> {
    this.validations.validateAssingmentId(assignmentId);
    const assignment = await Assignment.findByPk(assignmentId);

    this.validations.validateInternalError(assignment);

    return assignment as IAssignment;
  }

  public static async updateAssignment(
    newAssignment: { description: string, assingmentId: number },
    token: string | undefined
  ): Promise<IAssignment> {
    const { description, assingmentId } = newAssignment
    this.validations.validateDescription(description);
    this.validations.validateAssingmentId(assingmentId);

    const id = this.getIdFromToken(token);

    await Assignment.update({ description }, { where: { userId: id, id: assingmentId } });
    const updatedAssignment = await this.getAssignmentById(assingmentId);
    
    return updatedAssignment;
  }
}