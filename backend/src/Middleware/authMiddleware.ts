import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export const authMiddleware = async (c: Context, next: Next) => {
  try {
    const authHeader = c.req.header("authorization") || "";
    const token = authHeader.split(" ")[1];

    const res = await verify(token, c.env.JWT_SECRET_KEY);

    if (res.user_id) {
      c.set("user_id", res.user_id);
      await next();
    } else {
      c.status(403);
      return c.json({
        error: "unauthorized",
      });
    }
  } catch (error) {
    c.status(401);
    return c.json({
      error: "unauthorized",
    });
  }
};
