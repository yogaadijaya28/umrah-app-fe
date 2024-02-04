import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import {  programResponse } from './types'
import {  CommonStrapiArrayResponse } from '@/api/baseApi/types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_UMRAH_BASE_URL


export const getPrograms = async (
    ): Promise<CommonStrapiArrayResponse<programResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/tipes`,
        useStrapi: true,
    })
    return response.data
}
