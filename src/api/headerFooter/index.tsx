import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonStrapiArrayResponse } from '@/api/baseApi/types'
import { MenuParams, MenuReponses } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_STRAPI_MELAWAI_BASE_URL


export const getMenu = async (
    params: MenuParams,
): Promise<CommonStrapiArrayResponse<MenuReponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/nav-menus?locale=${params.lang || 'id-ID'}${params.hasDeep ? '&populate=deep' : ''}&sort=id:ASC`,
        useStrapi: true,
    })
    return response.data
}