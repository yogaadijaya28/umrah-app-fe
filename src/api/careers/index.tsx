import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonStrapiArrayResponse, CommonStrapiResponse } from '@/api/baseApi/types'
import { PageCareersResponse, PageCareersParams, ListCareersParams, ListCareersResponse, DetailCareerParams } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPageCareers = async (params: PageCareersParams): Promise<CommonStrapiResponse<PageCareersResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/career-page?populate=deep&locale=${params.locale}`,
        useStrapi: true,
    })
    return response.data
}

export const getListCareer = async (params: ListCareersParams): Promise<CommonStrapiArrayResponse<ListCareersResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/careers?pagination[page]=${params.page}&pagination[pageSize]=${params.pageSize}&populate=deep&sort=id:DESC&locale=${params.locale}`,
        useStrapi: true,
    })
    return response.data
}

export const getListDetailCareer = async (params: DetailCareerParams): Promise<CommonStrapiArrayResponse<ListCareersResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/careers?populate=deep&sort=id:DESC&locale=${params.locale}${params.slug != '' ? `&filters[$and][0][crSlug][$ne]=${params.slug}${params.locale == 'id-ID' ? '-id' : ''}` : ''}`,
        useStrapi: true,
    })
    return response.data
}

export const getDetailCareer = async (params: DetailCareerParams): Promise<CommonStrapiResponse<ListCareersResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/careers/${params.slug}${params.locale == 'id-ID' ? '-id' : ''}?populate=deep&locale=${params.locale}`,
        useStrapi: true,
    })
    return response.data
}