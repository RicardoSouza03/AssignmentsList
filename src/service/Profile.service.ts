import { JwtPayload } from 'jsonwebtoken';
import User from '../database/models/User';
import IUser from '../interfaces/IUser';
import { verifyToken } from '../utils/jwtToken';

export default class ProfileService {
  private static getIdFromToken(token: string | undefined): number {
    const userPayload = verifyToken(token as string);
    const { data: { id } } = userPayload as JwtPayload;
    return id;
  }

  public static async getUserInfo(email: string, token: string | undefined): Promise<IUser | null> {
    const id = this.getIdFromToken(token);

    const foundUser = await User.findOne({ 
      where: { email: email.toLowerCase(), id },
      attributes: { exclude: ['password'] }
    });
    return foundUser;
  }


}