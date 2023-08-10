import { Request, Response } from "express";
import { UserService } from "../../business/Services/User";

export class UserController {

  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }


  public async getAllUsers(req: Request, res: Response) {

    const result = await this.userService.getAll();

    return res.status(200).json(result);
  }

  public async createUser(req: Request, res: Response) {

    const user = req.body;

    const result = await this.userService.createUser(user);

    return res.status(200).json(result);


  }
}