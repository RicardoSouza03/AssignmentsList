import IAssignment from '../../interfaces/IAssignment';
import InternalError from '../erros/InternalError';
import InvalidParam from '../erros/InvalidParam';
import MissinParamError from '../erros/MissinParam';

export interface IAssignmentValidator {
  validateDescription: (description: string) => void;
  validateAssingmentId: (id: number) => void;
  assignmentNotFound: (assingment: IAssignment) => void;
  validateInternalError: (assingment: IAssignment) => void;
}

export default class AssignmentValidator implements IAssignmentValidator {
  validateDescription (description: string): void {
    if (!description) throw new MissinParamError('Missing assignment description.');
    if (description.length < 5) throw new InvalidParam('Assignment description must be at least 5 characters.')
  };

  validateAssingmentId (id: number): void {
    if (!id) throw new MissinParamError('Missing assignment id.');
  };

  assignmentNotFound (assingment: IAssignment | null): void {
    if (!assingment) throw new InvalidParam('Invalid id.');
  };

  validateInternalError (assingment: IAssignment | null): void {
    if (!assingment) throw new InternalError('Ops, something went wrong, please try again later.')
  };
}