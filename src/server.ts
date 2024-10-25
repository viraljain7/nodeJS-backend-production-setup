import app from './app'
import config from './config/config'
import logger from './util/logger'

const server = app.listen(config.PORT)

;(() => {
    try {
        // Database connection

         
        logger.info(`Application Started`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        })
    } catch (err) {
         
        logger.error(`Application Started`, { meta: err })

        server.close((error) => {
             
            if (error) logger.error(`Application Started`, { meta: err })
            process.exit(1)
        })
    }
})()

