import { Request, Response } from 'express';
import { ProfileService } from '../service';

export default class ProfileController {
  public getUserInfo = async (req: Request, res: Response): Promise<Response> => {
    const token = req.headers.authorization;
    const userInfo = ProfileService.getUserInfo(token);
    return res.status(200).json(userInfo);
  }

  public updateUserName = async (req: Request, res: Response): Promise<Response> => {
    const userData = req.body;
    const newName = userData.name;
    const token = req.headers.authorization;

    const updatedUser = await ProfileService.updateUserName(newName, token);
    return res.status(200).json(updatedUser);
  }
}