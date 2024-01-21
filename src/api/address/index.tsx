import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonArrayResponse, CommonSingleResponse } from '@/api/baseApi/types'
import { AddAddressParams, ListAddressReponses, MainAddressReponses, UpdateAddressParams } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL


// export const getCustAddressData = async (
// ): Promise<CommonSingleResponse<CustAddressReponses>> => {
//     const response = await call({
//         method: METHODS.GET,
//         overrideBaseUrl,
//         subUrl: `/api/v1/customer/address`,
//         useStrapi: false,
//     })
//     return response.data
// }

export const getListAddressData = async (
): Promise<CommonArrayResponse<ListAddressReponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v1/customer/address`,
        useStrapi: false,
    })
    return response.data
}


export const getMainAddressData = async (
): Promise<CommonSingleResponse<MainAddressReponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v1/customer/address/main`,
        useStrapi: false,
    })
    return response.data
}

export const getAddressById = async (
): Promise<CommonSingleResponse<MainAddressReponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v1/customer/address/32553`,
        useStrapi: false,
    })
    return response.data
}

//CREATE
export const postAddress = async (
    params: AddAddressParams,
): Promise<CommonSingleResponse<MainAddressReponses>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v1/customer/address`,
        useStrapi: false,
        data: params
    })
    return response.data
}

//UPDATE
export const patchAddress = async (
    params: UpdateAddressParams,
): Promise<CommonSingleResponse<MainAddressReponses>> => {
    const response = await call({
        method: METHODS.PATCH,
        overrideBaseUrl,
        subUrl: `/api/v1/customer/address/${params?.id || ''}`,
        useStrapi: false,
        data: params
    })
    return response.data
}

//SET MAIN

export const putMainAddress = async (id: number): Promise<CommonSingleResponse<MainAddressReponses>> => {
    const response = await call({
        method: METHODS.PUT,
        overrideBaseUrl,
        subUrl: `/api/v1/customer/address/${id}/set-main`,
        useStrapi: false,
    })
    return response.data
}

//DELETE
export const delAddressById = async (id: number): Promise<CommonArrayResponse<ListAddressReponses>> => {
    const response = await call({
        method: METHODS.DELETE,
        overrideBaseUrl,
        subUrl: `/api/v1/customer/address/${id}`,
        useStrapi: false,
    })
    return response.data
}