import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonStrapiArrayResponse, CommonStrapiResponse } from '@/api/baseApi/types'
import { PromoPageResponse, ListPromoParams, ListPromoResponses, DetailPromoParams, PromoDetailResponse } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPagePromo = async (lang: string): Promise<CommonStrapiResponse<PromoPageResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/promo-page?populate=deep&locale=${lang}`,
        useStrapi: true,
    })
    return response.data
}

export const getListPromo = async (params: ListPromoParams): Promise<CommonStrapiArrayResponse<ListPromoResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/promos?pagination[page]=${params.page}&pagination[pageSize]=${params.pageSize}&populate=deep&sort=id:DESC&locale=${params.locale}${params.guideType != '' ? `&filters[$and][0][promo_categories][categoryName][$eq]=${params.guideType}` : ''}`,
        useStrapi: true,
    })
    return response.data
}

export const getListDetailPromo = async (params: DetailPromoParams): Promise<CommonStrapiArrayResponse<ListPromoResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/promos?populate=deep&sort=id:DESC&locale=${params.locale}${params.slug != '' ? `&filters[$and][0][pmSlug][$ne]=${params.slug}${params.locale == 'id-ID' ? '-id' : ''}` : ''}`,
        useStrapi: true,
    })
    return response.data
}

export const getDetailPromo = async (params: DetailPromoParams): Promise<CommonStrapiResponse<PromoDetailResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/promos/${params.slug}${params.locale == 'id-ID' ? '-id' : ''}?populate=deep&locale=${params.locale}`,
        useStrapi: true,
    })
    return response.data
}