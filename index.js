const mongoose = require('mongoose')

/**
 * A config object should contain the rel. connections details for this env.
 * @param config Config object
 */
module.exports = (config) => new Promise((resolve, reject) => {
  let connectionString = config.mongoUri

  if (!connectionString) {
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
      {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true
      },
      config.mongoOpts || {}
    )
  ).catch((e) => {
    console.error('Mongoose connection error:', e, 'DatabaseLoader')
    reject(e)
  })

  mongoose.connection.on('error', (e) => {
    console.error('Mongoose connection error:', e, 'DatabaseLoader')
    reject(e)
  })

  mongoose.connection.once('open', () => {
    const method = config.mongoUri ? 'The connection string provided' : 'The configuration options provided'
    console.info('Mongoose connected via: ' + method)
    resolve()
  })
})
