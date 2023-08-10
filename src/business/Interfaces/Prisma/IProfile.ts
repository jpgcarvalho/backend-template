import { IUser } from "./IUser";

export interface IProfile {
  id: number;
  bio?: string | null;
  user: IUser;
  userId: string;
}