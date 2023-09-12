"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
it('should connect without issue', async () => {
    const connect = await (0, index_1.default)({
        mongoAdditionalParams: 'authSource=admin',
        mongoDatabase: 'tester',
        mongoHost: 'localhost',
        mongoPassword: '',
        mongoPort: '27017',
        mongoUser: '',
        mongoProtocol: 'mongodb'
    });
    expect(typeof connect).not.toBe(undefined);
});
//# sourceMappingURL=connect.spec.js.map