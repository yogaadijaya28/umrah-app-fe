import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonArrayResponse, CommonSingleResponse } from '@/api/baseApi/types'
import { WalletPointHistoryResponses, WalletPointRewardResponses } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL


export const getPointCheck = async (
): Promise<CommonSingleResponse<WalletPointRewardResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/point/check`,
        useStrapi: false,
    })
    return response.data
}

export const getPointHistory = async (
    ): Promise<CommonArrayResponse<WalletPointHistoryResponses>> => {
        const response = await call({
            method: METHODS.GET,
            overrideBaseUrl,
            subUrl: `/api/v2/auth/point/history`,
            useStrapi: false,
        })
        return response.data
    }