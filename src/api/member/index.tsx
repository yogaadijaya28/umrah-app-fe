import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonStrapiArrayResponse, CommonStrapiResponse } from '@/api/baseApi/types'
import { postClientParams, postClientResponse } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const postClient = async (params: postClientParams): Promise<CommonStrapiResponse<postClientResponse>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/clients`,
        useStrapi: true,
        data: { data: params }
    })
    return response.data
}


export const getClient = async (): Promise<CommonStrapiArrayResponse<postClientResponse>> => {
    const response = await call({   
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/clients`,
        useStrapi: true,
    })
    return response.data;
}
