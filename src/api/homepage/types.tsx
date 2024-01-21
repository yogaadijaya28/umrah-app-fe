export interface HomepageParams {
    hasDeep: boolean
    lang: string
}

export interface HomepageReponses {
    id?: number
    attributes?: any
}

export interface BrandParams {
    hasDeep?: boolean
    lang: string
    category: string
}

export interface LearnParams {
    lang: string
    category: string
    page: number
    pageSize: number
}