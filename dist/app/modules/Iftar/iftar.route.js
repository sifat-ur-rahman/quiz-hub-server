"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IftarRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const iftar_validation_1 = require("./iftar.validation");
const iftar_controller_1 = require("./iftar.controller");
const router = express_1.default.Router();
router.post('/api/iftar', (0, validateRequest_1.default)(iftar_validation_1.IftarValidation.IftarValidationSchema), iftar_controller_1.IftarControllers.createIftar);
router.get('/api/iftars', iftar_controller_1.IftarControllers.getAllIftars);
router.get('/api/iftar/:iftarId', iftar_controller_1.IftarControllers.getOneIftar);
router.delete('/api/iftar/:iftarId', iftar_controller_1.IftarControllers.deletedIftar);
router.put('/api/iftar/:iftarId', (0, validateRequest_1.default)(iftar_validation_1.IftarValidation.IftarUpdateValidationSchema), iftar_controller_1.IftarControllers.updateIftar);
//router.patch('/api/iftar/:id/favorite', ContactControllers.favoriteContact);
// router.get(
//   '/api/iftars/favorites',
//   ContactControllers.getAllFavoritesContacts,
// );
exports.IftarRoute = router;
