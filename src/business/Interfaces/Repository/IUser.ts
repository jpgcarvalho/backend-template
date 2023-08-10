import { User } from "@prisma/client";
import { IUser } from "../Prisma/IUser";

export interface IUserRepository {
  create(user: User): Promise<User | null>;
  getOneById(id: number): Promise<User | null>;
  getOneByEmail(email: string): Promise<User | null>;
  getAll(): Promise<User[] | null>;
  update(): Promise<User>;
  delete(userId: number): Promise<boolean>;
}