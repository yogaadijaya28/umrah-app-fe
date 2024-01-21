import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonArrayResponse, CommonSingleResponse } from '@/api/baseApi/types'
import { AddToWishlistResponse, DeleteWishlistResponse, GetWishlistResponse } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const postAddtoWishlist = async (productID: string | number): Promise<CommonSingleResponse<AddToWishlistResponse>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v1/product/${productID}/wishlist?product_id=${productID}`,
        useStrapi: false,
    })
    return response.data
}

export const deleteFromWishlist = async (productID: string | number): Promise<CommonSingleResponse<DeleteWishlistResponse>> => {
    const response = await call({
        method: METHODS.DELETE,
        overrideBaseUrl,
        subUrl: `/api/v1/product/${productID}/wishlist`,
        useStrapi: false,
    })
    return response.data
}

export const getWishlists = async (
): Promise<CommonSingleResponse<GetWishlistResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v1/wishlists`,
        useStrapi: false,
    })
    return response.data
}