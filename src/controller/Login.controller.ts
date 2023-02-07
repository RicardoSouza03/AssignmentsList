import { Request, Response } from 'express';
import { LoginService } from '../service';

export default class LoginController {
  public registerUser = async (req: Request, res: Response): Promise<Response> => {
    const userInfo = req.body;
    const token = await LoginService.createUser(userInfo);
    if (!token) {
      return res.status(500).json({ message: 'Ops! Houve um erro interno, tente novamente mais tarde.' });
    }

    return res.status(201).json({ token: token });
  }
}