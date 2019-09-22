import mongoose from 'mongoose';

/**
 * A config object should contain the rel. connections details for this env.
 * @param config Config object
 */
export default (config) => {
  const additionalParams = config.mongoAdditionalParams ? ('?' + config.mongoAdditionalParams) : '';
  const { mongoDatabase, mongoHost, mongoPassword, mongoUser } = config;
  let connectionString;
  if (mongoUser) {
    connectionString = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}/`
      + `${mongoDatabase}${additionalParams}`;
  } else {
    connectionString = `mongodb://${mongoHost}/${mongoDatabase}${additionalParams}`;
  }
  mongoose.connect(
    connectionString,
    {
      useNewUrlParser: true,
    },
  ).catch((e) => {
    console.error('Mongoose connection error:', e, 'DatabaseLoader');
  });
  mongoose.connection.on('error', (e) => {
    console.error('Mongoose connection error:', e, 'DatabaseLoader');
  });
  mongoose.connection.once('open', () => {
    console.info('Mongoose connected to: ' + `${mongoHost}/${mongoDatabase}`, 'DatabaseLoader');
  });
};
