import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonStrapiResponse } from '@/api/baseApi/types'
import { CustomProductsParams } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL



//     export const getCustomProducts = async (
//         params: CustomProductsParams,
//     ): Promise<CommonStrapiResponse<any>> => {
//     const response = await call({
//         method: METHODS.GET,
//         overrideBaseUrl,
//         subUrl: `/category-custom-prds?locale=${params.lang || 'id-ID'}${params.hasDeep ? '&populate=deep' : ''}&filters[$and][0][cstmSlug][$eq]=${params.slug || ''}`,
//         useStrapi: true,
//     })
//     return response.data
// }
