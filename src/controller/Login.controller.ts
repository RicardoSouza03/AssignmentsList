import { Request, Response } from 'express';
import { LoginService } from '../service';

export default class LoginController {
  public registerUser = async (req: Request, res: Response): Promise<Response> => {
    const userInfo = req.body;
    const token = await LoginService.createUser(userInfo);
    return res.status(201).json({ token });
  }

  public verifyLogin = async (req: Request, res: Response): Promise<Response> => {
    const userInfo = req.body;
    const token = await LoginService.verifyLogin(userInfo);
    return res.status(200).json({ token });
  }
}