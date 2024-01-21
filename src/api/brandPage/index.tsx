import { METHODS, call } from '@/api/baseApi/index'
import { CommonStrapiResponse } from '@/api/baseApi/types'
import { BrandpageParams, BrandpageResponses } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPageBrands = async (
    params: BrandpageParams,
): Promise<CommonStrapiResponse<BrandpageResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/brand-page?locale=${params.lang || 'id-ID'}${params.hasDeep ? '&populate=deep' : ''}`,
        useStrapi: true,
    })
    return response.data
}