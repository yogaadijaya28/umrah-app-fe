import { METHODS, call } from '@/api/baseApi/index'
import { CommonSingleResponse, CommonStrapiResponse } from '@/api/baseApi/types'
import { ContactUspageParams, ContactpageResponses, PostContactUsParams } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPageContactUs = async (
    params: ContactUspageParams,
): Promise<CommonStrapiResponse<ContactpageResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/contact-us?locale=${params.lang || 'id-ID'}${params.hasDeep ? '&populate=deep' : ''}`,
        useStrapi: true,
    })
    return response.data
}

