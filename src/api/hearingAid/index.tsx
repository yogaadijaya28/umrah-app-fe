import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonStrapiArrayResponse, CommonStrapiResponse } from '@/api/baseApi/types'
import { DetailEduProjectParams, DetailEduProjectResponses, DetailEduProjectResponses2 } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL



// export const getDetailEduProject = async (params: DetailEduProjectParams): Promise<CommonStrapiResponse<DetailEduProjectResponses2>> => {
//     const response = await call({   
//         method: METHODS.GET,
//         overrideBaseUrl,
//         subUrl: `/edu-product-pages/${params.id}${params.locale == 'id-ID' ? '-id' : ''}?populate=deep&locale=${params.locale}`,
//         useStrapi: true,
//     })
//     return response.data;
// }


// ini by slug
// export const getDetailEduProject = async (params: DetailEduProjectParams): Promise<CommonStrapiResponse<DetailEduProjectResponses>> => {
    

//     const response = await call({   
//         method: METHODS.GET,
//         overrideBaseUrl,
//         subUrl: `/edu-product-pages/${params.locale === 'id-ID' ? '-id' : ''}?populate=deep&locale=${params.locale}${params.slug ? `&filters[$and][0][edSlug][$eq]=${params.slug}` : ''}`,
//         useStrapi: true,
//     });

//     return response.data;
// }

export const getDetailEduProject = async (params: DetailEduProjectParams): Promise<CommonStrapiResponse<DetailEduProjectResponses>> => {
    

    const response = await call({   
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/edu-product-pages/${params.slug}${params.locale == 'id-ID' ? '-id' : ''}?populate=deep&locale=${params.locale}`,

        useStrapi: true,
    });

    return response.data;
}
