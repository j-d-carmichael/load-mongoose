import mongoose, { ConnectOptions } from 'mongoose';

export type Config = {
  mongoAdditionalParams?: string;
  mongoDatabase?: string;
  mongoHost?: string;
  mongoPassword?: string;
  mongoPort?: string;
  mongoUri?: string;
  mongoUser?: string;
  mongoOpts?: ConnectOptions;
};

const DEFAULT_OPTIONS = mongoose.version.startsWith('6.')
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

const mongooseLoader = (config: Config): Promise<void> => new Promise((resolve, reject) => {
  let connectionString = config.mongoUri;

  if (!connectionString) {
    const additionalParams = config.mongoAdditionalParams
      ? ('?' + config.mongoAdditionalParams)
      : '';

    const { mongoDatabase, mongoHost, mongoPassword, mongoPort, mongoUser } = config;

    if (mongoUser) {
      connectionString = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}`;
    } else {
      connectionString = `mongodb://${mongoHost}`;
    }

    connectionString += `:${mongoPort}/${mongoDatabase}${additionalParams}`;
  }

  const options: ConnectOptions = {
    ...DEFAULT_OPTIONS,
    ...(config.mongoOpts || {})
  };

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