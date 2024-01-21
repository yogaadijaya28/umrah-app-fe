import { METHODS, call } from '@/api/baseApi/index'
import { CommonStrapiResponse } from '@/api/baseApi/types'
import { CompanyProfileParams, CompanyProfileResponses } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPageCompanyProfile = async (
    params: CompanyProfileParams,
): Promise<CommonStrapiResponse<CompanyProfileResponses>> => {
    const response = await call({   
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/company-profile?locale=${params.lang || 'id-ID'}${params.hasDeep ? '&populate=deep' : ''}`,
        useStrapi: true,
    })
    return response.data
}