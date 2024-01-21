import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonArrayResponse } from '@/api/baseApi/types'
import { ProvinceResponses, CityResponses, PostalCodeResponses } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL


export const getProvince = async (): Promise<CommonArrayResponse<ProvinceResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `/api/v1/data/province`,
        useStrapi: false,
    })
    return response.data
}

export const getCity = async (provinceId: string): Promise<CommonArrayResponse<CityResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `api/v1/data/city?province_id=${provinceId}`,
        useStrapi: false,
    })
    return response.data
}

export const getDistrict = async (cityId: string): Promise<CommonArrayResponse<CityResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `api/v1/data/district?city_id=${cityId}`,
        useStrapi: false,
    })
    return response.data
}

export const getPostalCode = async (districtId: string): Promise<CommonArrayResponse<PostalCodeResponses>> => {
    const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        subUrl: `api/v1/data/postalcode?district_id=${districtId}`,
        useStrapi: false,
    })
    return response.data
}