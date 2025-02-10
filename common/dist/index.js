"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogData = exports.createBlogData = exports.updateProfileData = exports.signupdata = exports.signindata = void 0;
const zod_1 = require("zod");
exports.signindata = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
});
exports.signupdata = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
});
exports.updateProfileData = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    Quote: zod_1.z.string().optional(),
});
exports.createBlogData = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    published: zod_1.z.boolean(),
});
exports.updateBlogData = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    published: zod_1.z.boolean(),
});
