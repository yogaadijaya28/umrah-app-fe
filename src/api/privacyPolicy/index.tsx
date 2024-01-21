import { METHODS, call } from '@/api/baseApi/index'
import { CommonStrapiResponse } from '@/api/baseApi/types'
import { PrivacyPolicyParams, PrivacyPolicyResponse } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPagePP = async (
    params: PrivacyPolicyParams,
): Promise<CommonStrapiResponse<PrivacyPolicyResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/privacy-policy?locale=${params.lang || 'id-ID'}${params.hasDeep ? '&populate=deep' : ''}`,
        useStrapi: true,
    })
    return response.data
}
