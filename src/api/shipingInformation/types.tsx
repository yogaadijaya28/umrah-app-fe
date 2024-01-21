export interface ShipingInformationParams {
    hasDeep: boolean
    lang: string
}

export interface ShipingInformationResponse {
    id?: number
    attributes?: ShipingInformationAttributesResponse
}

export interface ShipingInformationAttributesResponse {
    spPageSlug?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    spPageHeader?: spPageHeaderProps
    spPageContent?: Array <spPageContentArrayParams>
    seo?: any
    localizations?:any
}

export interface spPageHeaderProps {
    id?: number
    hsDesc?: string
    hsTitle?: string

}

export interface spPageContentArrayParams {
    id?: number
    faqCategory?: string
    faContent?: Array <faContentArrayParams>
}

export interface faContentArrayParams {
    id?: number
    faQuestion?: string
    faAnswer?: string
    ctaUrl?: any
    ctaText?: any
}