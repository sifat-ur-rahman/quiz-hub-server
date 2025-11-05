"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoute = void 0;
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("./contact.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const contact_validation_1 = require("./contact.validation");
const router = express_1.default.Router();
router.post('/api/contact', (0, validateRequest_1.default)(contact_validation_1.contactValidation.ContactValidationSchema), contact_controller_1.ContactControllers.createContact);
router.get('/api/contacts', contact_controller_1.ContactControllers.getAllContacts);
router.get('/api/contact/:contactId', contact_controller_1.ContactControllers.getOneContact);
router.delete('/api/contact/:contactId', contact_controller_1.ContactControllers.deletedContact);
router.put('/api/contact/:contactId', contact_controller_1.ContactControllers.updateContact);
router.patch('/api/contact/:id/favorite', contact_controller_1.ContactControllers.favoriteContact);
router.get('/api/contacts/favorites', contact_controller_1.ContactControllers.getAllFavoritesContacts);
exports.ContactRoute = router;
