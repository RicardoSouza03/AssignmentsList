export default interface IAssignment {
  id?: number;
  userId: number;
  description: string;
}

export interface IAssignmentCreated extends IAssignment {
  created: Date;
  updated: Date;
}