import { IPost } from "./IPost";
import { IProfile } from "./IProfile";

export interface IUser {
  id: number;
  email: string;
  name?: string | null;
  posts: IPost[];
  profile?: IProfile | null;
}
