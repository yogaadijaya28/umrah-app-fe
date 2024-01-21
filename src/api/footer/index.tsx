import { METHODS, call } from '@/api/baseApi/index'
import { CommonStrapiArrayResponse, CommonStrapiResponse } from '@/api/baseApi/types'
import { HederMarketParams, HederMarketResponses, IconMarketplaceParams, IconMarketplaceResponses } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL

// export const getHeaderMarketplace = async (
//     params: HederMarketParams,
// ): Promise<CommonStrapiResponse<HederMarketResponses>> => {
//     const response = await call({
//         method: METHODS.GET,
//         overrideBaseUrl,
//         subUrl: `/marketplace-page/${params.locale == 'id-ID' ? '-id' : ''}?populate=deep&locale=${params.locale}`,
//         useStrapi: true,
//     })
//     return response.data
// }

export const getHeaderMarketplace = async (
    params: HederMarketParams,
): Promise<CommonStrapiResponse<HederMarketResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/marketplace-page?populate=deep&locale=${params.locale}`,
        useStrapi: true,
    })
    return response.data
}

// INI PAKAI BAHASA
// export const getIconMarketplace = async (params: IconMarketplaceParams): Promise<CommonStrapiArrayResponse<IconMarketplaceResponses>> => {
//     const response = await call({   
//         method: METHODS.GET,
//         overrideBaseUrl,
//         subUrl: `/marketplaces/${params.locale == 'id-ID' ? '-id' : ''}?populate=deep&locale=${params.locale}`,
//         useStrapi: true,
//     })
//     return response.data;
// }


export const getIconMarketplace = async (params: IconMarketplaceParams): Promise<CommonStrapiArrayResponse<IconMarketplaceResponses>> => {
    const response = await call({   
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/marketplaces?populate=deep&locale=${params.locale}`,
        useStrapi: true,
    })
    return response.data;
}
