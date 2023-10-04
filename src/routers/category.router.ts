import { createCategory, updateCategory } from "@/controllers";
import { createCategorySchemas, updateCategorySchemas } from "@/schemas";
import Elysia from "elysia";

export const CategoryGroupApi = (api: Elysia): Elysia =>
  api.group("/category", (category) =>
    category
      .post("/", createCategory, createCategorySchemas)
      .post("/:id", updateCategory, updateCategorySchemas)
  );
