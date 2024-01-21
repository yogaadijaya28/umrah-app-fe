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
            Authorization: `Bearer ce4174e03adb7b556637cf451d9ee297d2795d883f753fbf2cfb543a5f28b83f8e7ff699a95798c16ad76d34c24e116a60f58efdc6dc124c8fc1f2f7a26fdfda9556d24773c90948093a04b499c5cb7b2f82a8ec7cda8d172dd2cce1ccf2f84f03eccbc6dabdb7c1a54e7623ae2b38991c92c8eb1cb98db9a1fd7d5ac0c75ee7`,
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
