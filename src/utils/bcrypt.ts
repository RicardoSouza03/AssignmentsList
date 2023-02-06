import * as bcrypt from 'bcryptjs';

export function encryptPassword(password: string): string {
  const encryptedPassword = bcrypt.hashSync(password, 10);
  return encryptedPassword;
}

export function checkPassword(loginPassword: string, userPassword: string): boolean {
  const isValid = bcrypt.compareSync(loginPassword, userPassword);
  return isValid;
}