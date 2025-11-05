"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactValidation = void 0;
const zod_1 = require("zod");
//Create Validation Schema------
const ContactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1),
        img: zod_1.z.string(),
        email: zod_1.z.string().optional(),
        phone: zod_1.z.string(),
        address: zod_1.z.string(),
    }),
});
//Update Validation Schema------
const contactUpdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        img: zod_1.z.string().optional(),
        phone: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
    }),
});
exports.contactValidation = {
    ContactValidationSchema,
    contactUpdateValidationSchema,
};
