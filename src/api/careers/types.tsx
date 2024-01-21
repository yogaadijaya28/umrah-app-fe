export interface PageCareersParams {
    locale: string
}

export interface ListCareersParams {
    locale: string
    page: number
    pageSize: number
}

export interface DetailCareerParams {
    locale: string
    slug: string | any
}


export interface PageCareersResponse {
    id?: number
    attributes?: {
        crPageSlug?: string
        createdAt?: string
        updatedAt?: string
        publishedAt?: string
        locale?: string
        crPageHeader?: PageCareerHeaderAttributes
    }
    seo?: PageCareerSeoAttributes
}

export interface PageCareerHeaderAttributes {
    id?: number
    hrTitle?: string
    hrDesd?: string
    hrImageAltText?: string
    hrImage?: any
    hrCta?: PageCareerCtaAttributes
}

export interface PageCareerSeoAttributes {
    id?: number
    hrTitle?: string
    metaTitle?: string
    metaDescription?: string
}

export interface PageCareerCtaAttributes {
    id?: number
    ctaText?: string
    ctaType?: string
    ctaUrl?: string
}

export interface ListCareersResponse {
    id?: number
    attributes?: {
        crName?: string
        crSlug?: string
        createdAt?: string
        updatedAt?: string
        publishedAt?: string
        crDetail?: string
        locale?: string
        crThumbnailAltText?: string
        crCta?: Array<PageCareerCtaAttributes>
        seo?: PageCareerSeoAttributes
        crThumbnail?: CrThumbnailAttributes
    }
}

export interface CrThumbnailAttributes {
    id?: number
    hrTitle?: string
    hrDesd?: string
    hrImageAltText?: string
    hrImage?: any
    hrCta?: PageCareerCtaAttributes
}