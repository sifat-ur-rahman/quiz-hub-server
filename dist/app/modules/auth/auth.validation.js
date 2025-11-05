"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const loginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        phone: zod_1.z.string({ required_error: 'Phone Number is required.' }),
        password: zod_1.z.string({ required_error: 'Password is required' }),
    }),
});
const updateUserRoleValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        role: zod_1.z.enum(['user', 'admin', 'moderator'], {
            required_error: 'Role is required.',
            invalid_type_error: 'Invalid role. Allowed roles are user, admin, and moderator.',
        }),
    }),
});
exports.AuthValidation = {
    loginValidationSchema,
    updateUserRoleValidationSchema,
};
