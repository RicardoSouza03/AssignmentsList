import { JwtPayload } from 'jsonwebtoken';
import { verifyToken } from '../utils/jwtToken';

export default class ProfileService {
  public static getUserInfo(token: string | undefined): number {
    const userPayload = verifyToken(token as string);
    const { data } = userPayload as JwtPayload;
    return data;
  }
}