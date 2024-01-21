import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonSingleResponse } from '@/api/baseApi/types'
import { updatePasswordParams } from './types'
// import { UserReponses } from '@/api/login/types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

// jika ada response API pake ini
// export const updatePassword = async (params: updatePasswordParams): Promise<CommonSingleResponse<UserReponses>> => {
//     const response = await call({
//         method: METHODS.POST,
//         overrideBaseUrl,
//         subUrl: `/api/v2/auth/update-password`,
//         useStrapi: false,
//         data: params
//     })
//     return response.data
// }

// ini tidak ada response aka data null 
export const updatePassword = async (params: updatePasswordParams): Promise<CommonSingleResponse> => {
    const response = await call({
        method: METHODS.POST,
        overrideBaseUrl,
        subUrl: `/api/v2/auth/update-password`,
        useStrapi: false,
        data: params
    })
    return response.data
}
