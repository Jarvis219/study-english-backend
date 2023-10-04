import { HTTP_CODE_ERRORS } from "@/constants";
import { verify } from "jsonwebtoken";

// TODO: Add type for headersß
export const authMiddleware = async ({
  headers,
}: any): Promise<Response | undefined> => {
  const token = headers?.authorization;

  if (!token) {
    return new Response(JSON.stringify({ message: "Missing token" }), {
      status: HTTP_CODE_ERRORS.UNAUTHORIZED,
    });
  }

  const [_, tokenValue] = token.split("Bearer ");

  if (!tokenValue) {
    return new Response(JSON.stringify({ message: "Missing token" }), {
      status: HTTP_CODE_ERRORS.UNAUTHORIZED,
    });
  }

  try {
    const { _id } = verify(
      tokenValue,
      process.env.JWT_SECRET_KEY as string
    ) as {
      _id: string;
    };

    headers.userId = _id;
  } catch (error) {
    return new Response(JSON.stringify({ message: "Token is not valid" }), {
      status: HTTP_CODE_ERRORS.UNAUTHORIZED,
    });
  }
};
