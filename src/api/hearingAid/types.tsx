import { hrImageAttributes } from "@/component/companyInfo/types"


export interface DetailEduProjectResponses2 {
    id?: number
    attributes?: any
}
export interface DetailEduProjectParams {
 
    locale: string
    slug: string | any

}


export interface DetailEduProjectResponses {
    id?: number
    attributes?: DetailEduProjectAttribute
}
export interface DetailEduProjectAttribute {
    
        edName?: string,
        edSlug?: string,
        createdAt?: string,
        updatedAt?: string,
        publishedAt?: string,
        locale?: string,
        edHeader?: EduedHeaderAttribute
        edContent?: Array<any>
        seo?: any
        category_custom_prd?: any
    
}

export interface EduedHeaderAttribute {
    id?: number,
    hrTitle?: string,
    hrDesd?: string,
    hrImage?: any,
    hrCta?: EduProjectHeaderCTaAttribute | null,
}

export interface EduProjectHeaderCTaAttribute {
    id?: number,
    ctaText?: string,
    ctaType?: string,
    ctaUrl?: string,
}