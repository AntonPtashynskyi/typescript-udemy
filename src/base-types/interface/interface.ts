export interface IUser {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

export interface IAdmin extends IUser {
  role: "admin";
}
