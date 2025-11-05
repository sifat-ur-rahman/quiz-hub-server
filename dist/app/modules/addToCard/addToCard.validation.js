"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const addToCardValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        productId: zod_1.z.string(),
        buyerId: zod_1.z.string(),
        buyerName: zod_1.z.string().min(1),
        productImg: zod_1.z.string(),
        productPrice: zod_1.z.number(),
    }),
});
exports.default = addToCardValidationSchema;
