import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonStrapiResponse } from '@/api/baseApi/types'
import { PromoByStorePageParams, PromoByStorePageResponse } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL


export const getPromoByStorePage = async (
    params: PromoByStorePageParams,
): Promise<CommonStrapiResponse<PromoByStorePageResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/promo-page?locale=${params.lang || 'id-ID'}${params.hasDeep ? '&populate=deep' : ''}`,
        useStrapi: true,
    })
    return response.data
}
