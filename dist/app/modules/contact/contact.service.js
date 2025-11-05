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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const contact_model_1 = require("./contact.model");
const createContactIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.create(productData);
    return result;
});
const getAllContactsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const Contacts = yield contact_model_1.Contact.find();
    return Contacts;
});
const getOneContactFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.findById(id);
    return result;
});
const updateContactFromDB = (id, updatedProductData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.findByIdAndUpdate(id, updatedProductData, {
        new: true,
        runValidators: true,
    });
    return result;
});
const favoriteContactFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = yield contact_model_1.Contact.findById(id);
    if (!contact) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Contact not found');
    }
    contact.isFavorite = !contact.isFavorite;
    const result = yield contact.save();
    return result;
});
const getAllFavoritesContactsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const favoriteContacts = yield contact_model_1.Contact.find({ isFavorite: true });
    return favoriteContacts;
});
const deleteOneContactFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.findByIdAndDelete(id);
    return result;
});
exports.ContactService = {
    createContactIntoDB,
    getAllContactsFromDB,
    getOneContactFromDB,
    updateContactFromDB,
    favoriteContactFromDB,
    getAllFavoritesContactsFromDB,
    deleteOneContactFromDB,
};
