/* eslint-disable no-console */
import app from './app'
import config from './config/config'

const server = app.listen(config.PORT)

;(() => {
    try {
        // Database connection
         
        console.info(`Application Started`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        })
    } catch (err) {
         
        console.error(`Application Started`, { meta: err })

        server.close((error) => {
            if (error) console.error(`Application Started`, { meta: err })
            process.exit(1)
        })
    }
})()

