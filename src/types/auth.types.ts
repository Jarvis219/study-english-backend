import { Context } from "elysia";
import { IHeaders } from ".";

interface IRegisterUser {
  email: string;
  name: string;
  password?: string;
  hashed_password?: string;
  verify?: boolean;
  introdution?: string;
  image?: string;
  token?: string;
}

export type TRegister = Context & {
  jwt: any;
  body: IRegisterUser;
};

export type TLogin = Context & {
  jwt: any;
  body: {
    email: string;
    password: string;
  };
};

export type TLogout = Context & {
  headers: IHeaders;
};
