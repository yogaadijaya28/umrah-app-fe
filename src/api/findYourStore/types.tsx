export interface OutletParams {
    hasDeep: boolean
    lang: string
}

export interface OutletReponses {
    id?: number
    attributes?: OutletAttributes
}

export interface OutletAttributes {
    outPageSlug?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    outPageHeader?: outPageHeaderAttributes
    seo?: seoAttributes
    outAdsBanner?: outAdsBannerAttributes
    localizations?: localizationsAttributes
}

export interface outPageHeaderAttributes {
    id?: string
    hrTitle?: string
    hrDesd?: string
    hrImage?: hrImageAttributes
    hrCta?: string
}

export interface hrImageAttributes {
    data?: hrImageDataAttributes
}

export interface hrImageDataAttributes {
    id?: string
    attributes?: any
}

export interface seoAttributes {
    id?: string
    metaTitle?: string
    metaDescription?: string
    keywords?: string
    metaRobots?: string
    structuredData?: string
    metaViewport?: string
    canonicalURL?: string
    metaImage?: metaImageAttributes
    metaSocial?: Array<metaSocialArray>
}

export interface metaImageAttributes {
    data?: any
}

export interface metaSocialArray {

}

export interface outAdsBannerAttributes {
    id?: string
    bnTitle?: string
    bnDesc?: string
    bnColor?: string
    bnCta?: bnCtaAttributes
}

export interface bnCtaAttributes {
    id?: string
    ctaText?: string
    ctaType?: string
    ctaUrl?: string
}

export interface localizationsAttributes {
    data?: Array<localizationsDataArray>
}

export interface localizationsDataArray {
    id?: string
    attributes?: any
}