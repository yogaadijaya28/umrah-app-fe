export interface ListServicesParams {
    locale: string
    guideType?: string
    page: number
    pageSize: number
}

export interface DetailServicesParams {
    locale: string
    slug: string | any
}

export interface ServicesPageResponse {
    id?: number
    attributes?: ServicesPageAttributesResponse
}

export interface ServicesPageAttributesResponse {
    srvPageSlug?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    srvPageHeader?: ServicesPageAttributesHeaderResponse
    guide_types?: {
        data?: Array<ServicesPageAttributesTypeResponse>
    }
    seo?: ServicesPageAttributesSeoResponse
}

export interface ServicesPageAttributesHeaderResponse {
    id?: number
    hsTitle?: string
    hsDesc?: string
}

export interface ServicesPageAttributesTypeResponse {
    id?: number
    attributes?: ServicesPageAttributesTypeAttributesResponse
}

export interface ServicesPageAttributesTypeAttributesResponse {
    tyName?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    tyDesc?: string
}


export interface ServicesPageAttributesSeoResponse {
    id?: number
    metaTitle?: string
    metaDescription?: string
    keywords?: string
    metaRobots?: string
    structuredData?: string
    metaViewport?: string
    canonicalURL?: string
}


export interface ListGuideResponse {
    id?: number
    attributes: ListGuideAttribute
}

export interface ListGuideAttribute {
    tyName?: string,
    createdAt?: string,
    updatedAt?: string,
    publishedAt?: string,
    seSlug?: string,
    tyDesc?: string,
    applyToGuideServices?: boolean
}


export interface ListServicesResponses {
    id?: number
    attributes: ListServicesAttribute
    seo: ListServisSeo
}

export interface DetailServicesResponses {
    id?: number
    attributes?: {
        srNAme?: string
        createdAt?: string
        updatedAt?: string
        publishedAt?: string
        seSlug?: string
        locale?: string
        thumbnailAltText?: string
        thumbnail?: any
        srHeader?: DetailServicessrHeader
        srContent?: Array<any>
    }
}

export interface DetailServicessrHeader {
    id?: number
    hrTitle?: string
    hrDesd?: string
    hrImageAltText?: string
    hrImage?: any
    hrCta?: {
        id?: number
        ctaText?: string
        ctaType?: string
        ctaUrl?: string
    }
}

export interface ListServicesAttribute {
    srNAme?: string,
    createdAt?: string,
    updatedAt?: string,
    publishedAt?: string,
    seSlug?: string,
    locale?: string,
    thumbnailAltText?: string,
    thumbnail?: any
}

export interface ListServisSeo {
    id?: number,
    metaTitle?: string,
    metaDescription?: string,
}

