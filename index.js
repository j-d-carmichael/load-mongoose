const mongoose = require('mongoose')

/**
 * A config object should contain the rel. connections details for this env.
 * @param config Config object
 */
module.exports = (config) => {
  let connectionString = ''
  if (config.mongoUri) {
    connectionString += `:${mongoPort}/${mongoDatabase}${additionalParams}`
  } else {
    const additionalParams = config.mongoAdditionalParams ? ('?' + config.mongoAdditionalParams) : ''
    const { mongoDatabase, mongoHost, mongoPassword, mongoPort, mongoUser } = config

    if (mongoUser) {
      connectionString = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}`
    } else {
      connectionString = `mongodb://${mongoHost}`
    }
    connectionString += `:${mongoPort}/${mongoDatabase}${additionalParams}`
  }

  mongoose.connect(
    connectionString,
    Object.assign(
      { useNewUrlParser: true },
      config.mongoOpts || {}
    )
  ).catch((e) => {
    console.error('Mongoose connection error:', e, 'DatabaseLoader')
  })
  mongoose.connection.on('error', (e) => {
    console.error('Mongoose connection error:', e, 'DatabaseLoader')
  })
  mongoose.connection.once('open', () => {
    console.info('Mongoose connected to: ' + `${mongoHost}/${mongoDatabase}`, 'DatabaseLoader')
  })
}
