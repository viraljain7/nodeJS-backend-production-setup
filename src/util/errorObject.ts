import { Request } from 'express'
import { THttpError } from '../types/types'
import config from '../config/config'
import { EApplicationEnvironment } from '../constant/application'
import responseMessage from '../constant/responseMessage'

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (err: Error | unknown, req: Request, errorStatusCode: number): THttpError => {
    const errorObj: THttpError = {
        success: true,
        statusCode: errorStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: err instanceof Error ? err.message || responseMessage.SOMETHING_WENT_WRONG : responseMessage.SOMETHING_WENT_WRONG,
        data: null,
        trace: err instanceof Error ? { error: err.stack } : null
    }

    // Log
    // eslint-disable-next-line no-console
    console.info(`CONTROLLER_ERROR`, {
        meta: errorObj
    })

    // Production Env check
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip
    }
    // Production Env check
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip
        delete errorObj.trace
    }

    return errorObj
}

