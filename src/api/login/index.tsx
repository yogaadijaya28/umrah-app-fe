import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonSingleResponse } from '@/api/baseApi/types'
import { LoginParams, LoginReponses, UserReponses, ReqPhoneNumberParams, ValidPhoneNumberParams, RegisterParams, RegisterReponses } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const postRegisterUser = async (
    params: RegisterParams,
): Promise<CommonSingleResponse<RegisterReponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/register`,
        useStrapi: false,
        headerPost: { 'Content-Type': 'multipart/form-data' },
        data: params
    })
    return response.data
}

export const postLoginUser = async (
    params: LoginParams,
): Promise<CommonSingleResponse<LoginReponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/login`,
        useStrapi: false,
        data: {
            email: params?.email || '',
            password: params?.password || '',
        }
    })
    return response.data
}

export const getAuthData = async (
): Promise<CommonSingleResponse<UserReponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/user`,
        useStrapi: false,
    })
    return response.data
}

export const reqNumberOtp = async (
    params: ReqPhoneNumberParams,
): Promise<CommonSingleResponse<LoginReponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/register/verify/phone/request`,
        useStrapi: false,
        data: params
    })
    return response.data
}

export const validNumberOtp = async (
    params: ValidPhoneNumberParams,
): Promise<CommonSingleResponse<LoginReponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/register/verify/phone/submit`,
        useStrapi: false,
        data: params
    })
    return response.data
}

export const reqMailOtp = async (
    params: ReqPhoneNumberParams,
): Promise<CommonSingleResponse<LoginReponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/register/verify/email/request`,
        useStrapi: false,
        data: params
    })
    return response.data
}

export const validMailOtp = async (
    params: ValidPhoneNumberParams,
): Promise<CommonSingleResponse<LoginReponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/register/verify/email/submit`,
        useStrapi: false,
        data: params
    })
    return response.data
}