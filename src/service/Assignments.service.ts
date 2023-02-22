import { JwtPayload } from 'jsonwebtoken';
import Assignment from '../database/models/Assignment';
import IAssignment from '../interfaces/IAssignment';
import { verifyToken } from '../utils/jwtToken';

export default class AssignmentsService {
  public static async createAssignment(
    assignment: Omit<IAssignment, 'id'>,
    token: string | undefined
  ): Promise<IAssignment>
  {
    const userPayload = verifyToken(token as string);
    const { data: { id } } = userPayload as JwtPayload;

    const createdAssignment = await Assignment.create({ ...assignment, userId: id });
    return createdAssignment;
  }
}