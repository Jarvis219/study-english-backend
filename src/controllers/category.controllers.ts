import { HTTP_CODE_ERRORS } from "@/constants";
import { Category } from "@/models";
import { TCategory, TUpdateCategory } from "@/types";
import { isEmpty } from "@/utils";

export const createCategory = async ({
  body,
  headers,
}: TCategory): Promise<Response> => {
  const userId = headers.userId;

  if (isEmpty(body)) {
    return new Response(JSON.stringify({ message: "Missing field" }), {
      status: HTTP_CODE_ERRORS.BAD_REQUEST,
    });
  }

  if (!userId) {
    return new Response(JSON.stringify({ message: "Missing userId" }), {
      status: HTTP_CODE_ERRORS.BAD_REQUEST,
    });
  }

  body.userId = userId;

  // Check name category is exist
  const nameIsExit = await Category.findOne({ name: body.name });
  if (nameIsExit) {
    return new Response(JSON.stringify({ message: "Category name is exist" }), {
      status: HTTP_CODE_ERRORS.BAD_REQUEST,
    });
  }

  try {
    const category = new Category(body);
    const categorySaved = await category.save();
    return new Response(JSON.stringify(categorySaved));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};

export const updateCategory = async ({
  body,
  params: { id },
}: TUpdateCategory | any): Promise<Response> => {
  if (isEmpty(body)) {
    return new Response(JSON.stringify({ message: "Missing field" }), {
      status: HTTP_CODE_ERRORS.BAD_REQUEST,
    });
  }

  try {
    const category = await Category.findByIdAndUpdate(
      {
        _id: id,
      },
      body,
      {
        new: true,
      }
    );
    return new Response(JSON.stringify(category));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};
