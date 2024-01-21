
export interface DetailPromoParams {
    locale: string
    slug: string | any
}

export interface PromoPageResponse {
    id?: number
    attributes?: PromoPageAttributesResponse
}

export interface PromoPageAttributesResponse {
    pmPageSlug?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    pmPageHeader?: {
        id?: string
        hsTitle?: string
        hsDesc?: string
    }
    promo_categories?: {
        data?: Array<PromoCategoriesResponse>
    }
    seo?: PromoPageAttributesSeoResponse
}

export interface PromoCategoriesResponse {
    id?: number
    attributes?: PromoCategoriesAttributesResponse
}

export interface PromoCategoriesAttributesResponse {
    categoryName?: string
    categoryDesc?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
}

export interface PromoPageAttributesSeoResponse {
    id?: number
    metaTitle?: string
    metaDescription?: string
    keywords?: string
    metaRobots?: string
    structuredData?: string
    metaViewport?: string
    canonicalURL?: string
}

export interface ListPromoParams {
    locale: string
    guideType?: string
    page: number
    pageSize: number
}

export interface ListPromoResponses {
    id?: number
    attributes: ListPromoAttribute
}

export interface ListPromoAttribute {
    pmName?: string,
    pmSlug?: string,
    createdAt?: string,
    publishedAt?: string,
    updatedAt?: string,
    pmStartDate?: string,
    pmEndDate?: string
    locale?: string
    pmProductTag?: any
    promo_categories?: {
        data?: PromoCategoriesResponse
    }
    pmDetail?: {
        id?: number
        imTitle?: string
        imImageTitle?: any
        ctaPlace?: string
        imagePosition?: string
        imImage?: any
    }
}

export interface PromoDetailResponse {
    id?: number
    attributes?: PromoDetailAttributesResponse
}

export interface PromoDetailAttributesResponse {
    pmName?: string
    pmSlug?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    pmStartDate?: string
    pmEndDate?: string
    locale?: string
    pmProductTag?: string
    pmBannerAds?: string
    pmShDesc?: string
    pmDetail?: {
        id?: number
        imTitle?: string
        imDesc?: string
        imImageTitle?: string | null
        ctaPlace?: string
        imagePosition?: string
        imImage?: any
        imCta?: Array<PromoDetailImCTA>
    }
}

export interface PromoDetailImCTA {
    id?: number
    ctaText?: string
    ctaType?: string
    ctaUrl?: string
}


