export interface TermConditionParams {
    hasDeep: boolean
    lang: string
}

export interface TermConditionResponse {
    id?: number
    attributes?: TermConditionAttributesResponse
}

export interface TermConditionAttributesResponse {
    tncPageSlug?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    tncPageHeader?: tncPageHeaderProps
    tncContent?: Array <tncContentArrayParams>
    seo?: any
}

export interface tncPageHeaderProps {
    id?: number
    hsDesc?: string
    hsTitle?: string

}

export interface tncContentArrayParams {
    id?: number
    tsDesc?: string
    tsTitle?: string
}