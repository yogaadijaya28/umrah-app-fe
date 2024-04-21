import axios, { AxiosPromise, AxiosRequestConfig, Method } from 'axios'

import { CallOptions } from './baseApiInterface'
import { hasCookie, getCookie } from 'cookies-next'

const instance = axios.create()

export const ApiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const METHODS = {
    GET: 'GET' as Method,
    POST: 'POST' as Method,
    PUT: 'PUT' as Method,
    PATCH: 'PATCH' as Method,
    DELETE: 'DELETE' as Method,
}


function isObjectEmpty(obj: any) {
    return Object.keys(obj).length === 0
}

export function call({
    method,
    subUrl = '',
    data = {},
    options,
    overrideBaseUrl,
    headerPost = {},
    useStrapi = true,
}: CallOptions): AxiosPromise {
    let headersData = {
        ...(options && options.headers ? options.headers : {}),
        'Content-Type': 'application/json',
    }

    if (hasCookie('token_code') && !useStrapi) {
        headersData = {
            ...(options && options.headers ? options.headers : {}),
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getCookie('token_code')}`,
        }
    } else {
        headersData = {
            ...(options && options.headers ? options.headers : {}),
            'Content-Type': 'application/json',
            Authorization: `Bearer ac9c3e3c78480db222503601c2b7151d66707760f0c1797bc8e2b875d7fc35923179ffdc3447588a65edaa91e4c2ce3586ebd22bcd295f1731953e1d76297696facd45afe9ab5e8ac71a956af87b33127a0856218b57f98449e669d955cdd54cb89168ddacb8dd1377259b217e1f322e88b73e705612403fbc7a33b13bb61838`,
        }
    }


    const config: AxiosRequestConfig = {
        ...options,
        baseURL: overrideBaseUrl || ApiBaseUrl,
        method,
        url: subUrl,
        headers: { ...headersData, ...headerPost },
        data,

    }

    const payload = { ...data }

    if (method === METHODS.GET) {
        if (!isObjectEmpty(payload)) {
            Object.keys(payload).forEach((key) => {
                if (payload[key] === null || payload[key] === '') {
                    delete payload[key]
                }
            })
            config.params = payload
        }
    } else if (!isObjectEmpty(payload)) {
        config.data = payload
    }

    return instance.request(config)
}
