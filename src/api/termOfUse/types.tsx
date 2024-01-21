export interface TermOfUseParams {
    hasDeep: boolean
    lang: string
}

export interface TermOfUseResponse {
    id?: number
    attributes?: TermOfUseAttributesResponse
}

export interface TermOfUseAttributesResponse {
    touSlug?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    locale?: string
    localizations?:any
    touHeader?: touHeaderProps
    touDetail?: string
    seo?: any
}

export interface touHeaderProps {
    id?: number
    hsDesc?: string
    hsTitle?: string

}
