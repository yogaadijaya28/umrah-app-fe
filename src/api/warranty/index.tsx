import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonArrayResponse } from '@/api/baseApi/types'
import {  WarrantyOpticLenseResponses, getWarrantyPABDResponses  } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL



export const getWarrantyOpticLenses = async (
): Promise<CommonArrayResponse<WarrantyOpticLenseResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v1/auth/warranty2`,
        useStrapi: false,
    })
    return response.data
}

export const getWarrantyPABD = async (
    ): Promise<CommonArrayResponse<getWarrantyPABDResponses>> => {
        const response = await call({
            method: METHODS.GET,
            overrideBaseUrl,
            subUrl: `/api/v2/auth/garansi-pabd`,
            useStrapi: false,
        })
        return response.data
    }
    

