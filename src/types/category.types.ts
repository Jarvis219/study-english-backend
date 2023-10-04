import { Context } from "elysia";
import { IHeaders } from ".";

interface ICategory {
  name: string;
  description: string;
  image: string;
  userId?: string;
}

interface ICategoryUpdate {
  name?: string;
  description?: string;
  image?: string;
}

export type TCategory = Context & {
  body: ICategory;
  headers: IHeaders;
};

export type TUpdateCategory = Context & {
  body: ICategoryUpdate;
  params: Record<"id", string>;
};
