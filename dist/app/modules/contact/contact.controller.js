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
exports.ContactControllers = void 0;
const contact_service_1 = require("./contact.service");
const createContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ContactData = req.body;
        const result = yield contact_service_1.ContactService.createContactIntoDB(ContactData);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Contact created successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllContacts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield contact_service_1.ContactService.getAllContactsFromDB();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Contacts retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getOneContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactId } = req.params;
        const result = yield contact_service_1.ContactService.getOneContactFromDB(contactId);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Contact By ID retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const updateContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.contactId;
        const updatedContactData = req.body;
        const result = yield contact_service_1.ContactService.updateContactFromDB(id, updatedContactData);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Contact updated successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const favoriteContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield contact_service_1.ContactService.favoriteContactFromDB(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Favorite Contact updated successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllFavoritesContacts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield contact_service_1.ContactService.getAllFavoritesContactsFromDB();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Favorites Contacts retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const deletedContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactId } = req.params;
        const result = yield contact_service_1.ContactService.deleteOneContactFromDB(contactId);
        if (result) {
            res.status(200).json({
                success: true,
                statusCode: 200,
                message: 'Contact delete successfully',
                data: null,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.ContactControllers = {
    createContact,
    getAllContacts,
    getOneContact,
    updateContact,
    favoriteContact,
    getAllFavoritesContacts,
    deletedContact,
};
