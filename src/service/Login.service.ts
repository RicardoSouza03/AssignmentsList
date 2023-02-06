import IUser from '../interfaces/IUser';
import User from '../database/models/User';
import { encryptPassword } from '../utils/bcrypt';

export default class LoginService {
  public async createUser(user: Omit<IUser, 'id'>): Promise<IUser> {
    const hash = encryptPassword(user.password);
    const createdUser = await User.create({ ...user, password: hash });
    return createdUser;
  }
}