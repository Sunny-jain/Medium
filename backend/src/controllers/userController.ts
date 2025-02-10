import {
  signindata,
  signupdata,
  updateProfileData,
} from "@sunnyjain/medium-common";
import { Context } from "hono";
import { sign } from "hono/jwt";

const signinHandler = async (c: Context) => {
  try {
    const body = await c.req.json();
    // console.log(c);

    const prisma = c.get("prisma");

    const bodyValidation = signindata.safeParse(body);
    if (!bodyValidation.success) {
      c.status(411);
      return c.json({ error: "Please Enter Valid Email Or Password" });
    } else {
      const user = await prisma.user.findUnique({
        where: { email: body.email.toLowerCase(), password: body.password },
      });

      if (!user) {
        c.status(401);
        return c.json({ error: "Invalid Email Or Password" });
      } else {
        const jwt = await sign({ user_id: user.id }, c.env.JWT_SECRET_KEY);
        return c.json({ token: jwt });
      }
    }
  } catch (error) {
    // console.log(error);

    c.status(411);
    return c.json({ error: "Please Enter Credentials" });
  }
};

const signupHandler = async (c: Context) => {
  try {
    const body = await c.req.json();
    const prisma = c.get("prisma");
    const bodyValidation = signupdata.safeParse(body);

    if (!bodyValidation.success) {
      c.status(411);
      return c.json({ error: "Please Enter Valid Email Or Password" });
    } else {
      const existingUser = await prisma.user.findUnique({
        where: { email: body.email.toLowerCase() },
      });

      if (existingUser !== null) {
        c.status(409);
        return c.json({ error: "Email Already Exists" });
      } else {
        const user = await prisma.user.create({
          data: {
            name: body.name,
            email: body.email.toLowerCase(),
            password: body.password,
          },
        });

        const jwt = await sign({ user_id: user.id }, c.env.JWT_SECRET_KEY);

        return c.json({ token: jwt });
      }
    }
  } catch (error) {
    c.status(411);
    return c.json({ error: "Please Enter Credentials" });
  }
};

const updateHandler = async (c: Context) => {
  const body = await c.req.json();
  const prisma = c.get("prisma");
  const user_id = c.get("user_id");

  console.log(body);

  const bodyValidation = updateProfileData.safeParse(body);
  if (!bodyValidation.success) {
    c.status(411);
    return c.json({ error: "Invalid Inputs" });
  } else {
    const user = await prisma.user.update({
      where: { id: user_id },
      data: {
        id: user_id,
        name: body.name,
        email: body.email.toLowerCase(),
        password: body.password,
        quote: body.quotes,
      },
    });
    if (user) {
      return c.json({ message: "Updated Successfully" });
    } else {
      return c.json({ message: "Updated Failed" });
    }
  }
};

const deleteHandler = async (c: Context) => {
  const user_id = c.get("user_id");
  const prisma = c.get("prisma");
  await prisma.user.delete({
    where: { id: user_id },
  });
  return c.json({ message: "Deleted Successfully" });
};

const getUserHandler = async (c: Context) => {
  const user_id = c.get("user_id");
  const prisma = c.get("prisma");

  const user = await prisma.user.findUnique({
    where: { id: user_id },
  });

  return c.json({ user });
};

export {
  signinHandler,
  signupHandler,
  updateHandler,
  deleteHandler,
  getUserHandler,
};
