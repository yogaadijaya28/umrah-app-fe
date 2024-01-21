import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonSingleResponse, CommonArrayResponse, LogisticCostResponse } from '@/api/baseApi/types'
import { addtoCartParams, addtoCartResponse, listCartParams, DeleteCartParams, getListCartResponse, CheckCartParams, ShippingCostParams, ShippingCostResponse, InsuranceCostParams, InsuranceCostResponse } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const postAddUpdatetoCart = async (params: addtoCartParams): Promise<CommonSingleResponse<addtoCartResponse>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/cart`,
        useStrapi: false,
        data: params
    })
    return response.data
}


export const getCartList = async (params: listCartParams): Promise<CommonArrayResponse<getListCartResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v2/cart?cart_token=${params.cart_token}`,
        headerPost: { Accept: 'application/json', Lang: params?.lang || 'id' },
        useStrapi: false,
    })
    return response.data
}

export const deleteCart = async (params: DeleteCartParams): Promise<CommonArrayResponse<getListCartResponse>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v1/cart/delete`,
        headerPost: { Accept: 'application/json', Lang: params?.lang || 'id' },
        data: {
            ids: params?.idCart
        },
        useStrapi: false,
    })
    return response.data
}


export const checkCart = async (params: CheckCartParams): Promise<CommonArrayResponse<any>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/cart/check-items`,
        headerPost: { Accept: 'application/json', Lang: params?.lang || 'id' },
        data: {
            ids: params?.idCart,
            cart_token: params?.cart_token || '',
        },
        useStrapi: false,
    })
    return response.data
}

export const uncheckCart = async (params: CheckCartParams): Promise<CommonArrayResponse<any>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/cart/uncheck-items`,
        headerPost: { Accept: 'application/json', Lang: params?.lang || 'id' },
        data: {
            ids: params?.idCart,
            cart_token: params?.cart_token || '',
        },
        useStrapi: false,
    })
    return response.data
}

export const shippingCost = async (params: ShippingCostParams): Promise<LogisticCostResponse<ShippingCostResponse>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v1/customer/logistic-costs`,
        data: params,
        useStrapi: false,
    })
    return response.data
}

export const insuranceCost = async (params: InsuranceCostParams): Promise<CommonSingleResponse<InsuranceCostResponse>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/customer/insurance`,
        data: params,
        useStrapi: false,
    })
    return response.data
}