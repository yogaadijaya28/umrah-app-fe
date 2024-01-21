import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonSingleResponse } from '@/api/baseApi/types'
import { PostContactUsParams } from '../types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL


// ini tidak ada response aka data null 
export const postContactUs = async (params: PostContactUsParams): Promise<CommonSingleResponse> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/contact-us`,
        useStrapi: false,
        headerPost: {
            'Content-Type': "application/json",
            Accept: "application/json",
        },
        data: params
    })
    return response.data
}
