import { JwtPayload } from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import User from '../database/models/User';
import { verifyToken } from '../utils/jwtToken';

export default class ProfileService {
  public static getUserInfo(token: string | undefined): Omit<IUser, 'password'> {
    const userPayload = verifyToken(token as string);
    const { data } = userPayload as JwtPayload;
    return data;
  }

  public static async updateUserName(newName: string, token: string | undefined): Promise<IUser> {
    const { id, email } = this.getUserInfo(token);

    await User.update({ name: newName }, { where: { id, email } });

    const updatedUser = await User.findByPk(id);
    return updatedUser as IUser;
  }
}