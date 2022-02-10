"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = (0, tslib_1.__importDefault)(require("mongoose"));
const DEFAULT_OPTIONS = mongoose_1.default.version.startsWith('6.')
    ? {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    : {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
const mongooseLoader = (config) => new Promise((resolve, reject) => {
    let connectionString = config.mongoUri;
    if (!connectionString) {
        const additionalParams = config.mongoAdditionalParams ? `?${config.mongoAdditionalParams}` : '';
        const { mongoDatabase, mongoHost, mongoPassword, mongoPort, mongoUser } = config;
        if (mongoUser) {
            connectionString = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}`;
        }
        else {
            connectionString = `mongodb://${mongoHost}`;
        }
        const portString = mongoPort ? `:${mongoPort}` : '';
        connectionString += `${portString}/${mongoDatabase}${additionalParams}`;
    }
    const options = {
        ...DEFAULT_OPTIONS,
        ...(config.mongoOpts || {})
    };
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