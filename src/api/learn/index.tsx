import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonStrapiArrayResponse, CommonStrapiResponse } from '@/api/baseApi/types'
import { ListLearnParams, ListLearnResponses, LearnPageResponse, DetailLearnParams, DetailLearnResponses } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPageLearn = async (lang: string): Promise<CommonStrapiResponse<LearnPageResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/guide-learn-page?populate=deep&locale=${lang}`,
        useStrapi: true,
    })
    return response.data
}

export const getListLearn = async (params: ListLearnParams): Promise<CommonStrapiArrayResponse<ListLearnResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/guide-learns?pagination[page]=${params.page}&pagination[pageSize]=${params.pageSize}&populate=deep&sort=id:DESC&locale=${params.locale}${params.guideType != '' ? `&filters[$and][0][guide_type][tyName][$eq]=${params.guideType}` : ''}`,
        useStrapi: true,
    })
    return response.data
}

export const getDetailLearn = async (params: DetailLearnParams): Promise<CommonStrapiResponse<DetailLearnResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/guide-learns/${params.slug}${params.locale == 'id-ID' ? '-id' : ''}?populate=deep&locale=${params.locale}`,
        useStrapi: true,
    })
    return response.data
}