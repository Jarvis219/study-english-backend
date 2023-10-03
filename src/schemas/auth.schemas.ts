import { t } from "elysia";

export const registerSchemas = {
  body: t.Object({
    email: t.String(),
    name: t.String(),
    password: t.String(),
  }),
  type: "application/json",
};

export const loginSchemas = {
  body: t.Object({
    email: t.String(),
    password: t.String(),
  }),
  type: "application/json",
};
