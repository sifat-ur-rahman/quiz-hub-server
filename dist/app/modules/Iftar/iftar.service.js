"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
exports.IftarService = void 0;
const iftar_model_1 = require("./iftar.model");
const createIftarIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield iftar_model_1.Iftar.create(productData);
    return result;
});
const getAllIftarsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const Contacts = yield iftar_model_1.Iftar.find();
    return Contacts;
});
const getOneIftarFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield iftar_model_1.Iftar.findById(id);
    return result;
});
const updateIftarFromDB = (id, updatedProductData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield iftar_model_1.Iftar.findByIdAndUpdate(id, updatedProductData, {
        new: true,
        runValidators: true,
    });
    return result;
});
// const favoriteContactFromDB = async (id: string): Promise<TIftar | null> => {
//   const contact = await Iftar.findById(id);
//   if (!contact) {
//     throw new AppError(httpStatus.NOT_FOUND, 'Contact not found');
//   }
//   contact.other = !contact.other;
//   const result = await contact.save();
//   return result;
// };
const getAllFavoritesContactsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const favoriteContacts = yield iftar_model_1.Iftar.find({ other: true });
    return favoriteContacts;
});
const deleteOneIftarFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield iftar_model_1.Iftar.findByIdAndDelete(id);
    return result;
});
exports.IftarService = {
    createIftarIntoDB,
    getAllIftarsFromDB,
    getOneIftarFromDB,
    updateIftarFromDB,
    // favoriteContactFromDB,
    getAllFavoritesContactsFromDB,
    deleteOneIftarFromDB,
};
