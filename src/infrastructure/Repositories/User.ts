import { User } from "@prisma/client";
import { IUserRepository } from "../../business/Interfaces/Repository/IUser";
import { databaseClient } from "../prismaClient";

export class UserRepository implements IUserRepository {

  database: typeof databaseClient.user;
  constructor() {
    this.database = databaseClient.user
  }

  async create(user: User): Promise<User | null> {

    const userAlreadyExists = await this.getOneByEmail(user.email);

    if (userAlreadyExists) return null

    const response = await this.database.create({
      data: {
        ...user
      }
    })

    return response;
  }

  async getOneById(id: number): Promise<User | null> {
    const response = await this.database.findUnique({
      where: {
        id
      }
    })

    return response;

  }

  async getOneByEmail(email: string): Promise<User | null> {
    const response = await this.database.findUnique({
      where: {
        email
      }
    })

    return response;

  }

  async getAll(): Promise<User[]> {
    const response = await this.database.findMany();

    return response;
  }

  async update(): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async delete(userId: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}