import { Context } from "elysia";
import { IHeaders } from "./context.types";

interface IVocabulary {
  word: string;
  meaning: string;
  pronunciation?: string;
  example?: string;
  exampleMeaning?: string;
  level?: number;
  isFavorite?: boolean;
  isPopular?: boolean;
  isLeanred?: boolean;
  rewriteNumber?: number;
  categoryId?: string;
  image?: string;
  userId?: string;
}

export type TVocabulary = Context & {
  body: IVocabulary;
  headers: IHeaders;
};

interface IVocabularyUpdate {
  word?: string;
  meaning?: string;
  pronunciation?: string;
  example?: string;
  exampleMeaning?: string;
  level?: number;
  isFavorite?: boolean;
  isPopular?: boolean;
  isLeanred?: boolean;
  rewriteNumber?: number;
  categoryId?: string;
  image?: string;
  userId?: string;
}

export type TVocabularyUpdate = Context & {
  body: IVocabularyUpdate;
  headers: IHeaders;
  params: Record<"id", string>;
};

export type TVocabularyDelete = Context & {
  headers: IHeaders;
  params: Record<"id", string>;
};

export type TVocabularyGet = Context & {
  headers: IHeaders;
};

export type TVocabularyGetById = Context & {
  headers: IHeaders;
  params: Record<"id", string>;
};
