import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonSingleResponse } from '@/api/baseApi/types'
import { ChangeMailReqParams, ChangeMailValidParams, ChangeMailSubmitParams, ChangeMailResponses, changeProfileParams } from './types'
import { UserReponses } from '@/api/login/types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const changeProfile = async (params: changeProfileParams): Promise<CommonSingleResponse<UserReponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/customer`,
        useStrapi: false,
        data: params
    })
    return response.data
}


export const postReqChangeMail = async (params: ChangeMailReqParams): Promise<CommonSingleResponse<ChangeMailResponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/update/email/request`,
        useStrapi: false,
        data: params
    })
    return response.data
}

export const postValidChangeMail = async (params: ChangeMailValidParams): Promise<CommonSingleResponse<ChangeMailResponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/update/email/validate`,
        useStrapi: false,
        data: params
    })
    return response.data
}

export const postSubmitChangeMail = async (params: ChangeMailSubmitParams): Promise<CommonSingleResponse<UserReponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/update/email/submit`,
        useStrapi: false,
        data: params
    })
    return response.data
}

export const postReqChangeNumber = async (params: ChangeMailReqParams): Promise<CommonSingleResponse<ChangeMailResponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/update/phone/request`,
        useStrapi: false,
        data: params
    })
    return response.data
}

export const postValidChangeNumber = async (params: ChangeMailValidParams): Promise<CommonSingleResponse<ChangeMailResponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/update/phone/validate`,
        useStrapi: false,
        data: params
    })
    return response.data
}

export const postSubmitChangeNumber = async (params: ChangeMailSubmitParams): Promise<CommonSingleResponse<UserReponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/update/phone/submit`,
        useStrapi: false,
        data: params
    })
    return response.data
}