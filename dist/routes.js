"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("./controllers/UsersController"));
const routes = (0, express_1.Router)();
routes.get('/users', UsersController_1.default.getAll);
routes.get('/users/:index', UsersController_1.default.getOne);
routes.post('/users', UsersController_1.default.create);
routes.put('/users/:index', UsersController_1.default.update);
routes.delete('/users/:index', UsersController_1.default.delete);
exports.default = routes;
//# sourceMappingURL=routes.js.map