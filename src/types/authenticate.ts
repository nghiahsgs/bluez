import { ISettings } from "./settings";

export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister extends ILogin, ISettings {}
