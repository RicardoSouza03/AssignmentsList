import InvalidParam from '../erros/InvalidParam';
import MissinParamError from '../erros/MissinParam';

export interface IAssignmentValidator {
  validateDescription: (description: string) => void;
}

export default class AssignmentValidator implements IAssignmentValidator {
  validateDescription (description: string): void {
    if (!description) throw new MissinParamError('Missing assignment description.');
    if (description.length < 5) throw new InvalidParam('Assignment description must be at least 5 characters.')
  };
}