"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToProductControllers = void 0;
const addToCard_service_1 = require("./addToCard.service");
const createAddToCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AddToCardData = req.body;
        const result = yield addToCard_service_1.AddToCardService.createAddToCardIntoDB(AddToCardData);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'AddToCard created successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllAddToCardById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield addToCard_service_1.AddToCardService.getAddToCardByUserFromDB(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'AddToCard By user ID retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.AddToProductControllers = {
    createAddToCard,
    getAllAddToCardById,
};
