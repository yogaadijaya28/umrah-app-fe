import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonSingleResponse } from '@/api/baseApi/types'
import { GetListVoucherResponse, getListVoucherParams } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL


export const getListVoucher = async (params: getListVoucherParams): Promise<CommonSingleResponse<any>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v1/vouchers/usable?page=${params?.page}&limit=${params?.limit}&cart_ids=${params?.idProduct}`,
        useStrapi: false,
    })
    return response?.data?.data
}