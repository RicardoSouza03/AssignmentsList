import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import MissinParamError from './erros/MissinParam';

const secret = process.env.JWT_SECRET || 'patinho';
const jwtConfig = {
  expiresIn: '5h',
  algorithm: 'HS256',
}

export function generateToken({ name, email, id }: IUser): string {
  const token = jwt.sign({ data: { email, name, id } }, secret, jwtConfig as jwt.SignOptions);
  return token;
}

export function verifyToken(token: string): void | jwt.JwtPayload {
  try {
    const tokenData = jwt.verify(token, secret);
    return tokenData as jwt.JwtPayload;
  } catch (error) {
    throw new MissinParamError('Inválid token!');
  }
}