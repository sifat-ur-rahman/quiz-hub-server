"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const iftar_route_1 = require("./app/modules/Iftar/iftar.route");
const user_route_1 = require("./app/modules/user/user.route");
const auth_route_1 = require("./app/modules/auth/auth.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [
        'https://contacts-management-eight.vercel.app/',
        'http://localhost:3000',
    ],
    credentials: true,
}));
//http://localhost:5173
//https://timely-cannoli-fe9bd7.netlify.app
//application route.
app.use('/', iftar_route_1.IftarRoute);
app.use('/', user_route_1.UserRoute);
app.use('/', auth_route_1.AuthRoutes);
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'MBCM Server is running',
    });
});
//route error handler
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: 'Route is not found',
    });
});
app.use(globalErrorHandler_1.default);
exports.default = app;
