import { CookieOptions } from "elysia/dist/cookie";
import { Prettify } from "elysia/dist/types";
import { HTTPStatusName } from "elysia/dist/utils";

export interface IHeaders {
  authorization?: string;
  cookie?: string;
  userId?: string;
}

export interface ISetResponse {
  headers: Record<string, string> & {
    "Set-Cookie"?: string | string[];
  };
  status?: number | HTTPStatusName;
  redirect?: string;
  cookie?: Record<
    string,
    Prettify<
      {
        value: string;
      } & CookieOptions
    >
  >;
}
