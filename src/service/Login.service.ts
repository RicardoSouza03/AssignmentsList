import IUser from '../interfaces/IUser';
import User from '../database/models/User';
import { encryptPassword } from '../utils/bcrypt';
import { generateToken } from '../utils/jwtToken';

export default class LoginService {
  public static async createUser(user: Omit<IUser, 'id'>): Promise<string | void> {
    const hash = encryptPassword(user.password);
    const createdUser = await User.create({ ...user, password: hash });
    
    if (createdUser) {
      const token = generateToken(user);
      return token;
    }
  }
}