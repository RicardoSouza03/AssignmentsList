import IUser from '../../interfaces/IUser';
import InternalError from '../erros/InternalError';
import InvalidParam from '../erros/InvalidParam';
import MissinParamError from '../erros/MissinParam';

export interface ILoginValidator {
  checkUserInfo: (user: IUser) => void;
  checkUserEmail: ( email: string) => void;
  checkUserName: ( name: string) => void;
  checkUserPassword: ( password: string) => void;
  checkUserCreation: (user: IUser) => void;
  checkUserExistence: (userFound: IUser | null) => void;
  userPasswordMatch: (passwordMatch: boolean) => void;
}

export default class LoginValidator implements ILoginValidator {
  checkUserEmail (email: string): void {
    if(!email) throw new MissinParamError('O campo "email" é obrigatório.');

    if(!email.match(/\S+@\S+\.\S+/)) throw new InvalidParam('O "email" deve ser no seguinte formato: "algo@algo.com".');

  };

  checkUserName (name: string): void {
    if(!name) throw new MissinParamError('O campo "name" é obrigatório.');
    
    if(name.length < 2) throw new InvalidParam('O nome deve conter ao menos 2 caracteres.');
  };

  checkUserPassword (password: string): void {
    if(!password) throw new MissinParamError('O campo "password" é obrigatório.');
  
    if(password.length <= 3) throw new InvalidParam('A senha deve conter mais que três digitos.');
  };
  
  checkUserInfo (user: IUser): void {
    this.checkUserEmail(user.email);
    this.checkUserName(user.name);
    this.checkUserPassword(user.password);
  };

  checkUserCreation (user: IUser): void {
    if (!user) throw new InternalError('Ops, ocorreu um erro, por favor tente mais tarde.');
  }

  checkUserExistence (userFound: IUser | null): void {
    if (userFound == null) throw new InvalidParam('Email ou senha incorretos.');
  };

  userPasswordMatch (passwordMatch: boolean): void {
    if (!passwordMatch) throw new InvalidParam('Email ou senha incorretos.');
  };
}