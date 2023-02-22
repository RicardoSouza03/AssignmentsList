import IUser from '../../interfaces/IUser';
import ConflictError from '../erros/ConflictError';
import InternalError from '../erros/InternalError';
import InvalidParam from '../erros/InvalidParam';
import MissinParamError from '../erros/MissinParam';

export interface ILoginValidator {
  checkUserInfo: (user: IUser) => void;
  checkUserEmail: ( email: string) => void;
  checkUserName: ( name: string) => void;
  checkUserPassword: ( password: string) => void;
  checkUserCreation: (user: IUser) => void;
  userEmailMatch: (userFound: IUser | null, isLogin: boolean) => void;
  userPasswordMatch: (passwordMatch: boolean) => void;
}

export default class LoginValidator implements ILoginValidator {
  checkUserEmail (email: string): void {
    if(!email) throw new MissinParamError('Field "email" is obligatory.');

    if(!email.match(/\S+@\S+\.\S+/)) throw new InvalidParam('"email" must be in the following format: "some@thing.com".');

  };

  checkUserName (name: string): void {
    if(!name) throw new MissinParamError('Field "name" is obligatory.');
    
    if(name.length < 2) throw new InvalidParam('Name must be at least 2 characters.');
  };

  checkUserPassword (password: string): void {
    if(!password) throw new MissinParamError('Field "password" is obligatory.');
  
    if(password.length <= 3) throw new InvalidParam('Password must contain at least three characters.');
  };
  
  checkUserInfo (user: IUser): void {
    this.checkUserEmail(user.email);
    this.checkUserName(user.name);
    this.checkUserPassword(user.password);
  };

  checkUserCreation (user: IUser): void {
    if (!user) throw new InternalError('Ops, something went wrong, please try again later.');
  }

  userEmailMatch (userFound: IUser | null, isLogin: boolean): void {
    if (isLogin && userFound == null) throw new InvalidParam('Email or password incorrect.');
    
    if (!isLogin && userFound) throw new ConflictError('Email already registered.')
  };

  userPasswordMatch (passwordMatch: boolean): void {
    if (!passwordMatch) throw new InvalidParam('Email or password incorrect.');
  };
}