export interface PrivacyPolicyParams {
    hasDeep: boolean
    lang: string
}

export interface PrivacyPolicyResponse {
    id?: number
    attributes?: PrivacyPolicyAttributesResponse
}

export interface PrivacyPolicyAttributesResponse {
    ppPageSlug?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    ppPageHeader?: ppPageHeaderProps
    ppContent?: Array <ppContentArrayParams>
    seo?: any
}

export interface ppPageHeaderProps {
    id?: number
    hsDesc?: string
    hsTitle?: string

}

export interface ppContentArrayParams {
    id?: number
    tsDesc?: string
    tsTitle?: string
}