import { METHODS, call } from '@/api/baseApi/index'
import { CommonStrapiResponse } from '@/api/baseApi/types'
import { TermConditionParams, TermConditionResponse } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPageTC = async (
    params: TermConditionParams,
): Promise<CommonStrapiResponse<TermConditionResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/term-condition?locale=${params.lang || 'id-ID'}${params.hasDeep ? '&populate=deep' : ''}`,
        useStrapi: true,
    })
    return response.data
}
