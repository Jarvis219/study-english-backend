import { HTTP_CODE_ERRORS } from "@/constants";
import { User } from "@/models";

// TODO: Add type for headersß
export const authMiddleware = async ({
  headers,
  bearer,
  jwt,
}: any): Promise<Response | undefined> => {
  if (!bearer) {
    return new Response(JSON.stringify({ message: "Missing token" }), {
      status: HTTP_CODE_ERRORS.UNAUTHORIZED,
    });
  }

  try {
    const { userId } = await jwt.verify(bearer);

    if (!userId) {
      return new Response(JSON.stringify({ message: "Token is not valid" }), {
        status: HTTP_CODE_ERRORS.UNAUTHORIZED,
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return new Response(JSON.stringify({ message: "Account is not exist" }), {
        status: HTTP_CODE_ERRORS.BAD_REQUEST,
      });
    }

    headers.userId = userId;
  } catch (error) {
    return new Response(JSON.stringify({ message: "Token is not valid" }), {
      status: HTTP_CODE_ERRORS.UNAUTHORIZED,
    });
  }
};
