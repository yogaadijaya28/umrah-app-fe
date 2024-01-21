import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonStrapiArrayResponse, CommonStrapiResponse } from '@/api/baseApi/types'
import { DetailPartnershipResponses, ListPartnerResponses } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPagePartnership = async (lang: string): Promise<CommonStrapiResponse<DetailPartnershipResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/partnership?populate=deep&locale=${lang}`,
        useStrapi: true,
    })
    return response.data
}


export const getListParter = async (lang: string): Promise<CommonStrapiArrayResponse<ListPartnerResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/partners?populate=deep&sort=id:DESC&locale=${lang}`,
        useStrapi: true,
    })
    return response.data
}