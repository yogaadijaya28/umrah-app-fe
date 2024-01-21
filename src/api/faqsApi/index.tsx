import { METHODS, call } from '@/api/baseApi/index'
import { CommonStrapiResponse } from '@/api/baseApi/types'
import { FaqsParams, FaqsResponses } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPageFaqs = async (
    params: FaqsParams,
): Promise<CommonStrapiResponse<FaqsResponses>> => {
    const response = await call({   
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/faq-page?locale=${params.lang || 'id-ID'}${params.hasDeep ? '&populate=deep' : ''}`,
        useStrapi: true,
    })
    return response.data
}
