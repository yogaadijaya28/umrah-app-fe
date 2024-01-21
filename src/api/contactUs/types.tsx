export interface ContactUspageParams {
    hasDeep: boolean
    lang: string
}

export interface ContactpageResponses {
    id?: number
    attributes?: any
}



export interface PostContactUsParams {
    customer: string
    email: string 
    object: string
    text: string
}
