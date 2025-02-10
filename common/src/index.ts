import { z } from "zod";

export const signindata = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signupdata = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export const updateProfileData = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  Quote: z.string().optional(),
});

export const createBlogData = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
});

export const updateBlogData = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
});

export type SigninData = z.infer<typeof signindata>;
export type SignupData = z.infer<typeof signupdata>;
export type CreateBlogData = z.infer<typeof createBlogData>;
export type UpdateBlogData = z.infer<typeof updateBlogData>;
export type updateProfileData = z.infer<typeof updateProfileData>;
