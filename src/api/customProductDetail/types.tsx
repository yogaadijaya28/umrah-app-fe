import { hrImageAttributes } from "../findYourStore/types"

export interface CustomProductsParams {
    locale: string
    slug: string | any
}

export interface CustomProductsResponses {
    id?: number
    attributes?: {
        cstmName?: string
        createdAt?: string
        updatedAt?: string
        publishedAt?: string
        cstmSlug?: string
        locale?: string
        cstmTag?: string
        cstmBrandCode?: any
        cstmPgHeader?: cstmPgHeaderAttributes
        cstmBanner?: cstmBannerAttributes
        // disini any dulu 
        guide_learns?: guide_learnAttribute
        product_knowledges?: any
        seo?: any
        product_sections?: product_sectionsAttribute
        product_filters?: any
        product_types?: product_typeAttribute
        localizations?: any
    }
}

export interface cstmPgHeaderAttributes {
    id?: number
    hrTitle?: string
    hrDesd?: string
    hrImage?: hrImageAttributes
    hrCta?: any


}
export interface product_sectionsAttribute {
    data?: Array<productSection>
}

export interface productSection {
    id?: number,
    attributes?: {
        proName?: string
        proID?: string
    }
}

export interface guide_learnAttribute {
    data?: Array<guideLearn>
}

export interface guideLearn {
    id?: number,
    attributes?: {
        lrName?: string
        lrSlug?: string
        locale?: string
        lrThumbnail?: hrImageAttributes
        lrHeader?: cstmPgHeaderAttributes
        // anydulu
        lrContent?: any
        seo?: any
        guide_category?: any
        guide_type?: any
        localizations?: any

    }
}

// ini nsnti dihapus
export interface guide_learnsProps {
   
        lrName?: string
        lrSlug?: string
        locale?: string
        lrThumbnail?: hrImageAttributes
        lrHeader?: cstmPgHeaderAttributes
        // anydulu
        lrContent?: any
        seo?: any
        guide_category?: any
        guide_type?: any
        localizations?: any

    
}

export interface product_typeAttribute {
    data?: Array<productType>
}

export interface productType {
    id?: number,
    attributes?: {
        protName?: string
        protSlug?: string

    }
}



export interface cstmBannerAttributes {
    id?: number
    bnTitle?: string
    bnDesc?: string
    bnColor?: string
    bnCta?: bnCtaAttributes

}

export interface bnCtaAttributes {
    id?: number
    ctaText?: string
    ctaType?: string
    ctaUrl?: string
}