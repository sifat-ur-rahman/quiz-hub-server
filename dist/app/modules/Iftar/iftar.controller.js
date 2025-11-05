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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IftarControllers = void 0;
const iftar_service_1 = require("./iftar.service");
const http_status_1 = __importDefault(require("http-status"));
const createIftar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ContactData = req.body;
        const result = yield iftar_service_1.IftarService.createIftarIntoDB(ContactData);
        if (!result) {
            res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Iftar not created',
                data: null,
            });
        }
        else {
            res.status(http_status_1.default.CREATED).json({
                success: true,
                statusCode: http_status_1.default.CREATED,
                message: 'Iftar created successfully',
                data: result,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
const getAllIftars = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield iftar_service_1.IftarService.getAllIftarsFromDB();
        if (!result) {
            res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Iftars not found',
                data: null,
            });
        }
        else {
            res.status(http_status_1.default.OK).json({
                success: true,
                statusCode: http_status_1.default.OK,
                message: 'Iftars retrieved successfully',
                data: result,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
const getOneIftar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { iftarId } = req.params;
        const result = yield iftar_service_1.IftarService.getOneIftarFromDB(iftarId);
        if (!result) {
            res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Iftar not found',
                data: null,
            });
        }
        else {
            res.status(http_status_1.default.OK).json({
                success: true,
                statusCode: http_status_1.default.OK,
                message: 'Iftar By ID retrieved successfully',
                data: result,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
const updateIftar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.iftarId;
        const updatedIftarData = req.body;
        const result = yield iftar_service_1.IftarService.updateIftarFromDB(id, updatedIftarData);
        if (result) {
            res.status(http_status_1.default.OK).json({
                success: true,
                statusCode: http_status_1.default.OK,
                message: 'Iftar updated successfully',
                data: result,
            });
        }
        else {
            res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Iftar not found',
                data: null,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
// const favoriteContact = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const id = req.params.id;
//     const result = await IftarService.favoriteContactFromDB(id);
//     res.status(200).json({
//       success: true,
//       statusCode: 200,
//       message: 'Favorite Contact updated successfully',
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//   }
// };
const getAllFavoritesContacts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield iftar_service_1.IftarService.getAllFavoritesContactsFromDB();
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
const deletedIftar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { iftarId } = req.params;
        const result = yield iftar_service_1.IftarService.deleteOneIftarFromDB(iftarId);
        if (result) {
            res.status(http_status_1.default.OK).json({
                success: true,
                statusCode: http_status_1.default.OK,
                message: 'Iftar delete successfully',
                data: null,
            });
        }
        else {
            res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'Iftar not found',
                data: null,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.IftarControllers = {
    createIftar,
    getAllIftars,
    getOneIftar,
    updateIftar,
    // favoriteContact,
    getAllFavoritesContacts,
    deletedIftar,
};
