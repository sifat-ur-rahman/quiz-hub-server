"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCardRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const addToCard_controller_1 = require("./addToCard.controller");
const addToCard_validation_1 = __importDefault(require("./addToCard.validation"));
//import auth from '../../middlewares/auth';
const router = express_1.default.Router();
router.post('/api/add-to-card', 
//auth('user'),
(0, validateRequest_1.default)(addToCard_validation_1.default), addToCard_controller_1.AddToProductControllers.createAddToCard);
router.get('/api/add-to-card/:id', addToCard_controller_1.AddToProductControllers.getAllAddToCardById);
exports.AddToCardRoute = router;
