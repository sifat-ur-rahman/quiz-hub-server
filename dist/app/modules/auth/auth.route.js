"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const auth_controller_1 = require("./auth.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/api/auth/login', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.loginValidationSchema), auth_controller_1.AuthControllers.loginUser);
router.put('/api/users/:userId/role', (0, auth_1.default)('admin'), (req, res, next) => {
    req.params = req.params || {}; // Ensure params exist
    next();
}, (0, validateRequest_1.default)(auth_validation_1.AuthValidation.updateUserRoleValidationSchema), auth_controller_1.AuthControllers.updateUserRole);
exports.AuthRoutes = router;
