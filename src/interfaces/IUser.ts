export interface IUserCredentials {
  email: string;
  password: string;
}

export default interface IUser extends IUserCredentials {
  id?: number;
  name: string;
}