import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonStrapiArrayResponse, CommonStrapiResponse } from '@/api/baseApi/types'
import { ListServicesParams, ListServicesResponses, ServicesPageResponse, DetailServicesParams, DetailServicesResponses } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPageServices = async (lang: string): Promise<CommonStrapiResponse<ServicesPageResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/guide-service-page?populate=deep&locale=${lang}`,
        useStrapi: true,
    })
    return response.data
}


export const getListService = async (params: ListServicesParams): Promise<CommonStrapiArrayResponse<ListServicesResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/guide-services?pagination[page]=${params.page}&pagination[pageSize]=${params.pageSize}&populate=deep&sort=id:DESC&locale=${params.locale}${params.guideType != '' ? `&filters[$and][0][guide_type][tyName][$eq]=${params.guideType}` : ''}`,
        useStrapi: true,
    })
    return response.data
}

export const getDetailService = async (params: DetailServicesParams): Promise<CommonStrapiResponse<DetailServicesResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/guide-services/${params.slug}${params.locale == 'id-ID' ? '-id' : ''}?populate=deep&locale=${params.locale}`,
        useStrapi: true,
    })
    return response.data
}