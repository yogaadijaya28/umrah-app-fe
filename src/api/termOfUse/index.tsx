import { METHODS, call } from '@/api/baseApi/index'
import { CommonStrapiResponse } from '@/api/baseApi/types'
import { TermOfUseParams, TermOfUseResponse } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPageTOF = async (
    params: TermOfUseParams,
): Promise<CommonStrapiResponse<TermOfUseResponse>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/term-of-use?locale=${params.lang || 'id-ID'}${params.hasDeep ? '&populate=deep' : ''}`,
        useStrapi: true,
    })
    return response.data
}
