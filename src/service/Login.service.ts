import IUser from '../interfaces/IUser';
import User from '../database/models/User';
import { encryptPassword } from '../utils/bcrypt';
import { generateToken } from '../utils/jwtToken';
import LoginValidator from '../utils/validations/Login.validations';

export default class LoginService {
  private static loginValidations = new LoginValidator();

  public static async createUser(user: Omit<IUser, 'id'>): Promise<string> {
    this.loginValidations.checkUserInfo(user);
    
    const hash = encryptPassword(user.password);
    const createdUser = await User.create({ ...user, password: hash });
    
    this.loginValidations.checkUserCreation(createdUser);

    const token = generateToken(user);
    return token;
  }
}