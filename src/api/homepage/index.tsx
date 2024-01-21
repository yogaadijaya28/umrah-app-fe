import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonStrapiResponse, CommonStrapiArrayResponse } from '@/api/baseApi/types'
import { HomepageParams, BrandParams, LearnParams, HomepageReponses } from './types'
import { ListLearnResponses } from '@/api/learn/types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL


export const getPageHomepage = async (
    params: HomepageParams,
): Promise<CommonStrapiResponse<HomepageReponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/homepage?locale=${params.lang || 'id-ID'}${params.hasDeep ? '&populate=deep' : ''}`,
        useStrapi: true,
    })
    return response.data
}

export const getBrandListByCategoryName = async (
    params: BrandParams,
): Promise<CommonStrapiResponse<any>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/brands?locale=${params.lang || 'id-ID'}${params.hasDeep ? '&populate=deep' : ''}&filters[$and][0][brand_categories][ctName][$eq]=${params.category || ''}`,
        useStrapi: true,
    })
    return response.data
}

export const getLearnListByCategoryName = async (
    params: LearnParams,
): Promise<CommonStrapiArrayResponse<ListLearnResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/guide-learns?pagination[page]=${params.page || 1}&pagination[pageSize]=${params.pageSize || 6}&sort=id:DESC&locale=${params.lang || 'id-ID'}&filters[$and][0][guide_category][gcName][$eq]=${params.category || ''}&populate=deep`,
        useStrapi: true,
    })
    return response.data
}