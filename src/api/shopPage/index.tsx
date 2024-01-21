import { METHODS, call } from '@/api/baseApi/index'
import { CommonStrapiResponse } from '@/api/baseApi/types'
import { CustomProductsParams, CustomProductsResponses } from '../customProductDetail/types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

export const getPageShop = async (params: CustomProductsParams): Promise<CommonStrapiResponse<CustomProductsResponses>> => {
    const response = await call({   
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/category-custom-prds/${params.slug}${params.locale == 'id-ID' ? '-id' : ''}?populate=deep&locale=${params.locale}`,
        useStrapi: true,
    })
    return response.data;
}
