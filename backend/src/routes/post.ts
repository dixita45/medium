import { createpostInput, updatepostInput } from "@dixitabhuva/second-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const postRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

postRouter.use("/*", async (c, next) => {
  const header = c.req.header("authorization") || "";

  try {
    const user = await verify(header, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id as string);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "you are not logged in",
      });
    }
  } catch (e) {
    c.status(403);
    return c.json({
      message: "you are not logged in",
    });
  }
});

postRouter.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = createpostInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs are Incorrect",
    });
  }
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: authorId,
    },
  });

  return c.json({
    id: post.id,
  });
});

postRouter.put("/", async (c) => {
  const body = await c.req.json();
  const { success } = updatepostInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs are Incorrect",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const post = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({
    id: post.id,
  });
});

postRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const posts = await prisma.post.findMany({
    select: {
      content: true,
      title:true,
      id:true,
      author:{
        select: {
          name:true
        }
      }
    },
  });

  return c.json({
    posts,
  });
});

postRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: id,
      },
      select:{
        id:true,
        title:true,
        content:true,
        author:{
          select:{
            name:true
          }
        }
      }
    });

    return c.json({
      post,
    });
  } catch (e) {
    c.status(411);
    return c.json({
      message: "Error while fetching",
    });
  }
});
