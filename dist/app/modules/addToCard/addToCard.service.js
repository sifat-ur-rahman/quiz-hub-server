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
exports.AddToCardService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
//import { TAddToCard } from './addToCard.interface';
const addToCard_model_1 = require("./addToCard.model");
const createAddToCardIntoDB = (AddToCardData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield addToCard_model_1.AddToCard.create(AddToCardData);
    return result;
});
const getAddToCardByUserFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield addToCard_model_1.AddToCard.find({ buyerId: id });
    return result;
});
exports.AddToCardService = {
    createAddToCardIntoDB,
    getAddToCardByUserFromDB,
};
