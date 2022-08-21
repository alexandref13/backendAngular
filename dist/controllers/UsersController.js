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
const database_1 = require("../database");
let id = 1;
exports.default = {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json(database_1.users);
        });
    },
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { index } = req.params;
            const user = database_1.users.filter(element => {
                return element.id == parseInt(index);
            });
            if (!user) {
                return res.status(404).json({ error: 'User does not exist!' });
            }
            return res.json(user);
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, cpf } = req.body;
            id++;
            database_1.users.push({
                id,
                name,
                email,
                cpf
            });
            return res.json({
                id,
                name,
                email,
                cpf
            });
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { index } = req.params;
            const { name, email, cpf } = req.body;
            const userIndex = database_1.users.findIndex(element => element.id == parseInt(index));
            if (userIndex === -1) {
                return res.status(404).json({ error: "User does not exist" });
            }
            database_1.users[userIndex] = Object.assign(Object.assign({}, database_1.users[userIndex]), { name,
                email,
                cpf });
            return res.json(database_1.users[userIndex]);
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { index } = req.params;
            const userIndex = database_1.users.findIndex(element => element.id == parseInt(index));
            if (userIndex === -1) {
                return res.status(404).json({ error: "User does not exist" });
            }
            database_1.users.splice(userIndex, 1);
            return res.status(200).json({ ok: 'ok' });
        });
    }
};
//# sourceMappingURL=UsersController.js.map