export interface ListLearnParams {
    locale: string
    guideType?: string
    page: number
    pageSize: number
}

export interface DetailLearnParams {
    locale: string
    slug: string | any
}

export interface LearnPageResponse {
    id?: number
    attributes?: LearnPageAttributesResponse
}

export interface LearnPageAttributesResponse {
    lrPageSlug?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    lrPageHeader?: LearnPageAttributesHeaderResponse
    guide_types?: {
        data?: Array<LearnPageAttributesTypeResponse>
    }
    seo?: LearnPageAttributesSeoResponse
}

export interface LearnPageAttributesHeaderResponse {
    id?: number
    hsTitle?: string
    hsDesc?: string
}

export interface LearnPageAttributesTypeResponse {
    id?: number
    attributes?: LearnPageAttributesTypeAttributesResponse
}

export interface LearnPageAttributesTypeAttributesResponse {
    tyName?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    tyDesc?: string
}

export interface LearnPageAttributesSeoResponse {
    id?: number
    metaTitle?: string
    metaDescription?: string
    keywords?: string
    metaRobots?: string
    structuredData?: string
    metaViewport?: string
    canonicalURL?: string
}


export interface ListLearnResponses {
    id?: number
    attributes: ListLearnAttribute
}

export interface ListLearnAttribute {
    lrName?: string,
    createdAt?: string,
    updatedAt?: string,
    publishedAt?: string,
    lrSlug?: string,
    locale?: string,
    lrThumbnail?: any
}

export interface DetailLearnResponses {
    id?: number
    attributes: DetailLearnAttribute
}

export interface DetailLearnAttribute {
    lrName?: string,
    createdAt?: string,
    updatedAt?: string,
    publishedAt?: string,
    lrSlug?: string,
    locale?: string,
    lrThumbnail?: any
    lrHeader?: LearnHeaderAttribute
    lrContent?: Array<any>
}

export interface LearnHeaderAttribute {
    id?: number,
    hrTitle?: string,
    hrDesd?: string,
    hrImage?: any,
    hrCta?: LearnHeaderCTaAttribute | null,
}

export interface LearnHeaderCTaAttribute {
    id?: number,
    ctaText?: string,
    ctaType?: string,
    ctaUrl?: string,
}