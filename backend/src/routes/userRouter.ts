import { Hono } from "hono";
import { deleteHandler, getUserHandler, signinHandler, signupHandler, updateHandler } from "../controllers/userController";
import { dbConnection } from "../Middleware/connection";
import { authMiddleware } from "../Middleware/authMiddleware";

const userRouter = new Hono();

userRouter.post("/signin", dbConnection, signinHandler);
userRouter.post("/signup", dbConnection, signupHandler);
userRouter.put("/update", dbConnection, authMiddleware, updateHandler);
userRouter.delete("/delete", dbConnection, authMiddleware, deleteHandler);
userRouter.get("/get-user", dbConnection, authMiddleware, getUserHandler);

export default userRouter;
