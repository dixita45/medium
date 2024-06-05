import z from "zod";
export declare const signupInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export type Signupinput = z.infer<typeof signupInput>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type Signininput = z.infer<typeof signinInput>;
export declare const createpostInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export type createPostInput = z.infer<typeof createpostInput>;
export declare const updatepostInput: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    content?: string | undefined;
}, {
    title?: string | undefined;
    content?: string | undefined;
}>;
export type Updatepostinput = z.infer<typeof updatepostInput>;
