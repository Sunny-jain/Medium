import { createBlogData, updateBlogData } from "@sunnyjain/medium-common";
import { Context } from "hono";

const getBlogHandler = async (c: Context) => {
  const id = c.req.param("id");
  const prisma = c.get("prisma");

  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: {
          name: true,
          quote: true
        },
      },
      publishedDate: true,
    },
  });

  return c.json({ post });
};

const getAllBlogHandler = async (c: Context) => {
  const prisma = c.get("prisma");

  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: {
          name: true,
        },
      },
      publishedDate: true,
    },
  });

  return c.json({ posts });
};

const newBlogHandler = async (c: Context) => {
  const body = await c.req.json();

  const bodyValidation = createBlogData.safeParse(body);

  if (!bodyValidation.success) {
    c.status(411);
    return c.json({ error: "Invalid Inputs" });
  } else {
    const user_id = c.get("user_id");
    const prisma = c.get("prisma");
    var publishedDate = null;
    if (body.published) {
      publishedDate = new Date();
    }

    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: user_id,
        published: body.published,
        publishedDate: publishedDate,
      },
    });

    return c.json({ id: post.id });
  }
};

const updateBlogHandler = async (c: Context) => {
  const body = await c.req.json();

  const bodyValidation = updateBlogData.safeParse(body);
  const user_id = c.get("user_id");
  const prisma = c.get("prisma");
  const id = c.req.param("id");

  console.log(id);
  var publishedDate = null;

  if (body.published) {
    publishedDate = new Date();
  }

  if (!bodyValidation.success) {
    c.status(411);
    return c.json({ error: "Invalid Inputs" });
  }
  try {
    await prisma.post.update({
      where: {
        id: id,
        authorId: user_id,
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        publishedDate: publishedDate,
      },
    });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({ error: "Invalid User" });
  }

  return c.json({ message: "Updated Successfully" });
};

const myBlogHandler = async (c: Context) => {
  const user_id = c.get("user_id");
  const prisma = c.get("prisma");

  const posts = await prisma.post.findMany({
    where: {
      authorId: user_id,
    },
  });

  return c.json({ posts });
};

export {
  myBlogHandler,
  getBlogHandler,
  getAllBlogHandler,
  newBlogHandler,
  updateBlogHandler,
};
