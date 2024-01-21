import { hrImageAttributes } from "../findYourStore/types"

export interface ShopPageParams {
    hasDeep: boolean
    lang: string
    // slug: string
}

export interface ShopPageResponse {
    id?: number
    attributes?: any
}
