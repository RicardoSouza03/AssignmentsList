import IUser, { IUserCredentials } from '../interfaces/IUser';
import User from '../database/models/User';
import { checkPassword, encryptPassword } from '../utils/bcrypt';
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

  public static async verifyLogin(loginInfo: IUserCredentials): Promise<string> {
    this.loginValidations.checkUserEmail(loginInfo.email);
    this.loginValidations.checkUserPassword(loginInfo.password);

    const foundUser = await User.findOne({ where: { email: loginInfo.email }});
    this.loginValidations.checkUserExistence(foundUser);
    
    const passwordCheck = checkPassword(loginInfo.password, foundUser?.password as string);
    this.loginValidations.userPasswordMatch(passwordCheck);

    const token = generateToken(foundUser as IUser);
    return token;
  }
}