import { User } from "@prisma/client";
import { UserRepository } from "../../infrastructure/Repositories/User";
import { IUserRepository } from "../Interfaces/Repository/IUser";
import { IUserService } from "../Interfaces/Services/IUser";

export class UserService implements IUserService {


  userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository()
  }

  async createUser(data: User): Promise<User | null> {

    console.log("Dado do usuario", data);
    const response = await this.userRepository.create(data);

    return response;
  }

  async getAll(): Promise<User[] | null> {
    const response = await this.userRepository.getAll();

    return response;
  }


}