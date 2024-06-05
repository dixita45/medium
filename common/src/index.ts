import z from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string().optional(),
});

export type Signupinput = z.infer<typeof signupInput>;

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string(),
});

export type Signininput = z.infer<typeof signinInput>;

export const createpostInput = z.object({
    title: z.string(),
    content: z.string(),
});

export type createPostInput= z.infer<typeof createpostInput>;

export const updatepostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
});

export type Updatepostinput = z.infer<typeof updatepostInput>;