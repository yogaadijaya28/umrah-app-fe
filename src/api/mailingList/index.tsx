import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonSingleResponse } from '@/api/baseApi/types'
import { MailingParams, MailingResponse } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const postMailingList = async (
    params: MailingParams,
): Promise<CommonSingleResponse<MailingResponse>> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/subscribe`,
        useStrapi: false,
        data: params
    })
    return response.data
}