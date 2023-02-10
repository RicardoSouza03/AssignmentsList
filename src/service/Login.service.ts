import IUser, { IUserCredentials } from '../interfaces/IUser';
import User from '../database/models/User';
import { checkPassword, encryptPassword } from '../utils/bcrypt';
import { generateToken } from '../utils/jwtToken';
import LoginValidator from '../utils/validations/Login.validations';

export default class LoginService {
  private static loginValidations = new LoginValidator();

  private static async userByEmail(userEmail: string): Promise<IUser | null> {
    const foundUser = await User.findOne({ where: { email: userEmail.toLowerCase() }});
    return foundUser;
  }

  public static async createUser(user: Omit<IUser, 'id'>): Promise<string> {
    this.loginValidations.checkUserInfo(user);
    const userAlreadyExists = await this.userByEmail(user.email);
    this.loginValidations.userEmailMatch(userAlreadyExists, false);

    const hash = encryptPassword(user.password);
    const { dataValues: createdUser } = await User.create({ 
      ...user,
      email: user.email.toLowerCase(),
      password: hash
    });
    
    this.loginValidations.checkUserCreation(createdUser);

    const token = generateToken(createdUser);
    return token;
  }

  public static async verifyLogin(loginInfo: IUserCredentials): Promise<string> {
    this.loginValidations.checkUserEmail(loginInfo.email);
    this.loginValidations.checkUserPassword(loginInfo.password);

    const foundUser = await this.userByEmail(loginInfo.email);
    this.loginValidations.userEmailMatch(foundUser, true);
    
    const passwordCheck = checkPassword(loginInfo.password, foundUser?.password as string);
    this.loginValidations.userPasswordMatch(passwordCheck);

    const token = generateToken(foundUser as IUser);
    return token;
  }
}