import mongoose, { ConnectOptions } from 'mongoose';

export type Config = {
  mongoAdditionalParams?: string;
  mongoDatabase?: string;
  mongoHost?: string;
  mongoPassword?: string;
  mongoPort?: string;
  mongoProtocol?: string;
  mongoUri?: string;
  mongoUser?: string;
  mongoOpts?: ConnectOptions;
};

const DEFAULT_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

export const calculateConnectionUri = (config: Config): string => {
  let connectionString;
  const additionalParams = config.mongoAdditionalParams ? `?${config.mongoAdditionalParams}` : '';
  const { mongoDatabase, mongoHost, mongoPassword, mongoPort, mongoUser, mongoProtocol } = config;
  const connectionProtocol = mongoProtocol || 'mongodb+srv';
  if (mongoUser) {
    connectionString = `${connectionProtocol}://${mongoUser}:${mongoPassword}@${mongoHost}`;
  } else {
    connectionString = `${connectionProtocol}://${mongoHost}`;
  }
  const portString = mongoPort ? `:${mongoPort}` : '';
  connectionString += `${portString}/${mongoDatabase}${additionalParams}`;

  return connectionString;
};

const mongooseLoader = (config: Config): Promise<void> => new Promise((resolve, reject) => {
  let connectionString = config.mongoUri;

  if (!connectionString) {
    connectionString = calculateConnectionUri(config);
  }

  const options: ConnectOptions = config.mongoOpts || {};

  mongoose
    .connect(connectionString, options)
    .catch((e) => {
      console.error('Mongoose connection error:', e, 'DatabaseLoader');
      reject(e);
    });

  mongoose.connection.on('error', (e) => {
    console.error('Mongoose connection error:', e, 'DatabaseLoader');
    reject(e);
  });

  mongoose.connection.once('open', () => {
    const method = config.mongoUri
      ? 'The connection string provided'
      : 'The configuration options provided';

    console.info('Mongoose connected via: ' + method);
    resolve();
  });
});

export default mongooseLoader;
