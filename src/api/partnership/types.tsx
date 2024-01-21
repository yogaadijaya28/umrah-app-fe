export interface DetailPartnershipResponses {
    id?: number
    attributes?: DetailPartnershipAttribute
}

export interface ListPartnerResponses {
    id?: number
    attributes?: ListPartnerAttributes
}

export interface DetailPartnershipAttribute {
    ptsSlug?: string,
    createdAt?: string,
    updatedAt?: string,
    publishedAt?: string,
    locale?: string,
    ptsHeader?: {
        id?: number,
        hrTitle?: string,
        hrDesd?: string,
        hrImageAltText?: string,
        hrImage?: any,
        hrCta?: CtaData | null,
    },
    ptsContent?: Array<any>
    ptsContactTitle?: {
        id?: number
        tsTitle?: string
        tsDesc?: string
    }
    seo?: {
        id?: number
        metaTitle?: string
        metaDescription?: string
        keywords?: string
        metaRobots?: string
        structuredData?: string
        metaViewport?: string
        canonicalURL?: string
    }
    ptsContact?: Array<ParterShipContact>
    ptsPartnerTitle?: {
        id?: number
        tsTitle?: string
        tsDesc?: string
    }
    cpNewsHead?: {
        id?: number
        hdTitle?: string
        hdCta?: CtaData | null
    }
}

export interface CtaData {
    id?: number
    ctaText?: string
    ctaType?: string
    ctaUrl?: string
}

export interface ParterShipContact {
    id?: number
    cpPhotoAltText?: string
    cpName?: string
    cpPhoto?: any
    cpContactList?: Array<ParterShipCpContactList>
}

export interface ParterShipCpContactList {
    id?: number
    clIcon?: string
    clDetail?: string
}

export interface ListPartnerAttributes {
    prName?: string
    prDesc?: string | null
    prCategory?: string | null
    createdAt?: string | null
    updatedAt?: string | null
    publishedAt?: string | null
    prLogoAltText?: string | null
    prLogo?: any
}