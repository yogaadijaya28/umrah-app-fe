export interface MenuParams {
    hasDeep: boolean
    lang: string
}

export interface MenuReponses {
    id?: number
    attributes?: MenuAttributes
}

export interface MenuAttributes {
    navName?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    navContent?: Array<navContentArray>
    brands?: brandArrayAttributes
    navLearn?: navLearndAttributes
    navIsFooter?: boolean
    navHasSubMenu?: boolean
}

export interface navContentArray {
    id?: string
    __component?: string
    tcTitle?: string
    tcCta?: Array<navContentCTaArray>
}

export interface navContentCTaArray {
    id?: string
    ctaText?: string
    ctaType?: string
    ctaUrl?: string
}

export interface brandArrayAttributes {
    data?: Array<brandAttributes>
}

export interface brandAttributes {
    id?: string
    attributes?: any
}

export interface navLearndAttributes {
    id?: string
    thText?: string
    thDesc?: string
    thImage?: any
    thCta?: Array<navLearnCTA>
}

export interface navLearnCTA {
    id?: string
    ctaText?: string
    ctaType?: string
    ctaUrl?: string
}