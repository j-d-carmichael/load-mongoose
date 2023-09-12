"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateConnectionUri = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DEFAULT_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const calculateConnectionUri = (config) => {
    let connectionString;
    const additionalParams = config.mongoAdditionalParams ? `?${config.mongoAdditionalParams}` : '';
    const { mongoDatabase, mongoHost, mongoPassword, mongoPort, mongoUser, mongoProtocol } = config;
    const connectionProtocol = mongoProtocol || 'mongodb+srv';
    if (mongoUser) {
        connectionString = `${connectionProtocol}://${mongoUser}:${mongoPassword}@${mongoHost}`;
    }
    else {
        connectionString = `${connectionProtocol}://${mongoHost}`;
    }
    const portString = mongoPort ? `:${mongoPort}` : '';
    connectionString += `${portString}/${mongoDatabase}${additionalParams}`;
    return connectionString;
};
exports.calculateConnectionUri = calculateConnectionUri;
const mongooseLoader = (config) => new Promise((resolve, reject) => {
    let connectionString = config.mongoUri;
    if (!connectionString) {
        connectionString = (0, exports.calculateConnectionUri)(config);
    }
    const options = config.mongoOpts || {};
    mongoose_1.default
        .connect(connectionString, options)
        .catch((e) => {
        console.error('Mongoose connection error:', e, 'DatabaseLoader');
        reject(e);
    });
    mongoose_1.default.connection.on('error', (e) => {
        console.error('Mongoose connection error:', e, 'DatabaseLoader');
        reject(e);
    });
    mongoose_1.default.connection.once('open', () => {
        const method = config.mongoUri
            ? 'The connection string provided'
            : 'The configuration options provided';
        console.info('Mongoose connected via: ' + method);
        resolve();
    });
});
exports.default = mongooseLoader;
//# sourceMappingURL=index.js.map