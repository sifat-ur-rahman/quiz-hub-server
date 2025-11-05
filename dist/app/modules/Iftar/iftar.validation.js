"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IftarValidation = void 0;
const zod_1 = require("zod");
//Create Validation Schema------
const IftarValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1),
        ramadan: zod_1.z.string(),
        day: zod_1.z.string().optional(),
        date: zod_1.z.string(),
        states: zod_1.z.string(),
    }),
});
//Update Validation Schema------
const IftarUpdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        ramadan: zod_1.z.string().optional(),
        day: zod_1.z.string().optional(),
        date: zod_1.z.string().optional(),
    }),
});
exports.IftarValidation = {
    IftarValidationSchema,
    IftarUpdateValidationSchema,
};
