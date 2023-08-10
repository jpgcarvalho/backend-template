import { User } from "@prisma/client";

export interface IUserService {
  createUser(data: User): Promise<User | null>;
  getAll(): Promise<User[] | null>;
}