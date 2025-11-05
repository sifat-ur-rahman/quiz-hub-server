"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCard = void 0;
const mongoose_1 = require("mongoose");
const addToCardSchema = new mongoose_1.Schema({
    productId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Product', required: true },
    buyerId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    buyerName: { type: String, required: true },
    productImg: { type: String, required: true },
    productPrice: { type: Number, required: true },
}, { timestamps: true });
exports.AddToCard = (0, mongoose_1.model)('AddToCard', addToCardSchema);
