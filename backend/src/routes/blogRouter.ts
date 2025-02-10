import { Hono } from "hono";
import {
  getAllBlogHandler,
  getBlogHandler,
  myBlogHandler,
  newBlogHandler,
  updateBlogHandler,
} from "../controllers/blogController";
import { authMiddleware } from "../Middleware/authMiddleware";
import { dbConnection } from "../Middleware/connection";

const blogRouter = new Hono();

blogRouter.post("/create-post", dbConnection, authMiddleware, newBlogHandler);
blogRouter.put(
  "/update/post/:id",
  dbConnection,
  authMiddleware,
  updateBlogHandler
);
blogRouter.get("/post/:id", dbConnection, getBlogHandler);
blogRouter.get("/bulk", dbConnection, getAllBlogHandler);
blogRouter.get("/my-blog", dbConnection, authMiddleware, myBlogHandler);

export default blogRouter;
