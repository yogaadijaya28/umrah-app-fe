import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonSingleResponse, CommonArrayResponse } from '@/api/baseApi/types'
import { RecomendationProductResponse, DetailProductResponse, detailProductParams, productAvaibleStoreParams, ProductAvaibleStoreResponse } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const getProductRecomendations = async (): Promise<CommonSingleResponse<RecomendationProductResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v1/product/recommendations`,
        useStrapi: false,
    })
    return response.data
}

export const getDetailProduct = async (params: detailProductParams): Promise<CommonSingleResponse<DetailProductResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v1/products/${params.slug}`,
        useStrapi: false,
    })
    return response.data
}

export const getProductAvaible = async (params: productAvaibleStoreParams): Promise<CommonArrayResponse<ProductAvaibleStoreResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v1/product/${params?.product_id}/outlet-product-stocks?all=yes&product_id=${params?.product_id}`,
        useStrapi: false,
    })
    return response.data
}